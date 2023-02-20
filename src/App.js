import logo from './logo.svg';
import './App.css';
import MainCart from './pages/Cart/Cart';
import Register from './pages/register/Register';
import Dummypage from './pages/Dummypage/Dummypage';
import appContext from './Context';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Sign in/SignIn';
import { useState } from 'react'


function App() {

    // store for global data
    const [cartItems, setCartItems] = useState([]);

    const dispatcherEvents = (actionType, payload) => {
        switch (actionType) {
            case "ADD_ITEMS": {
                let items = cartItems.slice()
                items.push(payload)
                setCartItems(items)

                break;
            }
            case "UPDATE_ITEM": {
                let items = cartItems.slice();
                let index = items.findIndex(p => p.id === payload.id)
                items[index] = payload;
                setCartItems(items)
                break;
            }
            case "DELETE": {
                let items = cartItems.slice();
                let index = items.findIndex(p => p.id === payload)
                items.splice(index, 1)
                setCartItems(items)
                break;
            }
            default: {
                console.log("INVALID")
            }
        }
    }

    return (
        <appContext.Provider value={{ cartItems, dispatcherEvents }}>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/signin' element={<SignIn />}></Route>
                    <Route path='/Cart' element={<MainCart />}></Route>
                    <Route path='/dummypage' element={<Dummypage />}></Route>

                </Routes>
            </BrowserRouter>
        </appContext.Provider>

    )

}
reportWebVitals();
export default App;
