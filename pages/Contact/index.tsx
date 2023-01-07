import Link from 'next/link'

import ContactForm from '@/components/ContactForm'
import List from '@/components/List'
import Section from '@/components/Section'
import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'

import { iconMap } from '@/constants/iconMap'
import styles from './Contact.module.scss'

const Datas = [
  {
    id: 'github',
    items: ['github'],
    icons: ['SiGithub']
  },
  {
    id: 'linkedin',
    items: ['linkedin'],
    icons: ['SiLinkedin']
  }
]

type Props = {
  id: string
}

const Contact = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content={id} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p>
            Si vous souhaitez en savoir plus. Vous trouverez différents moyens
            d&apos;y parvenir ci-dessous.
          </p>
          <Subtitle content="Email" />
          <Link href="mailto:kayvin4@hotmail.com" className={styles.link}>
            kayvin4@hotmail.com
          </Link>
          <Subtitle content="Liens Sociaux" />
          {Datas.map((data) => (
            <List
              key={data.id}
              items={data.items}
              icons={data.icons.map((icon: string) => {
                const Icon = iconMap[icon]
                return <Icon />
              })}
            />
          ))}
        </div>
        <ContactForm />
      </div>
    </Section>
  )
}

export default Contact
