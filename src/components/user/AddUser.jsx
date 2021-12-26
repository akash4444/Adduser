import React ,{useState}from 'react'
import { Form ,Grid} from 'semantic-ui-react'
import styled from "styled-components"
import {addUserDetailsLogic,getUserDetailsLogic} from "../../services";


const SubmitButton=styled(Form.Button)`
&&&&{margin-top:1.6rem};
`;

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]
const statusOptions= [
  { key: '0', text: 'Active', value: 'active' },
  { key: '1', text: 'Inactive', value: 'inactive' }
]
const AddUser=({modalAction})=> {

const[status,setStatus]=useState("active");
const[gender,setGender]=useState("male");
const[firstName,setFirstName]=useState("");
const[lastName,setLastName]=useState("");
const[email,setEmail]=useState("");
 
const formSubmit= ()=>{
    if( firstName && lastName&& email){
        
         addUserDetailsLogic ({ status,gender,email,name:`${firstName} ${lastName}`});
         getUserDetailsLogic(true);
      
        modalAction();
    }
}

    return (
      <Form  onSubmit={()=>formSubmit()}>

            <Grid>
                <Grid.Row columns={3}>
                <Grid.Column>
<Form.Input required fluid label='First name' placeholder='First name' value={firstName} onChange={(e,{value})=>setFirstName(value)} />
                </Grid.Column>
                  <Grid.Column>
                     <Form.Input required fluid label='Last name' placeholder='Last name' value={lastName} onChange={(e,{value})=>setLastName(value)}/>
                </Grid.Column>
                  <Grid.Column>
                     <Form.Input required type="email" fluid label='Email' placeholder='Email' value={email} onChange={(e,{value})=>setEmail(value)} />
                </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={4}>
                    <Grid.Column width={5}> <Form.Select
          required
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
            value={gender}
            onChange={(e)=>setGender(e.value)}
          /></Grid.Column>
                    <Grid.Column width={5}><Form.Select
          required
            fluid
            label='Status'
            options={statusOptions}
            placeholder='Status'
             value={status}
                 onChange={(e)=>setStatus(e.value)}
          /></Grid.Column>
                    <Grid.Column width={3}><SubmitButton positive type="submit">Submit</SubmitButton>
     </Grid.Column>
        <Grid.Column width={3}>
        <SubmitButton negative onClick={()=>modalAction()}>Cancel</SubmitButton></Grid.Column>
                </Grid.Row>
            </Grid>
          
         
           
         
          
        
      </Form>
    )
 
}




export default 
    AddUser
  

