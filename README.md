# 2021-db

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:mskim1024/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/mskim1024/2021-02-database.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'tutorial', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.

<br><br>

## **3주차 데이터베이스**
1. 학생(student) 테이블을 생성했다.
2. 테이블 내에는 학번(StudentNumber), 이름(Name), 전공(Major), 학년(Grade), 입학일(Date_of_Admission), 이메일(Email) 필드가 존재한다.
    > ex) 12123456 김철수 정보통신공학과 4 20120301 철수@gmail.com

<br>

### - 데이터베이스 생성 결과
StudentNumber|Name|Major|Grade|Date_of_Admission|Email|
---|---|---|---|---|---|
12123456|김철수|정보통신공학과|4|20120301|철수@gmail.com
12211234|홍길동|정보통신공학과|1|20210301|길동@gmail.com

<br><br>

## **8주차 데이터베이스**
1. employee, department 테이블을 생성했다.
2. employee 테이블 내에는 Fname, Minit, Lname, Ssn, Bdate, Address, Sex, Salary, Super_ssn, Dno 필드가 존재하고, department 테이블 내에는 Dname, Dnumber, Mgr_ssn, Mgr_start_date 필드가 존재한다.
    > - ex(employee): 철수 M 김 12123456, 2000-01-01 인천 남 1000   1 <br>
    > - ex(department): 전기컴퓨터공학과 1 12123456 2021-01-01

<br>

### - 데이터베이스 생성 결과(employee)
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno|
---|---|---|---|---|---|---|---|---|---|
철수|M|김|12123456|2000-01-01|인천|남|1000||1|
민수|S|박|12156421|2001-03-14|경기|남|2000|12576453|2|
영희|F|이|12345678|1999-05-23|서울|여|500|12123456|1|
길동|H|홍|12576453|1997-06-18|인천|남|2000||2|
민희|J|최|12975621|1998-12-23|서울|여|1200||3|

<br>

### - 데이터베이스 생성 결과(department)
Dname|Dnumber|Mgr_ssn|Mgr_start_date|
---|---|---|---|
전기컴퓨터공학과|1|12123456|2021-01-01|
정보통신공학과|2|12576453|2020-01-01|
경영학과|3|12975621|2019-01-01|

<br><br>

## **10주차 데이터베이스**
1. department, student, user 테이블을 생성했다.
2. department 테이블 내에는 Dname, Dnumber 필드가 존재하고, student 테이블 내에는 Sname, Snumber 필드가 존재하고, user 테이블 내에는 Id, Password, Role 필드가 존재한다.
    > - ex(department): 전기공학과 2 <br>
    > - ex(student): A 11111111 <br>
    > - ex(user): admin admin1234 admin

<br>

### - 데이터베이스 생성 결과(department)
Dname|Dnumber|
---|---|
전기공학과|2|
전자공학과|3|

<br>

### - 데이터베이스 생성 결과(student)
Sname|Snumber|
---|---|
A|11111111|
B|22222222|
C|33333333|
D|44444444|
E|55555555|

<br>

### - 데이터베이스 생성 결과(user)
Id|Password|Role|
---|---|---|
admin|admin1234|admin|
admin2|admin1234|admin|
test|test1234|users|