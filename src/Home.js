import React,{ useEffect, useContext, useState } from 'react';
import MilestoneCard from "./components/MilestoneCard.js"
import TitleCategory from "./components/TitleCategory.js"
import AppBar from "./components/AppBar.js"
import ModalForm from "./components/ModalForm.js"
import styled from "styled-components"
import {FirebaseContext} from "./firebase/index.js"


const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;


function Home() {

	const firebase = useContext(FirebaseContext)
	const [modalVisible, setModalVisible] = useState("none")

	useEffect(()=>{
		//firebase.milestone().once("value", (snapshot)=>{console.log(snapshot.val())})
		firebase.logUserData()
	},[])
  return (
		<>
			<Wrapper>
				<ModalForm modalDisplay={{visible:modalVisible, setVisible: setModalVisible}} />
				<TitleCategory text="Edad" />
   			<MilestoneCard /> 
   			<MilestoneCard /> 
   			<MilestoneCard /> 
   			<MilestoneCard /> 
				<AppBar createOnClick={()=>{setModalVisible("block")}}/>
			</Wrapper>
		</>
  );
}

export default Home;
