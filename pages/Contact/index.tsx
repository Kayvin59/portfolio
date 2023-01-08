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
    id: 'Linkedin',
    items: ['Linkedin'],
    icons: ['SiLinkedin'],
    link: 'https://www.linkedin.com/in/kayvin-ngueeping-09138b124/'
  },
  {
    id: 'github',
    items: ['Github'],
    icons: ['SiGithub'],
    link: 'https://github.com/Kayvin59'
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
          <div className={`${styles.inner} ${styles.custom}`}>
            <Subtitle content="Email" />
            <Link href="mailto:kayvin4@hotmail.com" className={styles.link}>
              kayvin4@hotmail.com
            </Link>
          </div>
          <div className={styles.inner}>
            <Subtitle content="Liens Sociaux" />
            {Datas.map((data) => (
              <Link key={data.id} href={data.link} passHref>
                <a href={data.link}>
                  <List
                    items={data.items}
                    icons={data.icons.map((icon: string) => {
                      const Icon = iconMap[icon]
                      return <Icon />
                    })}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  )
}

export default Contact
