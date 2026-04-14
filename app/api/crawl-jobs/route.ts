import Anthropic from '@anthropic-ai/sdk'

export const runtime = 'nodejs'
export const maxDuration = 60

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST() {
  const prompt = `You are an AI job crawler. Generate a JSON array of 8 realistic tech job listings currently available in San Francisco, CA.

Each job object must follow this exact schema:
{
  "id": number,
  "title": string,
  "company": string,
  "location": "San Francisco, CA" | "San Francisco, CA · Hybrid" | "San Francisco, CA · On-site",
  "salary": string (e.g. "$160k – $220k"),
  "type": "Full-time",
  "stack": string[] (2-4 technologies),
  "posted": string (e.g. "1 day ago", "3 days ago"),
  "featured": boolean,
  "description": string (1 sentence summary of the role)
}

Use real, well-known tech companies based in San Francisco (e.g., Salesforce, Cloudflare, Lyft, Airbnb, DoorDash, Figma, Anthropic, OpenAI, GitHub, Slack, Twitter/X, Dropbox, Square/Block, Coinbase, Discord, Instacart, Robinhood, Brex, Rippling, Databricks, etc.).

Include a mix of roles: frontend, backend, fullstack, ML/AI, data engineering, platform/infra, mobile, security.

Return ONLY a valid JSON array with no markdown, no explanation, no code blocks — just the raw JSON array starting with [ and ending with ].`

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      let buffer = ''

      try {
        const anthropicStream = await client.messages.stream({
          model: 'claude-opus-4-6',
          max_tokens: 4000,
          thinking: { type: 'adaptive' },
          messages: [{ role: 'user', content: prompt }],
        })

        for await (const chunk of anthropicStream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            buffer += chunk.delta.text
          }
        }

        // Parse and validate the JSON
        const jsonStart = buffer.indexOf('[')
        const jsonEnd = buffer.lastIndexOf(']')

        if (jsonStart === -1 || jsonEnd === -1) {
          controller.enqueue(
            encoder.encode(
              JSON.stringify({ error: 'Invalid response from AI' }) + '\n'
            )
          )
          controller.close()
          return
        }

        const jsonStr = buffer.slice(jsonStart, jsonEnd + 1)
        const jobs = JSON.parse(jsonStr)

        // Stream each job individually so the UI can render progressively
        for (const job of jobs) {
          controller.enqueue(encoder.encode(JSON.stringify(job) + '\n'))
          // Small artificial delay for progressive reveal effect
          await new Promise((r) => setTimeout(r, 80))
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        controller.enqueue(
          encoder.encode(JSON.stringify({ error: message }) + '\n')
        )
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'application/x-ndjson',
      'Cache-Control': 'no-cache',
    },
  })
}
