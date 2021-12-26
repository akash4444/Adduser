import React from "react"
import UserLayout from "../user/UserLayout"
import styled from "styled-components"

const Container=styled.div`
      background:  dimgray
`;

const Layout=()=>{

    return <Container>
        <UserLayout/>
    </Container>
}

export default Layout