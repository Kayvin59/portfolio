import Heading from '../../components/Heading/Heading'
import ScrollDown from '../../components/ScrollDown/ScrollDown'
import Section from '../../components/Section/Section'
import Subheading from '../../components/Subheading/Subheading'

type Props = {
  id: string
  fullname: string
  job: string
}

const Home = ({ id, fullname, job }: Props) => {
  return (
    <Section id={id}>
      <Subheading fullname={fullname} />
      <Heading job={job} />
      <ScrollDown />
    </Section>
  )
}

export default Home
