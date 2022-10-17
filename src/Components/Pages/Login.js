import React,{useState} from 'react'
// import { Link, } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Header/Header'
import {useNavigate} from "react-router-dom"
import {auth} from "../Base/Base"
import {signInWithEmailAndPassword} from "firebase/auth"
const Login = () => {
  const navigate= useNavigate()
  const [UserName,setUsername] = useState("")
  const [Password,setPassword] = useState("")
  const  authUser = async ()=>{
    await signInWithEmailAndPassword (auth,UserName,Password)
    setUsername("")
    setPassword("")
    navigate("/")
  }
  console.log(authUser);
  return (
  <>
  <Header/>
<Text>
  <h2>LOGIN</h2>

  </Text>
  <Container>
      <Wrapper>
          <UserNames
          value={UserName}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          placeholder="Input username"></UserNames>
          <Passwords 
          value={Password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          placeholder="Input password" type="password"/>
          <Button  to="/" onClick={authUser}><button>SignIn</button></Button>
          {/* <Option>
<h7>Don't have an Account?  </h7>
<Rout to="/Register">
<h4>Register</h4>

</Rout>
          </Option> */}
      </Wrapper>
  </Container>

  </>
  )
}

export default Login
const Container = styled.div`
width: 100%;
min-height: 525px;
display: flex;
flex-wrap: wrap;

justify-content: center;
align-items: flex-start;
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
const Wrapper = styled.div`
width: 28%;
min-height: 350px;
background-color: white;
display: flex;
/* flex-wrap: wrap; */
flex-direction: column;
justify-content: space-around;
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
const UserNames = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 30px;

`
const Passwords = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
margin-top: 40px;

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
color: black;

 }
 margin-top: 40px;
`
const Text = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
/* background-color: red; */
`
const Texts = styled.div`
width: 28%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
background-color: red;
margin-top: -140px;
margin-left: 416px;
`
