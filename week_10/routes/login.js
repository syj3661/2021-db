import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers(); // users 변수는 데이터베이스 상의 user 테이블의 데이터
    let whoAmI = ''; // 로그인한 user 확인하는 변수(기본은 공백)
    let checkLogin = false; // 기본적으로 로그인은 되지 않은 상태
    
    // for(Let i = 0; i < users.length; i++) {
    //     if (vars.id === user[i].id && vars.password === user[i].password) {
    //         ;
    //     }
    // }
    users.map((user) => {
        if (vars.id === user.Id && vars.password === user.Password) {
            checkLogin = true; 
            if (vars.id === 'admin') {
                whoAmI = 'admin'; // id가 admin이면 whoAmI는 admin
            } else if (vars.id === 'admin2') {
                whoAmI = 'admin2'; // id가 admin2이면 whoAmI는 admin2
            } else {
                whoAmI = 'users'; // 로그인 id가 관리자가 아니라면 whoAmI는 users
            }
        } // 데이터베이스 내에 존재하는 user일 경우 로그인
    })

    console.log('whoAmI:', whoAmI); // 현재 로그인한 user 콘솔 창에 출력

    if (checkLogin && whoAmI === 'admin') {
        res.redirect('/delete/department'); // admin 로그인 시 delete department 페이지로 이동
    } else if (checkLogin && whoAmI === 'admin2') {
        res.redirect('/delete/student'); // admin2 로그인 시 delete student 페이지로 이동
    } else if (checkLogin && whoAmI === 'users') {
        res.redirect('/select'); // user 로그인 시 select 페이지로 이동
    } else {
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")
    } // 데이터베이스 내에 존재하는 user가 아닐 시 로그인 실패 후 메시지 출력
})

module.exports = router;