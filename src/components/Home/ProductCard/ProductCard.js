import './ProductCard.css'
import AppContext from '../../../Context';
import { useContext } from 'react';

function ProductCard(pros) { // pros is like a function in which it stores all the data in one object we can use any name instead of pros
    const { dispatcherEvents } = useContext(AppContext)
    function handleAddToCart() {
        dispatcherEvents("ADD_ITEMS", pros.item);

        // for local storage
        // let cart = localStorage.getItem("cart");
        // if (!cart) {
        //     let cartItems = []
        //     cartItems.push(pros.item)
        //     localStorage.setItem("cart", JSON.stringify(cartItems))
        // }
        // else {
        //     let cartItems = JSON.parse(cart);
        //     cartItems.push(pros.item)
        //     localStorage.setItem("cart", JSON.stringify(cartItems))

        // }
        // now we will write code for context api


        // pros.notify();
    }




    let stars = []
    for (let i = 0; i < pros.item.rating.rate; i++) {
        stars[i] = 1
    }
    const key = pros.item.id + "svg";

    return (

        <div className="card" >
            <h5 className="card-title">{pros.item.title}</h5>
            <img src={pros.item.image} alt="..."></img>
            <hr />
            <div className="card-body">
                <p className='card-text'> {pros.item.category}</p>
                {/* pros.item.name.slice(0,8) to slice the name into 8 characters */}
                <p className="card-text"> &#x20B9; {pros.item.price}</p>
                <p className='stars'>
                    {
                        stars.map((x, i) => (


                            <svg key={key + i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        ))
                    }
                    &nbsp;   &nbsp;
                    <span> {pros.item.rating.count}</span> </p>
                <p className='card-text'> {pros.item.description}</p>
                {/* <p className="card-text">{pros.item.description.slice(0, 12)}</p> */}
                <button className="btn btn-success flex-box" onClick={handleAddToCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>   &nbsp; Add to Cart</button>
            </div>
        </div>

    )
}
export default ProductCard