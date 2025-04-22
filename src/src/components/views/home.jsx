
import ItemsContainer from '../ItemsContainer.jsx';
import {default as Layout} from '../layouts/Public.jsx'

function Home({
  cart, 
  setCart
}) {
    
  return (
    <>
      <Layout  cart={cart} setCart={(cart) => setCart(cart)}>
        <ItemsContainer id="items-container" className="my-3" greeting="Hola Mundo"/>
      </Layout>
    </>
  )
}

export default Home;
