import type { Metadata } from 'next'
import Articles from '@/components/Articles'
import FooterBar from '@/components/FooterBar'
import HeroContain from '@/components/HeroContain'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Easybank landing page',
  description: 'Challenge Easybank landing page',
}

const PageHome = () => (
  <section className="flex min-h-screen w-full flex-col md:max-w-7xl">
    <header className="z-50">
      <NavBar />
    </header>
    <main className="z-40 ">
      <HeroContain />
      <Articles />
    </main>
    <footer>
      <FooterBar />
    </footer>
  </section>
)

export default PageHome
