import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/views/home.jsx'
import './scss/app.scss'
import {default as PublicProductList} from './components/views/public/products/list.jsx';
import {default as PublicProductDetail} from './components/views/public/products/detail.jsx';
import Error404 from './components/views/errors/error404.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import Cart from './components/views/cart.jsx';
// import { default as productSeeder } from './seeders/productSeeder.jsx';
// productSeeder();
/** 
 * @see https://reactrouter.com/start/declarative/routing
*/
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="categories">
            <Route path=':category_id' element={<PublicProductList greeting="Categoria"/>}/>
          </Route>
          <Route path="products">
            <Route index element={<PublicProductList />} />
            <Route path=":product_id" element={<PublicProductDetail />} />
          </Route>

          <Route path="*" element={<Error404/>} />

        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
