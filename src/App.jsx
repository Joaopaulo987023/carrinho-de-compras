import Cart from "./components/Cart"
import Header from "./components/Header"
import Products from "./components/Products"
import CarrinhoProvider from "./context/CarrinhoProvider"

function App() {
  

  return (
    <CarrinhoProvider>
      <Header/>
      <Products/>
      <Cart/>
    </CarrinhoProvider>
  )
}

export default App
