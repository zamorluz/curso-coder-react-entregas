
import { useContext } from 'react';
import ItemsContainer from '../ItemsContainer.jsx';
import {default as Layout} from '../layouts/Public.jsx'
import { CartContext } from '../../contexts/CartContext.jsx';
import ItemList from '../ItemList.jsx';

function Cart() {
    const {cart} = useContext(CartContext)
  return (
    <>
      <Layout >
        
        <div className="row">
          {cart.length === 0 
            ? <div className="text-center p-3">
                No hay productos en el carrito
              </div>
            : <>
               <ItemList items={cart} forceCounterRender={true}/>
          </>}
        </div>
      </Layout>
    </>
  )
}

export default Cart;
