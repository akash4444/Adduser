import React from 'react'
import {  Card,Icon,Label ,Grid, Button} from 'semantic-ui-react'
import styled from "styled-components";
import {deleteUserDetailsLogic,getUserDetailsLogic} from "../../services";

const Container=styled.div`
 margin:1rem ;

`
const User = ({user:{email,id,gender,name,status},key}) => {
  return(
    <Container>
    <Card key={key}>
      <Card.Content>
        
         <Grid>
    <Grid.Row columns={2}>
      
      <Grid.Column width={12}>
        <Label as='a' >
     
      {name}
    </Label>
      </Grid.Column>
      <Grid.Column width={4}>
            
    <Icon name="circle" color={status==="active"?"green":"red"} />
      </Grid.Column>
        
    </Grid.Row>
   
  <Grid.Row >
     <Grid.Column ><Icon size="large" color='red' name="mail"  /><Label >{email}
    </Label></Grid.Column>
    </Grid.Row>
             
     <Grid.Row columns={2}>
       <Grid.Column width={8} ><Label > {`Gender:  `} <Icon size="large" color='violet' name={gender}  />

    </Label></Grid.Column>
    <Grid.Column width={8} ><Button icon onClick={()=>{deleteUserDetailsLogic(id);getUserDetailsLogic(true);}}>
    <Icon color="red" name='trash alternate' />
  </Button></Grid.Column>
    </Grid.Row>
     
     </Grid>
        

       
      </Card.Content>
    </Card>
    </Container>
    
  )
        

}

export default User