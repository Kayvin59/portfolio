import Section from '../../components/Section'
import Title from '../../components/Title'

type Props = {
  id: string
}

const Contact = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content={id} />
    </Section>
  )
}

export default Contact
