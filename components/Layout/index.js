import * as React from 'react';

import Header from './Header';
import Footer from './Footer'

import { Website } from './styles';

const Layout = (props) => {

    return(
        <Website>
            <Header />
                <main>
                    {props.children}
                </main>
            <Footer />
        </Website>
    )
}

export default Layout;