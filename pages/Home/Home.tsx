import Heading from '../../components/Heading/Heading'
import Section from '../../components/Section/Section'
import Subheading from '../../components/Subheading/Subheading'

type Props = {
  id: string
}

const Home = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Subheading fullname="Kayvin Ngueeping" />
      <Heading />
    </Section>
  )
}

export default Home
