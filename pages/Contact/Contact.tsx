import Section from '../../components/Section/Section'

type Props = {
  id: string
}

const Contact = ({ id }: Props) => {
  return (
    <Section id={id}>
      <span>Contact</span>
    </Section>
  )
}

export default Contact
