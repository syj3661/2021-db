import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";
import updateRouter from "../routes/update";

const PORT = 3000; // 접속 포트를 3000으로 설정

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', homeRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);
app.use('/update', updateRouter);

app.listen(PORT, () => {
      console.log('Example app listening at http://localhost:${PORT}')
})