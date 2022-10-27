import Section from '../../components/Section/Section'

type Props = {
  id: string
}

const Work = ({ id }: Props) => {
  return (
    <Section id={id}>
      <span>Work</span>
    </Section>
  )
}

export default Work
