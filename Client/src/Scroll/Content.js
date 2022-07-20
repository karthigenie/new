
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InfinitScroll from 'react-infinite-scroll-component'
export default function Content() {
    const navigate =useNavigate();
    const[res,setRes]=useState([])
    const[id,setId]=useState(1)
    useEffect(() => {

    
        axios.get(`http://18.142.54.38:5000/get?page=${id}`).then(res => setRes(res.data.data),setId(res.data.page))
    
      },[]);
    const fetchNextUsers=()=> {
       
        axios.get(`http://18.142.54.38:5000/get?page=${id}`)
        .then((response) => {
          setRes(res.concat(response.data))
          console.log(response.data.results)
        })
      }  
  return (
    <div className="App">
<InfinitScroll
        dataLength = {res.length}
        next = {fetchNextUsers}
        hasMore = {true}
        loader={<h4>Loading ... </h4>}
      >


      </InfinitScroll>
    </div>
  );
}
