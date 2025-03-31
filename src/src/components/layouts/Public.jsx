import {default as Menu} from "../headers/Public";
import {default as Footer} from "../footers/Public";
const Public = ({children}) => {
    return (
        <>
        <Menu/>
        <main className='w-100 position-relative'>
            {children}
        </main>
        <Footer/>
        </>
    )
};
export default Public;