import Cardlist from '@/components/Cardlist'
import Section from '@/components/Section'
import Title from '@/components/Title'
import { iconMap } from '../../constants/iconMap'

import styles from './Skills.module.scss'

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
    items: [
      'Github',
      'Bitbucket',
      'Webpack',
      'Babel',
      'Next.js',
      'React Testing Library'
    ],
    icons: [
      'SiGithub',
      'SiBitbucket',
      'SiWebpack',
      'SiBabel',
      'SiNextdotjs',
      'SiTestinglibrary'
    ]
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
