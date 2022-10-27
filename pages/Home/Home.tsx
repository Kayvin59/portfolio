import Section from '../../components/Section/Section'

type Props = {
  id: string
}

const Home = ({ id }: Props) => {
  return (
    <Section id={id}>
      <span>Home</span>
    </Section>
  )
}

export default Home
