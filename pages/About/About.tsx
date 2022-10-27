import Section from '../../components/Section/Section'

type Props = {
  id: string
}

const About = ({ id }: Props) => {
  return (
    <Section id={id}>
      <span>About</span>
    </Section>
  )
}

export default About
