import { useEffect, useState } from "react"
import ProductCard from "../../components/Home/ProductCard/ProductCard"
import Footer from "../../components/Shared/Footer/Footer"
import Header from "../../components/Shared/Header/Header"
import Cart from "../../components/Order/Cart/Cart"
import './Home.css'

function Home() {
    const [products, setProducts] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [clic, setClick] = useState(0)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            // callong json function
            .then(res => res.json())
            // listening for json function to return
            .then(res => {

                res.forEach(element => {
                    if (!element.qty) element.qty = 1;
                    element.rating.rate = Math.ceil(element.rating.rate)

                });
                setProducts(res)



            })
        // notifyToUpdate()
    }, [])
    // function notifyToUpdate() {
    //     let items = localStorage.getItem("cart");
    //     if (items) {
    //         const cartItems = JSON.parse(items);
    //         setCartCount(cartItems.length)

    //     }
    // }

    return (
        <div>
            <Header />

            {/* <h3> {clic}</h3>
                <button onClick={() => {
                    setClick(clic + 1)
                }}> Click</button> */}
            <div className="row">
                {products.map((el, i) => (

                    <div key={el.id} className="col-sm-6 col-md-3"> <ProductCard item={el} index={i} /></div>

                ))}
            </div>


            <Footer />
        </div>

    )
}


export default Home 