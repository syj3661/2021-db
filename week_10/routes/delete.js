import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/department', async (req, res) => {
    const department = await selectSql.getDepartment();
    res.render('deleteDepartment', {
        title: "부서 삭제",
        department,
    })
});

// 기존의 입력 값 불러오기
router.get('/student', async (req, res) => {
    const student = await selectSql.getStudent();
    res.render('deleteStudent', {
        title: "학생 삭제",
        student
    })
});

// 삭제 버튼을 눌렀을 경우 delete query를 실행하며 delete department 페이지로 이동
router.post('/department', async (req, res) => {
    console.log('delete router:', req.body.dnumber);

    const data = {
        Dnumber: req.body.dnumber,
    }; 
    
    await deleteSql.deleteDepartment(data); 

    res.redirect('/delete/department');
});

// 삭제 버튼을 눌렀을 경우 delete query를 실행하며 delete student 페이지로 이동
router.post('/student', async (req, res) => {
    console.log('delete router:', req.body.snumber);

    const data = {
        Snumber: req.body.snumber,
    }; 
    
    await deleteSql.deleteStudent(data); 

    res.redirect('/delete/student');
});

module.exports = router;