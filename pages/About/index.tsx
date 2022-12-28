import Section from '@/components/Section'
import Title from '@/components/Title'

type Props = {
  id: string
}

const About = ({ id }: Props) => {
  return (
    <Section id={id}>
      <Title content={id} />
      <p>
        Je suis développeur front-end basé a Lille. Depuis plus de 6 ans je
        participe au développement de sites e-commerce pour des marques locales,
        nationales comme des marques de luxe Internationales.
      </p>
      <p>
        Grâce a ces expériences je connais les bonnes pratiques pour créer des
        sites simples et fonctionnels. Aujourd&apos;hui je travaille
        principalement avec React, Next.js, Typescript avec un oeil prononcé
        pour le détail. Je cherche toujours à améliorer mes compétences et je
        reste a l&apos;affut des dernières tendances en développement Web.
      </p>
      <p>
        Durant mon temps libre je pratique du futsal, de l&apos;escalade et du
        tennis. J&apos;adore et j&apos;ai besoin de musique tous les jours. Et
        pour finir en bon lillois qui se respecte j&apos;aime la bière.
      </p>
    </Section>
  )
}

export default About
