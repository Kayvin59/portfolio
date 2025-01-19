'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Cpu,
  Layout,
  MessageSquare,
  Palette,
  Server
} from 'lucide-react'
import { useRef } from 'react'

const skills = [
  {
    category: 'Frontend',
    icon: Code,
    items: [
      'HTML',
      'CSS/SCSS/LESS',
      'BootStrap/JQuery',
      'Tailwind',
      'JavaScript/TypeScript',
      'React',
      'Redux/TanStack Query/Shadcn',
      'Next JS'
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'REST API/GraphQL', 'PostgreSQL', 'Supabase', 'Docker']
  },
  {
    category: 'Web3',
    icon: Cpu,
    items: ['Solidity', 'Web3.js/ethers.js', 'IPFS', 'Hardhat/Truffle', 'Alchemy/Infura/QuickNode' ]
  },
  {
    category: 'Development',
    icon: Layout,
    items: ['Git', 'GitHub/Gitlab/Bitbucket', 'Webpack/Vite', 'ESLint/Prettier', 'Vitest/Jest', 'Github Actions']
  },
  {
    category: 'Communication',
    icon: MessageSquare,
    items: ['Slack', 'Teams', 'Jira', 'Confluence', 'Trello']
  },
  {
    category: 'Design',
    icon: Palette,
    items: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator']
  }
]

export default function Skills() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-abril text-center mb-8">Skills</h2>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="w-full flex-shrink-0 snap-center px-2 sm:w-1/2 lg:w-1/4"
              >
                <Card className="h-full">
                  <CardHeader className="bg-muted flex flex-col items-center">
                    <skill.icon className="h-12 w-12 text-button mb-2" />
                    <CardTitle className="text-muted-foreground">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <ul className="space-y-2 flex flex-col items-center">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center space-x-2 group"
                        >
                          <span className="w-2 h-2 bg-button rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
