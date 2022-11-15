import styles from './Subheading.module.scss'

type Props = {
  fullname: string
}

const Subheading = ({ fullname }: Props) => {
  return <h2 className={styles.subheading}>{fullname}</h2>
}

export default Subheading
