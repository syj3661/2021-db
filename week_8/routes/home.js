import express from "express";
import {insertSql, selectSql} from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/', (req, res) => {
    const vars = req.body;
    const var_lenth = Object.keys(req.body).length;

    // 필드의 개수가 4개 보다 많을때(employee 테이블이면) data는 employee 테이블에 입력
    if (var_lenth > 4) {
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data);
      
      // 필드의 개수가 4개 이하일 때(department 테이블이면) data는 department 테이블에 입력  
    } else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }

    res.redirect('/');
})

module.exports = router;