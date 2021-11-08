import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: '57Du4580**//',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    } // 내 Mysql 계정의 week10 데이터베이스에 접속
);

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query('select * from user');
        // user 테이블의 데이터 select
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query('select * from department');
        // department 테이블의 데이터 select
        return rows
    },
    getStudent : async () => {
        const [rows] = await promisePool.query('select * from student');
        // student 테이블의 데이터 select
        return rows
    },
}

// delete query
export const deleteSql = {
    deleteDepartment : async (data) => {
        console.log('deleteSql.deleteDepartment:', data.Dnumber); // 삭제하려는 부서의 Dnumber 콘솔 창 출력
        const sql = `delete from department where Dnumber = "${data.Dnumber}"`; // department 테이블에 존재하는 Dnumber일 경우 해당 부서 삭제
        await promisePool.query(sql);
    },    
    deleteStudent : async (data) => {
        console.log('deleteSql.deleteStudent:', data.Snumber);
        const sql = `delete from student where length(Snumber) > 8`;
        await promisePool.query(sql);
    },    
}