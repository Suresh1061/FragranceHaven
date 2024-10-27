import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import ProductDetails from "./pages/ProductDetails"
import Home from "./pages/Home"

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App