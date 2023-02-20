import { useContext, useEffect, useState } from "react"
import Footer from "../../components/Shared/Footer/Footer"
import Header from "../../components/Shared/Header/Header"
import Cart from "../../components/Order/Cart/Cart"
import "./Cart.css"
import AppContext from "../../Context"
function MainCart() {

    const { cartItems } = useContext(AppContext)
    // const [totalPrice, setPrice] = useState(0)

    // useEffect(() => {
    //     let cart = localStorage.getItem("cart")
    //     let cartItems = JSON.parse(cart)
    //     setcarts(cartItems);
    //     updateTotalprice(cartItems)




    //     // fetch("/product.json")
    //     //     .then((res) => res.json())
    //     //     .then((res) => {
    //     //         updateTotalprice(res)
    //     //         setcarts(res)

    //     //     })
    // }, [])
    // function updatePrice(item, value) {
    //     let items = Carts;
    //     let cartItemIndex = items.findIndex((i) => i.title === item.title);
    //     items[cartItemIndex].qty = value;
    //     setcarts(items);
    //     updateTotalprice(items)
    // }
    // function updateTotalprice(res) {
    //     let sum = 0;
    //     for (let i = 0; i < res.length; i++) {
    //         sum = sum + Number(res[i].price) * Number(res[i].qty);
    //         setPrice(Math.ceil(sum))

    //     }

    // }
    // function deleteItem(index) {
    //     let items = Carts;
    //     items.splice(index, 1);
    //     setcarts(items)
    //     updateTotalprice(items)


    // }
    // function deleteItem(index) {
    //     let items = Carts;
    //     items.splice(index, 1);
    //     setcarts([...items])
    //     updateTotalprice(items)
    //     localStorage.setItem("cart", JSON.stringify(items))



    // }
    let totalPrice = 0;
    totalPrice = cartItems.reduce((prev, curr) => {
        return Math.ceil(prev + (curr.price * curr.qty))
    }, 0)
    return (
        <div>
            <Header />
            <h4> Total price : {totalPrice} </h4>
            {cartItems.map((el, index) => (
                <Cart key={el.id} index={index} item={el} />
            ))
            }

            <Footer />
        </div>

    )
}

export default MainCart