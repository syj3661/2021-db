import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

router.get('/adminAirport', async (req, res) => {
    const adminAirport_res = await selectSql.getAirport();
    res.render('updateAirport', {
        title: "공항 정보 갱신",
        adminAirport_res
    })
});

router.post('/adminAirport', async (req, res) => {
    const vars = req.body;
    console.log(vars.Name);

    const data = {
        Name: vars.name
    }
    await updateSql.updateAirport(data);

    res.redirect('/select/admin');
});

router.get('/adminAirplane', async (req, res) => {
    const adminAirplane_res = await selectSql.getAirplane();
    res.render('updateAirplane', {
        title: "항공기 정보 갱신",
        adminAirplane_res
    })
});

router.post('/adminAirplane', async (req, res) => {
    const vars = req.body;
    console.log(vars.Total_number_of_seats);

    const data = {
        Total_number_of_seats: vars.total_number_of_seats
    }
    await updateSql.updateAirplane(data);

    res.redirect('/select/admin');
});

router.get('/adminFlightleg', async (req, res) => {
    const adminFlightleg_res = await selectSql.getLeginstance();
    res.render('updateFlightLeg', {
        title: "항공편 정보 갱신",
        adminFlightleg_res
    })
});

router.post('/adminFlightleg', async (req, res) => {
    const vars = req.body;
    console.log(vars.Number_of_available_seats);

    const data = {
        Number_of_available_seats: vars.number_of_available_seats
    }
    await updateSql.updateLeginstance(data);

    res.redirect('/select/admin');
});

module.exports = router;