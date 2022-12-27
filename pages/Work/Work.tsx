import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import Title from '../../components/Title/Title'

import styles from './Work.module.scss'

const Datas = [
  {
    id: 'happychic',
    name: 'happychic',
    description: ['Maintenance et évolution des 3 sites']
  },
  {
    id: 'loewe',
    name: 'loewe',
    description: [
      'Résolution de bugs',
      "Réalisation d'un blog (Loewe craftprize)"
    ]
  },
  {
    id: "l'Oréal",
    name: "l'Oréal",
    description: [
      "Réalisation d'un site e-commerce B2B from scratch",
      "Développement d'une interface utilisateur responsive"
    ]
  },
  {
    id: 'kering',
    name: 'kering',
    description: [
      'Réalisation de 5 sites e-commerce',
      'Echange avec les clients pour collecter et aider aux besoins métiers'
    ]
  },
  {
    id: 'GSMC',
    name: 'GSMC',
    description: [
      "Développement d'un tunnel de souscription",
      'Résolution de bugs'
    ]
  }
]

type Props = {
  id: string
}

const Work = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content={id} />
      <div className={styles.cardwrapper}>
        {Datas.map((data) => {
          return (
            <Card
              key={data.id}
              subtitle={data.name}
              description={data.description}
            />
          )
        })}
      </div>
    </Section>
  )
}

export default Work
