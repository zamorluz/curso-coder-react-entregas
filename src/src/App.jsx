import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/views/home.jsx'
import './scss/app.scss'
import {default as PublicProductList} from './components/views/public/products/list.jsx';
import {default as PublicProductDetail} from './components/views/public/products/detail.jsx';
import Error404 from './components/views/errors/error404.jsx';
import { useEffect, useState } from 'react';

/** 
 * @see https://reactrouter.com/start/declarative/routing
*/
function App() {
    const [cart, setCart] = useState({});
    useEffect(() => {
      console.log(`cart updated`, cart)
    },[cart])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={(cart)=> setCart(cart)}/>}/>
        <Route path="categories">
          <Route path=':category_id' element={<PublicProductList cart={cart} setCart={(cart)=> setCart(cart)} greeting="Categoria"/>}/>
        </Route>
        <Route path="products">
          <Route index element={<PublicProductList cart={cart} setCart={(cart)=> setCart(cart)} />} />
          <Route path=":product_id" element={<PublicProductDetail cart={cart} setCart={(cart)=> setCart(cart)} />} />
        </Route>

        <Route path="*" element={<Error404 cart={cart} setCart={(cart)=> setCart(cart)}/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
