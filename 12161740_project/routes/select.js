import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/user', async function(req, res) {
    const seat_reservation = await selectSql.getSeatreservation();

    res.render('selectUser', {
        title: '예약 조회',
        seat_reservation
    });
});

router.get('/admin', async function(req, res) {
    const airport = await selectSql.getAirport();
    const airplane = await selectSql.getAirplane();
    const leg_instance = await selectSql.getLeginstance();

    res.render('selectAdmin', {
        title: '공항 정보',
        title2: '항공기 정보',
        title3: '항공편 정보',
        airport,
        airplane,
        leg_instance
    });
});

module.exports = router;