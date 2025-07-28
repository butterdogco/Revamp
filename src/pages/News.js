import { motion } from "framer-motion"

function News() {
  return (
    <motion.main
      initial={{opacity: 0, x: window.innerWidth}}
      animate={{opacity: 1, x: 0}}
      exit={{x: -window.innerWidth}}
    >
      <h1>News from ButterDogCo</h1>
      <p>Minecraft server has officially released!</p>
    </motion.main>
  )
}

export default News;