import React from 'react'
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components'

const Main = styled.main`
    color: var(--white);
    flex:1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`

function TemplateBase({children,bgColor}) {
    return (
        < >
            <Menu />
                <Main style={{backgroundColor:bgColor || "black"}}>
                    {children}            
                </Main>
            <Footer />
        </>
    )
}

export default TemplateBase
