import Section from '../../components/Section/Section'
import Title from '../../components/Title/Title'

type Props = {
  id: string
}

const About = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content={id} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit a
        omnis in, molestiae sit laborum consectetur sequi quas ipsa itaque.
        Nobis a dolore aut sint consequatur unde, doloribus veniam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit a
        omnis in, molestiae sit laborum consectetur sequi quas ipsa itaque.
        Nobis a dolore aut sint consequatur unde, doloribus veniam.
      </p>
    </Section>
  )
}

export default About
