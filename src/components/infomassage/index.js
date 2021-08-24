import React from "react";
import { TextIconMassage } from './style';
import { useState } from 'react';

const massage1 = 'Enter IP and press “Search” to get geolocation data';
const massage2 = 'Loadding';
const massage3 = 'Something went wrong 😞. Please try again.';


//  const InfoMasage = (props) => {
//      const [massage, setMassage] = useState({massage: ''});
    
//      if (props.massageInfo === 1) { setMassage({ ...massage, massage:massage1}) }; 
//      if (props.massageInfo === 2) { setMassage({ ...massage, massage:massage2}) }; 
//      if (props.massageInfo === 3) { setMassage({ ...massage, massage:massage3}) }; 
   
//    return(
//    <>   
//    <TextIconMassage>
//            <div>
//                <h2> {massage} </h2>
//            </div> 
//    </TextIconMassage> 
//    </>
//        );
//    }
  
 
const InfoMasage = (props) => {
    let massage = '';
    if (props.massageInfo === 1) {massage=massage1}; 
    if (props.massageInfo === 2) {massage=massage2}; 
    if (props.massageInfo === 3) {massage=massage3}; 
  return(
  <>   
  <TextIconMassage>
          <div>
              <h2> {massage} </h2>
          </div> 
  </TextIconMassage> 
  </>
      );
  }
 

export default InfoMasage; 