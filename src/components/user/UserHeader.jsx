import React,{useState} from "react"
import AddUser from "./AddUser"
import { Segment,Button, Modal,Icon} from 'semantic-ui-react'
import styled from "styled-components"

const Container=styled.div`
max-width:15rem;
    margin:0rem 45rem;
    padding-top:1rem;
`;

const UserHeader=()=>{
const [open, setOpen] = useState(false)

const modalAction=()=>{
    setOpen(false)
}


    return <Container>
         <Segment>
             <Icon name="user" size="large"/>
 <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button  primary>Add User</Button>}
    >
          <Modal.Header>Add User</Modal.Header> 
           <Modal.Content >
        <Segment>
    <AddUser modalAction={modalAction} />
        </Segment>
        </Modal.Content>
        </Modal>
</Segment>
  
        
    
    </Container>
}



export default 
    UserHeader
  
 