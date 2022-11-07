const express = require('express');
const app = express();

///////
//노드 리액 연동
const path = require('path')
// 이 폴더 안에 있는 static 파일을 쓸게용 
app.use(express.static(path.join(__dirname, 'react01','build')))
// 저 폴더 안에 html 파일 가지고와서 사용자가 메인 페이지로 들어오면 보여주세용~ 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'react01','build','index.html'))
})
///////

/////
//datapush   리액 > 노드        React에서 받은 값 보내기 
//server.js 
app.use(express.json())
let cors = require('cors')
app.use(cors()) 
/////


//
const router = require('./router/router')
app.use(router)
//



app.listen(3001, () => {
    console.log('listening on port 3001')
})