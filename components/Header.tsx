'use client'

// import { LanguageToggle } from '@/components/LanguageToggle'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="py-6 md:py-8">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/avatar.png"
            alt="Kayvin"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover-underline-animation text-muted-foreground"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* <LanguageToggle /> */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full bg-transparent">
              <SheetTitle>
                Menu
              </SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
              <div className="absolute top-0 right-0 w-full h-full bg-background rounded-bl-full transition-all duration-300 ease-in-out origin-top-right" style={{ transform: isOpen ? 'scale(1)' : 'scale(0)' }}>
                <nav className="flex flex-col space-y-4 mt-16 mr-8 text-right">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg text-muted-foreground"
                      onClick={() => {
                        setIsOpen(false);
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
