import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Ab() {
    useEffect(() => {
        console.log("testttt")
        axios.get('https://reqres.in/api/user?page=2').then(res => console.log(res.data))
      },[]);
  return (
    <div>Ab</div>
  )
}
