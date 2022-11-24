import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="alt" objectFit="cover" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE JULS PIZZA, WELL BAKED SLICE OF PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        22, Bolarin Street,
                        <br />Ikotun, Lagos.
                        <br />(234) 909-2442-0929
                    </p>
                    <p className={styles.text}>
                        22, Bolarin Street,
                        <br />Ikotun, Lagos.
                        <br />(234) 909-2442-0929
                    </p>
                    <p className={styles.text}>
                        22, Bolarin Street,
                        <br />Ikotun, Lagos.
                        <br />(234) 909-2442-0929
                    </p>
                    <p className={styles.text}>
                        22, Bolarin Street,
                        <br />Ikotun, Lagos.
                        <br />(234) 909-2442-0929
                    </p>
                </div>
                <div className={styles.card}>
                <h1 className={styles.title}>WORKING HOURS</h1>
                <p className={styles.text}>
                    SUNDAY - SATURDAY
                    <br />12:00 -24:00
                </p>
                </div>
            </div>
        </div>
    )
}

export default Footer