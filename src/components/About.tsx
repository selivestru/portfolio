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
        Full-Stack / Frontend Developer with 2.5+ years of commercial experience
        engineering high-performance web applications, decentralized platforms,
        and real-time production systems. Proficient in React, Next.js,
        TypeScript, Node.js, and NestJS/Express, with hands-on expertise in
        WebSockets, gRPC microservices, Web3/Solana integrations, and Telegram
        Mini Apps. Proven track record of taking full ownership of projects from
        initial architecture to deployment, with a strong focus on low-latency
        UI updates, scalable backend services, and continuous delivery. Adept at
        leveraging modern AI-assisted coding tools to maximize workflow
        efficiency and velocity.
      </motion.p>
    </Section>
  )
}
