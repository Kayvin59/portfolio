import styles from './Heading.module.scss'

type Props = {
  job: string
}

const Heading = ({ job }: Props) => {
  return <h1 className={styles.title}>{job}</h1>
}

export default Heading
