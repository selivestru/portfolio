import { motion } from 'motion/react'
import { Section } from './Section'

export const About = () => {
  return (
    <Section title='About'>
      <motion.p
        className='mb-4 font-mono font-medium tracking-tight text-zinc-300'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>
        Frontend Developer with 2.6 years of commercial experience in production
        systems. Specializing in React/Next.js with solid skills in backend
        architecture (Node.js, GraphQL, microservices). Experienced in building
        critical real-time systems, including crypto exchanges, blockchain
        integrations, and payment gateways. Deep understanding of the full
        development lifecycle, from UI/UX to production deployment. Highly
        adaptable to new technologies and ready for challenges. Leveraging
        modern AI tools to accelerate development workflow (core stack: Claude
        Code, Codex, OpenCode).
      </motion.p>
    </Section>
  )
}
