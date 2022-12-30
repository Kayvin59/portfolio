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
  SiNextdotjs,
  SiReact,
  SiSass,
  SiSketch,
  SiSlack,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiWebpack
} from 'react-icons/si' /* SiTailwindcss */

import Cardlist from '@/components/Cardlist'
import Section from '@/components/Section'
import Title from '@/components/Title'

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
  SiBabel,
  SiNextdotjs,
  SiTailwindcss
}

const Datas = [
  {
    id: 'code',
    name: 'code',
    items: [
      'HTML',
      'CSS',
      'SASS',
      'Tailwind',
      'Javascript',
      'React',
      'Typescript'
    ],
    icons: [
      'SiHtml5',
      'SiCss3',
      'SiSass',
      'SiTailwindcss',
      'SiJavascript',
      'SiReact',
      'SiTypescript'
    ]
  },
  {
    id: 'design',
    name: 'design',
    items: ['Figma', 'Sketch', 'Adobe XD', 'Illustrator'],
    icons: ['SiFigma', 'SiSketch', 'SiAdobexd', 'DiIllustrator']
  },
  {
    id: 'communication',
    name: 'communication',
    items: ['Slack', 'Teams', 'Jira', 'Confluence', 'Trello'],
    icons: ['SiSlack', 'SiMicrosoftteams', 'SiJira', 'SiConfluence', 'SiTrello']
  },
  {
    id: 'development',
    name: 'development',
    items: ['Github', 'Bitbucket', 'Webpack', 'Babel', 'Next.js'],
    icons: ['SiGithub', 'SiBitbucket', 'SiWebpack', 'SiBabel', 'SiNextdotjs']
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
              key={data.id}
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
