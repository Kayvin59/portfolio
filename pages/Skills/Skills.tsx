import Section from '../../components/Section/Section'
import Title from '../../components/Title/Title'

type Props = {
  id: string
}

const Skills = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content={id} />
    </Section>
  )
}

export default Skills