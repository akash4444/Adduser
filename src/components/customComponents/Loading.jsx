import React from "react"
import { Dimmer, Loader } from 'semantic-ui-react'

 const Loading =({props})=>{
    return (
    <Dimmer active inverted>
      <Loader  {...props}>Loading</Loader>
    </Dimmer>
    )
}

export default Loading






    