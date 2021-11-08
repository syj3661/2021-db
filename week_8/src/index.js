import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000; // 접속 포트를 3000으로 설정

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', homeRouter); // '/' 입력 시 홈 화면으로 이동
app.use('/update', updateRouter); // '/update' 입력 시 업데이트 페이지로 이동
app.use('/select', selectRouter); // '/select' 입력 시 내용 확인 페이지로 이동

  app.listen(PORT, () => {
      console.log('Example app listening at http://localhost:${PORT}') // localhost:(포트번호)로 페이지 접속
  })