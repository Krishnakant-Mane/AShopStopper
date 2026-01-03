import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Products } from "./components/Products"
import { Footer } from "./pages/Footer"
import { Navbar } from "./pages/Navbar"
import { Layout } from "./Layout"
import { About } from "./components/About"
import { Signup } from "./components/Signup"
import { ContactUs } from "./components/ContactUs"
import { Viewproduct } from "./components/Viewproduct"
import { Login } from "./components/Login"
import UserInfoProvider from "./provider/UserInfoProvider"
import { LinkInfoProvider } from './provider/LinkInfoProvider'
import { Profile } from "./components/Profile"
import { AddProduct } from "./components/AddProduct"
import { Cart } from "./components/Cart"
import { CartProvider } from "./provider/CartProvider"
import {Toaster} from 'react-hot-toast'
import { Query } from "./components/Query"
import { Orders } from "./components/Orders"

function App() {

  return (
    <>
    <Toaster/>
      <LinkInfoProvider>
        <UserInfoProvider>
          <CartProvider>

            <Routes>

              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="aboutus" element={<About/>} />
                <Route path="product/:id" element={<Viewproduct />} />
                <Route path="profile" element={<Profile />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="cart" element={<Cart />} />
                <Route path="query" element={<Query/>} />
                <Route path="orderdetails" element={<Orders/>} />
              </Route>
            </Routes>
          
          </CartProvider>
        </UserInfoProvider>
      </LinkInfoProvider>

    </>
  )
}

export default App
