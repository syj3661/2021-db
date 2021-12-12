import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/user', async (req, res) => {
    const user = await selectSql.getSeatreservation();
    res.render('deleteUser', {
        title: "예약 취소",
        user
    })
});

router.post('/user', async (req, res) => {
    console.log('delete router:', req.body.seat_number);

    const data = {
        Seat_number: req.body.seat_number,
    }; 
    
    await deleteSql.deleteSeatreservation(data); 

    res.redirect('/select/user');
});

router.get('/adminAirport', async (req, res) => {
    const airport = await selectSql.getAirport();
    res.render('deleteAirport', {
        title: "공항 삭제",
        airport
    })
});

router.post('/adminAirport', async (req, res) => {
    console.log('delete router:', req.body.Name);

    const data = {
        Name: req.body.name,
    }; 
    
    await deleteSql.deleteAirport(data); 

    res.redirect('/select/adimin');
});

router.get('/adminAirplane', async (req, res) => {
    const airplane = await selectSql.getAirplane();
    res.render('deleteAirplane', {
        title: "항공기 삭제",
        airplane
    })
});

router.post('/adminAirplane', async (req, res) => {
    console.log('delete router:', req.body.Total_number_of_seats);

    const data = {
        Total_number_of_seats: req.body.total_number_of_seats,
    }; 
    
    await deleteSql.deleteAirplane(data); 

    res.redirect('/select/adimin');
});

router.get('/adminFlightleg', async (req, res) => {
    const flight_leg = await selectSql.getLeginstance();
    res.render('deleteFlightleg', {
        title: "항공편 삭제",
        flight_leg
    })
});

router.post('/adminFlightleg', async (req, res) => {
    console.log('delete router:', req.body.Number_of_available_seats);

    const data = {
        Number_of_available_seats: req.body.number_of_available_seats,
    }; 
    
    await deleteSql.deleteLeginstance(data); 

    res.redirect('/select/adimin');
});

module.exports = router;