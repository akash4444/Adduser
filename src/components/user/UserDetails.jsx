import React ,{useEffect}from "react"
import {getUserDetailsLogic} from "../../services";
import {usersInfoSelector} from "../../selectors";
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {Loading} from "../customComponents";
import {isEmpty} from "lodash"
import User from "./User";
import styled from "styled-components";
import {Grid} from "semantic-ui-react"

const Container=styled.div`
    min-height:15rem;
    margin:1rem 8rem;

`

const UserDetails=({usersInfo:{data,error,loading}})=>{

    useEffect(()=>{
        getUserDetailsLogic();    
      
    },[])

    return <Container>
    {loading?<Loading size="large" />:!isEmpty(error)?<div>Error</div>:
    isEmpty(data)? <div>No data found</div>:<Grid><Grid.Row columns={3}>{
        data.map((user,index)=>{
           return <Grid.Column>< User user={user} key={index} /></Grid.Column>
        })
        
        }</Grid.Row></Grid>


    }
    </Container>
}
UserDetails.propTypes={
    usersInfo:PropTypes.object,
    getUserDetailsLogic:PropTypes.func
}

const mapStateToProps=(state)=>{
  return { 
      usersInfo:usersInfoSelector(state)

}}

export default connect(mapStateToProps, {getUserDetailsLogic})(
    UserDetails
  )
 