import styles from "../styles/PizzaCard.module.css"
import Image from "next/image"

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image className={styles.image} src="/img/pizza.png" alt="" height="250" width="250" />
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
            Lorem ipsum dolor, consectetur adipisicing elit. A illo laudantium veritatis corrupti consequatur!
        </p>
    </div>
  )
}

export default PizzaCard