import Card from '../components/Card';
import GlowLogo from '../img/ButterDog Glow.png';
import { motion } from "framer-motion"

const cards = [
  {
    image: GlowLogo,
    header: "Welcome to ButterDogCo",
  }
];

function Home() {
  return (
    <motion.main
      initial={{opacity: 0, x: window.innerWidth}}
      animate={{opacity: 1, x: 0}}
      exit={{x: -window.innerWidth}}
    >
      <h1>Welcome to ButterDogCo</h1>
      <p>We're a small group with no goal in mind.</p>
      {cards.map((card, i) => (
        <Card key={i} header={card.header} image={card.image} description={card.description} link={card.link} />
      ))}
    </motion.main>
  )
}

export default Home;