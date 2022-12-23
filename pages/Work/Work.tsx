import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import Title from '../../components/Title/Title'

import styles from './Work.module.scss'

type Props = {
  id: string
}

const Work = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content={id} />
      <div className={styles.cardwrapper}>
        <Card subtitle="Kering" description="loremsqff ezfzefzv cazcze" />
        <Card subtitle="Kering" description="loremsqff ezfzefzv cazcze" />
        <Card subtitle="Kering" description="loremsqff ezfzefzv cazcze" />
        <Card subtitle="Kering" description="loremsqff ezfzefzv cazcze" />
        <Card subtitle="Kering" description="loremsqff ezfzefzv cazcze" />
        <Card subtitle="Kering" description="loremsqff ezfzefzv cazcze" />
        <Card subtitle="Kering" description="loremsqff ezfzefzv cazcze" />
      </div>
    </Section>
  )
}

export default Work
