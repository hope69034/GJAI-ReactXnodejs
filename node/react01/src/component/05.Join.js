//Join.js
import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Join = () => {

    let idRef = useRef()
    let pwRef = useRef()
    let nameRef = useRef()

    const navigate = useNavigate()


    const handleJoin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/joindata', {
            id: idRef.current.value,
            pw: pwRef.current.value,
            name: nameRef.current.value
        }).then((res) => {
            console.log('값 전송', res.data)
            alert('가입이 완료되었습니다!')
            navigate('/')



        }).catch((err) => { console.log(err) })

    }
    return (
        <div>
            <h3>회원가입</h3>
            <form onSubmit={handleJoin}>
                ID <input type="text" ref={idRef} placeholder='ID를 입력하시오'></input>
                <br></br>
                PW <input type="password" ref={pwRef} placeholder='PW를 입력하시오'></input>
                <br></br>
                이름 <input type="text" ref={nameRef} placeholder='이름을 입력하시오'></input>
                <br></br>
                <button type='submit'>가입완료</button>
            </form>
        </div>
    )
}

export default Join