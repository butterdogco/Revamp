import { motion } from "framer-motion"

function About() {
  return (
    <motion.main
      initial={{opacity: 0, x: window.innerWidth}}
      animate={{opacity: 1, x: 0}}
      exit={{x: -window.innerWidth}}
    >
      <h1>About ButterDogCo</h1>
    </motion.main>
  )
}

export default About;