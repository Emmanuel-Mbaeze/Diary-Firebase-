import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Header/Header'
import {db} from "../Base/Base"
import {addDoc,collection} from "firebase/firestore"
const Home = () => {
const [Titles,setTitles]=useState("")
const [Cards,setCards]=useState("")
const [Dates,setDates]=useState("")
const [Times ,setTimes]=useState("")

const postData = async ()=>{
  addDoc(collection(db,"DiaryUsers"),{
    Titles,
    Cards,
    Dates,
    Times
  })
  setTitles("");
  setCards("");
  setDates("");
  setTimes("")
}



  return (
<>
<Header/>
<Container>
      <Wrapper>
          
              <Title placeholder='Title' 
              value={Titles}
              onChange={(e)=>{
setTitles(e.target.value)
              }}
              >
            </Title>
            <Card>
              <textarea placeholder="What's on your Mind"
              value={Cards}
                 onChange={(e)=>{
                  setCards(e.target.value)
                                }}
              />
              </Card>
            <Date placeholder='Date'
            value={Dates}
               onChange={(e)=>{
                setDates(e.target.value)
                              }}
            >
            </Date>
            <Time placeholder='Time'
            value={Times}
               onChange={(e)=>{
                setTimes(e.target.value)
                              }}
            >
            </Time>
            <Button to="/Journals"><button  onClick={postData}>Add to Journal</button></Button>
           
      </Wrapper>
  </Container>
</>
  )
}

export default Home

 const Container = styled.div`
 width: 100%;
 min-height: 90vh;
 /* background-color: black; */
 display: flex;
justify-content:center ;
 align-items: center;
`
 const Wrapper = styled.div`
 width: 30%;
 min-height: 75vh;
display: flex;
 flex-direction: column;
 justify-content:space-evenly;
 align-items: center;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
/* margin-bottom: 25px; */
@media (max-width: 320px) {
  width: 85%;
min-height: 350px;
/* background-color: black; */
  }
@media (min-width:375px) and (max-width:428px){
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
const Card = styled.div`
width: 250px;
height: 107px;

 background-color: red; 

textarea{
  width: 250px;
  min-height: 100px;
  border: 1.5px solid grey;
  outline: none;

}
`
const Title = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
`

const Date = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
`
const Time = styled.input`
width: 250px;
height: 37px;
border: 1px solid purple;
outline: none;
border-radius: 4px;
`
const Button = styled(Link)`
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
`

