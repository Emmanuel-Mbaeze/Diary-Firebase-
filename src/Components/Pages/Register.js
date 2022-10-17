import React,{useState} from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
const Register = () => {
const mySchema = yup.object().shape({
  userName:yup.string().required("Field must be filled"),
  email:yup.string().email().required("Field must be filled"),
  password:yup.string().required("Field must be filled"),
  Confirm:yup.string().oneOf([yup.ref("password"),null],"Field must be filled")
  // oneOf([yup.ref("password"),null],"password doesnt match")
})
const {
  register,
  handleSubmit,
  reset,
  formState:{errors},
}=useForm({
  resolver:yupResolver(mySchema)
})
const mysubmitform = handleSubmit(
  (myData) =>{
    console.log(myData);
  }
)
  return (
<>
<Header/>
<Text>
  <h2>Create Account</h2>
  </Text>
<Container>
    <Wrapper onSubmit={mysubmitform}>
        <Uploadimg type="file"/>
        <Text>{errors?.userName && errors?.userName.message}</Text>
        <Name placeholder="input Name" {...register("userName")} ></Name>
        <UserName placeholder="Input username"></UserName>
          <Password placeholder="Input password" type="password"/>
        <Email placeholder="Input E-mail"></Email>
        <Button type="submit" onClick={authUser}><button>SignUp</button></Button>
        <Button1 onClick={authUser}><button>SignUp with Google  </button></Button1>
        {/* <Option>
<h7>Don't have an Account?  </h7>
<Rout to="/Login">
<h4>Login</h4>

</Rout>
          </Option> */}
    </Wrapper>
</Container>
</>
  )
}

export default Register
const Container = styled.div`
width: 100%;
min-height: 525px;
/* background-color: aquamarine; */
display: flex;
justify-content: center;
align-items: flex-start;
`
const Wrapper = styled.form`
width: 28%;
min-height: 430px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
margin-top: 15px;
@media (max-width: 320px) {
  width: 85%;
min-height: 350px;
/* background-color: black; */
  }
@media (min-width:360px) and (max-width:428px){
  width: 75%;
min-height: 350px;
/* background-color: black; */
}
@media (min-width:768px) and (max-width:834px){
  width: 45%;
min-height: 350px;
/* background-color: black; */
}
`
const Image = styled.div``
const Uploadimg = styled.div``
const Name = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const UserName = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const Email = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const Password = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const Button = styled.div`
 button{
  padding: 12px 24px;
border: 1.5px solid grey;
background-color: purple;
color: white;
border-radius: 5px;
outline: none;
 }
 :hover>button{
background-color: transparent;
color:black;

 }
 margin-top: 40px;

`

const Button1 = styled.div`
button{
  padding:12px 40px ;
  border: 1.7px solid purple;
  outline: none;
  /* color:white; */
  border-radius: 2px;
  background-color: transparent;
}
:hover>button{
background-color: purple;
color: white;

}
margin-top: 40px;
`
const Text = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`
// const Rout = styled(Link)`
// text-decoration: none;
// color: black;
// `
// const Option = styled.div`
// /* background-color: aquamarine; */
// width: 75%;
// display:flex;
// justify-content: space-evenly;
// align-items: center;
// `