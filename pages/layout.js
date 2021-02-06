import Nabvbar from "./navbar";


const Layout = (props) =>(
    <div>
        <Nabvbar></Nabvbar>
        {props.children}
    </div>
);
export default Layout;