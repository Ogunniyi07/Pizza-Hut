import styles from '../../styles/Order.module.css'
import Image from 'next/image'
import { useState } from "react";

const Order = () => {

    const status = 0;

    const statusClass = (index) =>{
        if (index - status <1 ) return styles.done;
        if (index - status ===1 ) return styles.inProgress;
        if (index - status >1 ) return styles.undone;
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <div className={styles.table}>
                    <div className={styles.trTitle}>
                        <b>Order ID</b>
                        <b>Customer</b>
                        <b>Address</b>
                        <b>Total</b>
                    </div>
                <div className={styles.tr}>
                    <span className={styles.id}>1234567890</span>
                    <div className={styles.th}>
                        <span className={styles.name}>Julius Ogunniyi</span>
                    </div>
                    <div className={styles.th}>
                        <span className={styles.address}>22, Bolarin street, ikotun, lagos</span>
                    </div>
                    <div className={styles.th}>
                        <span className={styles.total}>$79.80</span>
                    </div>
                </div>
            </div>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30} alt=""/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={30} height={30} alt=""/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/bake.png" width={30} height={30} alt=""/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={30} height={30} alt=""/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/bike.png" width={30} height={30} alt=""/>
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={30} height={30} alt=""/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/delivered.png" width={30} height={30} alt=""/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={30} height={30} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$79.60
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>
  )
}

export default Order

// import styles from "../styles/Product.module.css"
// import Image from "next/image"
// import { useState } from "react";

// const Order = () => {
//     const [size, setSize] = useState(0);
//     const pizza = {
//         id: 1,
//         img: "/img/pizza.png",
//         name:"CAMPAGNOLA",
//         price: [19.9, 23.9, 27.9],
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptas, quas error dolorem repudiandae blanditiis magni consequatur facilis porro hic praesentium libero perferendis recusandae sunt minima eligendi nihil fugiat reiciendis!",
//     };
  
  
//     return <div className={styles.container}>
//         <div className={styles.left}>
//             <div className={styles.imgContainer}>
//                 <Image src={pizza.img} layout="fill" alt="" objectFit="contain"/>
//             </div>
//         </div>
//         <div className={styles.right}>
//             <h1 className={styles.title}>{pizza.name}</h1>
//             <span className={styles.price}>${pizza.price[size]}</span>
//             <b className={styles.desc}>{pizza.desc}</b>
//             <h3 className={styles.choose}>Choose the size</h3>
//             <div className={styles.sizes}>
//                 <div className={styles.size} onClick={()=>setSize(0)}>
//                     <Image src="/img/size.png" layout="fill" alt="" />
//                     <span className={styles.number}>Small</span>
//                 </div>
//                 <div className={styles.size} onClick={()=>setSize(1)}>
//                     <Image src="/img/size.png" layout="fill" alt="" />
//                     <span className={styles.number}>Medium</span>
//                 </div>
//                 <div className={styles.size} onClick={()=>setSize(2)}>
//                     <Image src="/img/size.png" layout="fill" alt="" />
//                     <span className={styles.number}>Large</span>
//                 </div>
//             </div>
//             <h3 className={styles.choose}>Choose additional Ingredients</h3>
//             <div className={styles.ingredients}>
//                 <div className={styles.option}>
//                     <input type="checkbox" 
//                         id="double" 
//                         name="double" 
//                         className={styles.checkbox} 
//                         />
//                         <label htmlFor="double">Double ingredients</label>
//                 </div>
//                 <div className={styles.option}>
//                     <input type="checkbox" 
//                         id="cheese" 
//                         name="cheese" 
//                         className={styles.checkbox} 
//                         />
//                         <label htmlFor="cheese">Extra Cheese</label>
//                 </div>
//                 <div className={styles.option}>
//                     <input type="checkbox" 
//                         id="spicy" 
//                         name="spicy" 
//                         className={styles.checkbox} 
//                         />
//                         <label htmlFor="spicy">Spicy Sauce</label>
//                 </div>
//                 <div className={styles.option}>
//                     <input type="checkbox" 
//                         id="garlic" 
//                         name="garlic" 
//                         className={styles.checkbox} 
//                         />
//                         <label htmlFor="garlic">Garlic Sauce</label>
//                 </div>
//             </div>
//             <div className={styles.add}>
//                 <input type="number" 
//                     defaultValue={1} 
//                     className={styles.quantity} 
//                     />
//                     <button className={styles.button}>Add to Cart</button>
//             </div>
//         </div>
//     </div>
// } 
    

// export default Order