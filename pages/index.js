import styled from 'styled-components'

import SearchFilter from '../Components/SearchFilter'
import HOC from '../Hoc'
import {Button, Heading,Paragraph,Point} from '../Shared'
import TourCard from '../Components/TourCard'
import ServiceCard from '../Components/ServicesCard'
import SlidingGallery from '../Components/SlidingGallery'
import {faCar,faSuitcaseRolling,faPlaneDeparture,faAngleRight,faAngleLeft, faBed} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AreaWrapper=styled.div`
width:80%;
margin:25px auto;

`
const ImageBox=styled.div`

min-width:250px;
flex:4;
margin-left:${props=>props.left||'0'};
margin-right:${props=>props.right||'0'};
border-radius:12px;
overflow:hidden;
box-shadow:1px 1px 6px 0px #151515;
@media screen and (max-width:647px){
  margin:15px 0;
}
`

const CardBox=styled.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
margin:25px 0;




`
const CardWrapper=styled.div`
margin:30px 0;
width:100%;


`
const Gallery=styled.div`

position:relative;

.IconsL{
    position:absolute;
    top:45%;
    left:0px;
    background-color:rgba(256,256,256,0.8);
    padding:1px;
    padding-right:5px;
    border-top-right-radius:12px;
    border-bottom-right-radius:12px;
    cursor:pointer;
}
.IconsR{
    position:absolute;
    top:45%;
    right:0;
    background-color:rgba(256,256,256,0.8);
    padding:1px;
    padding-left:5px;
    border-top-left-radius:12px;
    border-bottom-left-radius:12px;
    cursor:pointer;
}
`
export default function Home({tours}) {
  const scrollHandler=(e,d)=>{
    console.log(e)
    if(d=='r'){
      e.target.previousSibling.scrollBy(280,0);
    }else{
      e.target.nextSibling.scrollBy(-280,0);
    }
   
    
  }
  const GalleryTours=[{imageUrl:"https://firebasestorage.googleapis.com/v0/b/takeoffholdiays.appspot.com/o/WhatsApp%20Image%202020-12-01%20at%2010.22.36%20AM.jpeg?alt=media&token=5eaac419-450d-4821-9902-c8a3e6b7223c"},
                      {imageUrl:"https://firebasestorage.googleapis.com/v0/b/takeoffholdiays.appspot.com/o/WhatsApp%20Image%202020-12-01%20at%2010.22.35%20AM.jpeg?alt=media&token=5955cbea-920f-456c-8012-c42a2db08e93"},
                    {imageUrl:"https://firebasestorage.googleapis.com/v0/b/takeoffholdiays.appspot.com/o/WhatsApp%20Image%202020-12-01%20at%2010.22.34%20AM.jpeg?alt=media&token=263f2e6a-f309-4913-9bd5-964a6168e393"}]
  return <HOC>
      <div style={{height:'88vh',position:'relative',display:'flex',justifyContent:'center',marginBottom:'80px'}}>
        <img src={'/static/assests/cover.jpeg'} width="100%" height="100%"/>
       {/*  <Heading style={{position:'absolute'}}>Take A chill Pill</Heading> */}
        <SearchFilter/>  
      </div>
      <AreaWrapper>
            <CardWrapper>
              <Heading>New Tours</Heading>
              <CardBox>
                {
                  tours.map((tour,i)=>{
                    if(tour.category==2){
                      return   <TourCard data={tour} key={i}/>
                    }
                  })
                }
                
                 

              </CardBox>
            </CardWrapper>
            <CardWrapper>
              <Heading>Kerala Tours</Heading>
              <CardBox>
              {
                  tours.map((tour,i)=>{
                    if(tour.category==1){
                      return   <TourCard data={tour} key={i}/>
                    }
                  })
                }

              </CardBox>
            </CardWrapper>
            
      </AreaWrapper>
      <AreaWrapper>
            <CardWrapper>
              <Heading>Services</Heading>
              <CardBox>
                  <ServiceCard icon={faPlaneDeparture} text="Flight Reservation "/>
                  <ServiceCard icon={faBed} text="Accommodations"/>
                  <ServiceCard icon={faSuitcaseRolling} text="Leisure Travel"/>
                  <ServiceCard icon={faCar} text="Car Hire"/>

              </CardBox>
            </CardWrapper>
      </AreaWrapper>
      <AreaWrapper>
      <div style={{margin:'50px 0'}}>
              
              <div style={{display:'flex',flexWrap:'wrap'}}>
                <div style={{minWidth:'250px',flex:8}}>
                <Heading>Why us ?</Heading>
                  <div style={{margin:'10px 0',textAlign:'justify'}}>
                <Paragraph color="#151515">Travel is always at quality and service at an affordable price !! Travel is the main thing you purchase that makes you more extravagant”. We take off holidays swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. We have been moving excellent planning and friendly , knowledgeable staff with a personal touch and save your time and effort. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</Paragraph>
                <br/>
                <Paragraph color="#151515" style={{textDecoration:'underline',fontWeight:'bold'}}>Highlights  </Paragraph>
                <br/>
                <ul style={{marginLeft:'20px'}}>
                  <li><Paragraph color="#151515">Quality and service  </Paragraph></li>
                  <li><Paragraph color="#151515">  A Personal Touch   </Paragraph></li>
                  <li><Paragraph color="#151515">Friendly and Knowledgeable Staff  </Paragraph></li>
                  <li><Paragraph color="#151515"> Save Time and Effort  </Paragraph></li>

                </ul>
                
                <br/>
                <Button style={{margin:0}}>Details</Button>
                </div>
                </div>
                <ImageBox left="20px">
                  <img src={'static/assests/why.png'} width="100%" height="100%"/>
                </ImageBox>
              </div>
              
            </div>
      </AreaWrapper>
     
      <AreaWrapper>
      <CardWrapper>
        <Heading>Gallery</Heading>
        <CardBox>
          <Gallery >
            <FontAwesomeIcon icon={faAngleLeft} size="2x" className="IconsL" color="#151515" onClick={(e)=>scrollHandler(e,'l')} />
            <SlidingGallery tour={GalleryTours} start={0} end={4}/>
            <FontAwesomeIcon icon={faAngleRight} size="2x" className="IconsR" color="#151515" onClick={(e)=>scrollHandler(e,'r')}/>
          </Gallery>
          <Gallery>
            <FontAwesomeIcon icon={faAngleLeft} size="2x" className="IconsL" color="#151515" onClick={(e)=>scrollHandler(e,'l')} />
            <SlidingGallery tour={tours} start={0} end={4}/>
            <FontAwesomeIcon icon={faAngleRight} size="2x" className="IconsR" color="#151515" onClick={(e)=>scrollHandler(e,'r')}/>
           
          </Gallery>
          <Gallery>
            <FontAwesomeIcon icon={faAngleLeft} size="2x" className="IconsL" color="#151515" onClick={(e)=>scrollHandler(e,'l')} />
            <SlidingGallery tour={tours} start={4} end={9}/>
            <FontAwesomeIcon icon={faAngleRight} size="2x" className="IconsR" color="#151515" onClick={(e)=>scrollHandler(e,'r')}/>
          </Gallery>

        </CardBox>
      </CardWrapper>
      </AreaWrapper>
   
   
    </HOC>
  
}

Home.getInitialProps=async (context)=>{
  const response=await fetch('http://localhost:3000/apis/tour/alltours');
  const data=await response.json();
  const tours=data.tours


  return {tours:tours}
}