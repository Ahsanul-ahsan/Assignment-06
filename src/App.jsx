
import { useState } from 'react'
import './App.css'
import Banner from './Componet/Banner/Banner'
import Header from './Componet/Header/Header'
import Navbar from './Componet/Navbar/Navbar'
import Tools from './Componet/Tools/Tools'
import Card from './Componet/Card/Card'
import ShowDeatils from './Componet/ShowDeatils/ShowDeatils'
import { ToastContainer } from 'react-toastify'
import GetStep from './Componet/GetStep/GetStep'
import Simple from './Componet/Simple/Simple'
import SimpleTitle from './Componet/SimpleTitle/SimpleTitle'
import Footer from './Componet/Footer/Footer'


const DataPromise = async () => {
  const res = await fetch("/Data.Json")
  return res.json()
}
const card = DataPromise()


function App() {
  const [activeTab, setActiveTab] = useState("Products")
  const [cartDeatils, setCartDeatils] = useState([])
  




  return (
    <>
      <ToastContainer />
      <Navbar cartDeatils={cartDeatils} />
      <Banner />
      <Header />
      <Tools />

      {/* Product Button  */}
      <div className="tabs tabs-box justify-center mb-10 bg-transparent">
        <input onClick={() => setActiveTab("Products")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${activeTab === "Products" ? "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold" : ""}`} aria-label="Products" defaultChecked />
        <input onClick={() => setActiveTab("Cart")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${activeTab === "Cart" ? "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold" : ""}`} aria-label={`Cart (${cartDeatils?.length || 0})`} />
      </div>
      {
        activeTab === "Products" ? <Card card={card} cartDeatils={cartDeatils} setCartDeatils={setCartDeatils} ></Card> : <ShowDeatils cartDeatils={cartDeatils} setCartDeatils={setCartDeatils} ></ShowDeatils>

      }
    <GetStep></GetStep>
    <SimpleTitle></SimpleTitle>
    <Simple></Simple>
    <Footer></Footer>

    </>
  )
}

export default App
