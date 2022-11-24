import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ducimus doloribus molestias quod corporis architecto ipsum sapiente odit, eaque, rerum sequi, fuga blanditiis quisquam sint repellat vel labore cumque! Obcaecati!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores sapiente dolorum, ipsam, placeat aliquam perferendis totam nemo quae possimus molestias officia eum veritatis sed repellendus voluptate. Necessitatibus, sequi aut!
        </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}

export default PizzaList