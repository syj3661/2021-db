import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const department = await selectSql.getDepartment();
    const student = await selectSql.getStudent();
    // /select 페이지에 department, student 테이블을 표시(select의 역할)
    res.render('select', {
        title: 'IT 공대',
        title2: '학생',
        department,
        student
    }); // 표시할 제목과 데이터
});

module.exports = router;