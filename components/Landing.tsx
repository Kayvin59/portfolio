import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Landing() {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <Button asChild className="bg-button font-bold md:mr-8">
                <Link href="mailto:kayvin.bbk@gmail.com">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center space-x-2 lg:self-center text-muted-foreground self-center">
                <Link href="#work" className="hover:text-primary transition-colors">
                  Discover my work
                </Link>
                <ArrowDown className="h-4 w-4" />
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://twitter.com/0xYvanik" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/kayvin-ngueeping-09138b124/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://github.com/Kayvin59" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-abril text-button">Hi, I'm Kayvin</h1>
            <h2 className="text-2xl font-semibold">I build user-friendly interfaces</h2>
            <p className="text-muted-foreground">
              With 8 years of experience working with world-class companies, I specialize in building and maintaining products that clients love.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
