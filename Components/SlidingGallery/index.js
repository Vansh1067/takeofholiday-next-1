import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons'

const Wrapper=styled.div`

width:280px;
height:300px;
border-radius:12px;
display:flex;
background-color:#151515;
overflow-x:scroll;
overflow-y:hidden;
margin:10px 0;
box-shadow:1px 1px 6px 0px #151515;
-ms-overflow-style: none; 
  scrollbar-width: none; 
&::-webkit-scrollbar {
    display: none;
  }

`
const SlidingGallery=()=>{
    return <Wrapper>
      
     
         
            <img src={'static/assests/cover.jpg'} width="100%" height="100%"/>
            <img src={'static/assests/cover.jpg'} width="100%" height="100%"/>
            <img src={'static/assests/cover.jpg'} width="100%" height="100%"/>
            <img src={'static/assests/cover.jpg'} width="100%" height="100%"/>
       
            
       

        </Wrapper>
}

export default SlidingGallery