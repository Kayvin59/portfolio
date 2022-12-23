import { IconType } from 'react-icons'
import { DiIllustrator } from 'react-icons/di'
import {
  SiAdobexd,
  SiBabel,
  SiBitbucket,
  SiConfluence,
  SiCss3,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMicrosoftteams,
  SiReact,
  SiSass,
  SiSketch,
  SiSlack,
  SiTrello,
  SiTypescript,
  SiWebpack
} from 'react-icons/si'
import Cardlist from '../../components/Cardlist/Cardlist'
import Section from '../../components/Section/Section'
import Title from '../../components/Title/Title'

import styles from './Skills.module.scss'

const iconMap: { [key: string]: IconType } = {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiFigma,
  SiSketch,
  SiAdobexd,
  DiIllustrator,
  SiSlack,
  SiMicrosoftteams,
  SiJira,
  SiConfluence,
  SiTrello,
  SiGithub,
  SiBitbucket,
  SiWebpack,
  SiBabel
}

const Datas = [
  {
    name: 'code',
    items: ['HTML', 'CSS', 'SASS', 'Javascript', 'React', 'Typescript'],
    icons: [
      'SiHtml5',
      'SiCss3',
      'SiSass',
      'SiJavascript',
      'SiReact',
      'SiTypescript'
    ]
  },
  {
    name: 'design',
    items: ['Figma', 'Sketch', 'Adobe XD', 'Illustrator'],
    icons: ['SiFigma', 'SiSketch', 'SiAdobexd', 'DiIllustrator']
  },
  {
    name: 'communication',
    items: ['Slack', 'Teams', 'Jira', 'Confluence', 'Trello'],
    icons: ['SiSlack', 'SiMicrosoftteams', 'SiJira', 'SiConfluence', 'SiTrello']
  },
  {
    name: 'development',
    items: ['Github', 'Bitbucket', 'Webpack', 'Babel'],
    icons: ['SiGithub', 'SiBitbucket', 'SiWebpack', 'SiBabel']
  }
]

type Props = {
  id: string
}

const Skills = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content={id} />
      <div className={styles.cardlistwrapper}>
        {Datas.map((data) => {
          return (
            <Cardlist
              subtitle={data.name}
              categories={data.items}
              icons={data.icons.map((icon) => {
                const Icon = iconMap[icon]
                return <Icon />
              })}
            />
          )
        })}
      </div>
    </Section>
  )
}

export default Skills
