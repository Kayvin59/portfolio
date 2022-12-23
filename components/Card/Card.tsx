import Image from 'next/image'
import example from '../../asset/img-test.jpg'

import styles from './Card.module.scss'

import Subtitle from '../Subtitle/Subtitle'

type Props = {
  subtitle: string
  description: string
}

const Card = ({ subtitle, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
        <Image
          src={example}
          alt="Alt text for the picture"
          width="300px"
          height="200px"
        />
      </div>
      <div className={styles.cardbody}>
        <Subtitle content={subtitle} />
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
