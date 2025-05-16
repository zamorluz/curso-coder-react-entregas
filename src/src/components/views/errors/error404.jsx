import {default as Layout} from "../../layouts/Public";
import {default as Error} from "../../errors/Error404";

const Error404 = () => {
    return (
        <Layout>
            <Error/>
        </Layout>
    )
}
export default Error404;