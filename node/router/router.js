//////////
//router.js 
const express = require('express')
const router = express.Router()
const mysql = require('mysql');
const path = require('path')

// mysql 연결
let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'cshuser',
    password: 'cshpass',
    port: '3306',
    database: 'nodejs'
})





///
//datapull   노드 > 리액트로 전송
router.get('/getData', function (req, res) {
    // 값 보내기 
    res.json({
        name: 'hi'
    })
})

//datapush   리액트 > 노드로 전송
router.post('/setData', function (req, res) {
    // 값 받아오기
    console.log('req: ', req.body)
})
///



router.post('/joindata', function (req, res) {
    console.log(req.body.id)
    let sql = "insert into nodejs_member values (?,?,?)";
    conn.query(sql, [req.body.id, req.body.pw, req.body.name], function (err, rows) {
        if (rows) {
            console.log('회원가입 성공!')
            res.end()
        }
    })
})

router.post('/logindata', function (req, res) {
    let sql = 'select * from nodejs_member where id =? and pw = ?'
    conn.query(sql, [req.body.id, req.body.pw], function (err, rows) {
        console.log(rows[0])

        if (rows.length > 0) {
            res.json({
                result: 'success'
            })
        } else {
            res.json({
                result: 'error'
            })

        }

        res.end()
    })
})

router.get('*', function (req, res) {
    console.log('main')
    res.sendFile(path.join(__dirname, '..', 'react01', 'build', 'index.html'))
})



module.exports = router
