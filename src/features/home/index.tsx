import { Countdown, Feature, Library, Newsletter, Service, Testimonials, Tools } from './components'

export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <main>
      <Countdown />
      <Newsletter />
      <Feature />
      <Service />
      <Tools />
      <Testimonials />
      <Library />
    </main>
  )
}
