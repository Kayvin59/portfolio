import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const projects = [
  { title: 'Happychic', subtitle: 'E-commerce Platform', image: '/happychic.jpg' },
  { title: 'Loewe', subtitle: 'Blog', image: '/loewe.jpg' },
  { title: 'LOréal', subtitle: 'E-commerce Platform', image: '/kering.jpg' },
  { title: 'Kering', subtitle: 'E-commerce Platform', image: '/ysl.jpg' },
  { title: 'GSMC', subtitle: 'SaaS', image: '/gsmc.jpg' },
  { title: 'Whiteswap', subtitle: 'Exchange', image: '/exchange.jpg' },
]

export default function Work() {
  return (
    <section id="work" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-abril text-center mb-8">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:translate-y-16' : ''}`}
            >
              <Card className="bg-background flex-grow overflow-hidden h-full border-0 rounded-none">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative w-full pt-[75%]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="absolute top-0 left-0 w-full h-full"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
