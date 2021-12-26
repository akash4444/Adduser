import store from "../createStore"
import {usersInfoSelector} from "../selectors";
import {isNil} from "lodash";
import {ToastMessage} from "../components/customComponents";
const state=store.subscribe(() => store.getState());
export const getUserDetailsLogic= async (isReload)=>{


 const {data}=usersInfoSelector(state);
    if(isReload || isNil(data)){
        store.dispatch({type:"UPDATE_USERS",value:{data:"",error:{},loading:true}})
  await  fetch("https://gorest.co.in/public-api/users")
    .then(res => res.json())
    .then(
      (result) => {
          const {data}=result
        store.dispatch({type:"UPDATE_USERS",value:{data,error:{},loading:false}})
      },
      
      (error) => {
        store.dispatch({type:"UPDATE_USERS",value:{data:"",error,loading:false}})
      }
    )
    }

}

export const deleteUserDetailsLogic= async (id)=>{

  await  fetch(`https://gorest.co.in/public-api/users/${id}`,{
       method: 'DELETE'})
    .then(res => res.json())
    .then(
      (result) => {
        
          ToastMessage("error",result?.data?.message);
      },
      (error) => {
       ToastMessage("error","Please try again");
      }
    )
    

}

export const addUserDetailsLogic=  (data)=>{

    fetch(`https://gorest.co.in/public/v1/users`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    })
    .then(res => res.json())
    .then(
      (result) => {
        
          ToastMessage("success","User added successfully");
      },
      (error) => {
        ToastMessage("error","Please try again");
      }
     
    )
    

}