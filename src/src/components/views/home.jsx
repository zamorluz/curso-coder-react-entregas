import Item from '../Item.jsx';
import ItemsContainer from '../ItemsContainer.jsx';
import {default as Layout} from '../layouts/Public.jsx'

function Home() {
    
  return (
    <>
      <Layout>
            <ItemsContainer id="items-container" className="my-3">
                <Item id="item-1" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 1" price="100"/>
                <Item id="item-2" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 2" price="100"/>
                <Item id="item-3" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 3" price="100"/>
            </ItemsContainer>
            <ItemsContainer id="items-container" className="my-3">
                <Item id="item-4" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 4" price="100"/>
                <Item id="item-5" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 5" price="100"/>
                <Item id="item-6" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 6" price="100"/>
            </ItemsContainer>
            <ItemsContainer id="items-container" className="my-3">
                <Item id="item-7" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 7" price="100"/>
                <Item id="item-8" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 8" price="100"/>
                <Item id="item-9" outerClass='col-4' innerClass="m-3 bg-black text-white p-3 m-3 rounded" title="Item 9" price="100"/>
            </ItemsContainer>
      </Layout>

    </>
  )
}

export default Home;
