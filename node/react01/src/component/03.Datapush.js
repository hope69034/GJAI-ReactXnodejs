import { Link } from "react-router-dom";
import axios from 'axios'
import { useState, useRef } from "react";

  

function Datapush() {


const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit success', idRef.current.value, pwRef.current.value)

    axios.post('http://localhost:3001/setData', {
      id: idRef.current.value,
      pw: pwRef.current.value
    })
      .then(() => { console.log('success') })
      .catch(() => { console.log('failed') })
  }
 
  const idRef = useRef();
  const pwRef = useRef();

  return (
    <>
 푸시<br></br>
 <form onSubmit={handleSubmit}>
        <input type="text" placeholder="id" ref={idRef}></input>
        <input type="text" placeholder="pw" ref={pwRef}></input>
        <button type="submit">데이터 보내주기</button>
      </form>
    </>
  );
}
export default Datapush;
