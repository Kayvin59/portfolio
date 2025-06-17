import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { title: 'Happychic', subtitle: 'E-commerce Websites', image: '/happychic.jpg', url: 'https://www.jules.com/fr-fr/l/jules-x-brice/' },
  { title: 'Loewe', subtitle: 'Blog', image: '/loewe.jpg', url: 'https://craftprize.loewe.com/en/craftprize2025' },
  { title: 'LOréal', subtitle: 'Luxury E-commerce website', image: '/loreal.jpg', url: 'https://www.lorealpartnershop.com/home' },
  { title: 'Kering', subtitle: 'Luxury E-commerce website', image: '/ysl.jpg', url: 'https://www.ysl.com/fr-fr' },
  { title: 'GSMC', subtitle: 'Insurance website', image: '/gsmc.jpg', url: 'https://www.mutuelle-gsmc.fr/' },
  { title: 'Bricovis', subtitle: 'E-commerce website', image: '/bricovis.jpg', url: 'https://www.bricovis.fr/' },
  { title: 'Whiteswap', subtitle: 'Decentralized Exchange', image: '/exchange.jpg', url: 'https://ws.exchange/' },
  { title: 'Based Place ( Side Project )', subtitle: 'DApp', image: '/basedplaceimg.svg', url: 'https://basedplace.vercel.app/' },
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
              className={`flex flex-col ${index % 2 !== 0 ? 'md:translate-y-32' : ''}`}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <Card className="bg-background flex-grow overflow-hidden h-full border-0 rounded-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(82,89,188,0.3)] hover:cursor-pointer">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative w-full pt-[75%]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="absolute top-0 left-0 w-full h-full"
                        width={736}
                        height={552}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
