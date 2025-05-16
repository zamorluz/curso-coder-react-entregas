
import ItemsContainer from '../ItemsContainer.jsx';
import {default as Layout} from '../layouts/Public.jsx'

function Home() {
    
  return (
    <>
      <Layout >
        <ItemsContainer id="items-container" className="my-3" greeting="Hola Mundo"/>
      </Layout>
    </>
  )
}

export default Home;
