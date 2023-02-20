import { useContext, useEffect, useState } from "react"
import AppContext from "../../../Context";
import "./Cart.css"

function Cart(props) {
    const { dispatcherEvents } = useContext(AppContext)
    let [totalPrice, setPrice] = useState(props.item.price)
    useEffect(() => {
        let price = props.item.qty * props.item.price;
        setPrice(price)
    }, [props])
    // let [Quantity, setQuantity] = useState(1);
    // 
    // useEffect(() => {

    //     setPrice(Math.ceil((props.item.price) * (props.item.qty)))


    //     // setQuantity(props.item.qty)
    // }, [props])

    function handleQuantity(value) {
        // if (value > 0) {
        //     totalPrice = Number(props.item.price) * value;
        //     setQuantity(value)
        //     setPrice(totalPrice)

        // }
        // else {
        //     totalPrice = 0;
        //     setPrice(totalPrice)
        //     setQuantity(0)
        // }
        // props.updatePrice(props.item, value)

        props.item.qty = value;
        dispatcherEvents("UPDATE_ITEM", props.item)

    }

    return (

        <div>
            <div className="Card">
                <div className="Card1"> <img className="image" src={props.item.image}></img>

                    {props.item.title}</div>
                < div className="Card2">
                    <span>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                    </svg></span> {totalPrice}
                    <div className="btn-group">
                        <button className="btn btn-minus" onClick={() => {

                            handleQuantity(props.item.qty <= 1 ? 0 : props.item.qty - 1)
                        }}>-</button>
                        <div className="quantity">{props.item.qty} </div>
                        <button className="btn btn-plus " onClick={() => {
                            handleQuantity(props.item.qty + 1)
                        }}>+</button>


                    </div>

                </div>
                <button className=" btn btn-danger delete" onClick={() => {
                    dispatcherEvents("DELETE", props.item.id)
                }}> Delete</button>

                <div>

                </div>

            </div>

        </div>
    )

}
export default Cart