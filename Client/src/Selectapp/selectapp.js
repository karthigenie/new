import React from 'react'
import Ilearn from '../Ilearn.png'
import Ianalyze from '../ianalyze.jpg'
import './selectapp.css'
import Idiscover from '../iDiscover.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@material-ui/core'
import Ishop from '../cart.png'
export default function Selectapp() {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('twittertoken')){
            navigate('/')
        }
        console.log("hiij")
      });
    function iDiscover(e) {
        navigate('/home')
    }

    function Logout(e){
        localStorage.removeItem('twittertoken')
        navigate('/')
    }
  return (
    <div style={{marginLeft:"30%",marginTop:"12%"}} >
<h3 style={{marginLeft:"19%",marginBottom:"5%"}}>Select App </h3>
<div className="item" style={{marginRight:"30px",cursor:"pointer"}}>
    <img src={Idiscover} onClick={iDiscover} alt='idiscover' />
    <span className="caption">iDiscover</span>
</div>
<div className="item" style={{marginRight:"30px",cursor:"pointer"}}>
    <img  src={Ilearn} alt='ilearn'/>
    <span className="caption">iLearn</span>
</div>
<div className="item" style={{marginRight:"30px",cursor:"pointer"}}>
    <img src={Ianalyze} alt='ianalyze'/>
    <span className="caption">iAnalyze</span>
</div>
<div className="item" style={{marginRight:"30px",cursor:"pointer"}}>
    <img src={Ishop} alt='ishop'/>
    <span className="caption">iShop</span>
</div>
<div style={{marginTop:"50px",marginLeft:"20%"}}>
<Button onClick={Logout} style={{color:"white",backgroundColor:"#ba293c"}}>Logout</Button>
</div>

        
        </div>
  )
}
