import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();
    
    // /select 페이지에 직원 테이블과 부서 테이블을 표시(select의 역할)
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;