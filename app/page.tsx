import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import ForCandidates from '@/components/sections/ForCandidates'
import ForEmployers from '@/components/sections/ForEmployers'
import SocialProof from '@/components/sections/SocialProof'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturesGrid />
      <ForCandidates />
      <ForEmployers />
      <SocialProof />
      <CtaBanner />
    </>
  )
}
