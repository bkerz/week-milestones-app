import React from "react"
import styled from "styled-components"


const Bar = styled.div`
	
	padding: 1rem 0;
	background: #E7B48F;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width:265px;
	margin-right: auto;
	margin-left: auto;
`;


const IconButton = styled.button`
	margin: 0 auto;
`;

const AppBar = () =>{
	return(
		<Bar>
			<Wrapper>
				<IconButton><img src="" alt="IconButton"/></IconButton>  
				<IconButton><img src="" alt="IconButton"/></IconButton>  
				<IconButton><img src="" alt="IconButton"/></IconButton>  
			</Wrapper>
		</Bar>
	)
}

export default AppBar