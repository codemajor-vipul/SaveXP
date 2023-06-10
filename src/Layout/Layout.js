import Navigation from '../Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
const Layout=(props)=>{
    return(
        <Fragment>
            <Navigation />
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;