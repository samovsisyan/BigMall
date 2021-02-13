import React from 'react';
import {Footer, Header} from "../index";

export default function Wrapper (props)  {

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

