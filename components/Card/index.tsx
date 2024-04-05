import Image from 'next/image'

import styles from './Card.module.scss'

import Subtitle from '../Subtitle'

type Props = {
  subtitle: string
  description: string[]
  img: string
  altText: string
}

const Card = ({ subtitle, description, img, altText }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
        <Image src={`/${img}`} alt={altText} width="300" height="200" />
      </div>
      <div className={styles.cardbody}>
        <Subtitle content={subtitle} />
        <ul>
          {description.map((item) => (
            <li className={styles.listitem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card
