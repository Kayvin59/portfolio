import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-abril text-center">Get in Touch</h2>
          <p className="text-center text-muted-foreground">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-button">
              <Link href="mailto:kayvin.bbk@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send an Email
              </Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
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
      </div>
    </section>
  )
}