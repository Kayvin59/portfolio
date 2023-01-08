import Card from '@/components/Card'
import Section from '@/components/Section'
import Title from '@/components/Title'

import styles from './Work.module.scss'

const Datas = [
  {
    id: 'happychic',
    name: 'happychic',
    description: ['Maintenance et évolution des 3 sites'],
    img: 'happychic.jpg',
    altText: 'Chemise a rayures en gros plan'
  },
  {
    id: 'loewe',
    name: 'loewe',
    description: [
      'Résolution de bugs',
      "Réalisation d'un blog (Loewe craftprize)"
    ],
    img: 'loewe.jpg',
    altText: 'Sac à main sur fond bleu avec ses accessoires'
  },
  {
    id: "l'Oréal",
    name: "l'Oréal",
    description: [
      "Réalisation d'un site e-commerce B2B from scratch",
      "Développement d'une interface utilisateur responsive"
    ],
    img: 'loreal.jpg',
    altText: "Plusieurs produits de beauté de la marque l'Oréal"
  },
  {
    id: 'kering',
    name: 'kering',
    description: [
      'Réalisation de 5 sites e-commerce',
      'Echange avec les clients pour collecter et aider aux besoins métiers'
    ],
    img: 'kering.jpg',
    altText: 'Sac à main Yves-Saint-Laurent posé sur une table'
  },
  {
    id: 'GSMC',
    name: 'GSMC',
    description: [
      "Développement d'un tunnel de souscription",
      'Résolution de bugs'
    ],
    img: 'gsmc.jpg',
    altText: 'Personne présentant un papier et un stylo à un client'
  }
]

type Props = {
  id: string
}

const Work = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content="Expériences" />
      <div className={styles.cardwrapper}>
        {Datas.map((data) => {
          return (
            <Card
              key={data.id}
              subtitle={data.name}
              description={data.description}
              img={data.img}
              altText={data.altText}
            />
          )
        })}
      </div>
    </Section>
  )
}

export default Work
