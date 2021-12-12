import express from "express";
import {insertSql, selectSql} from "../database/sql";

const router = express.Router();

router.get('/user', async (req, res) => {
    const user_res = await selectSql.getSeatreservation();
    res.render('homeUser', {
        title: "예약하기",
        user_res
    });
});

router.post('/user', async (req, res) => {
    const vars = req.body;

        const data = {
            Flight_number: vars.flight_number,
            Leg_number: vars.leg_number,
            Date: vars.date,
            Seat_number: vars.seat_number,
            Customer_name: vars.customer_name,
            Customer_phone: vars.customer_phone
        };

        insertSql.setSeatreservation(data);

    res.redirect('/select/user');
})

router.get('/adminAirport', async (req, res) => {
    const adminAirport_res = await selectSql.getAirport();
    res.render('homeAdminAirport', {
        title: "공항 정보 입력",
        adminAirport_res
    });
});

router.post('/adminAirport', async (req, res) => {
    const vars = req.body;

        const data = {
            Airport_code: vars.airport_code,
            Name: vars.name,
            City: vars.city,
            State: vars.state
        };

        insertSql.setAirport(data);
      
    res.redirect('/select/admin');
})

router.get('/adminAirplane', async (req, res) => {
    const adminAirplane_res = await selectSql.getAirplane();
    res.render('homeAdminAirplane', {
        title: "항공기 정보 입력",
        adminAirplane_res
    });
});

router.post('/adminAirplane', async (req, res) => {
    const vars = req.body;

        const data = {
            Airplane_id: vars.airplane_id,
            Total_number_of_seats: vars.total_number_of_seats,
            Airplane_type: vars.airplane_type
        };

        insertSql.setAirplane(data);
      
    res.redirect('/select/admin');
})

router.get('/adminFlightleg', async (req, res) => {
    const adminFlightleg_res = await selectSql.getLeginstance();
    res.render('homeAdminFlightleg', {
        title: "항공편 정보 입력",
        adminFlightleg_res
    });
});

router.post('/adminFlightleg', async (req, res) => {
    const vars = req.body;

        const data = {
            Flight_number: vars.flight_number,
            Leg_number: vars.leg_number,
            Date: vars.date,
            Number_of_available_seats: vars.number_of_available_seats,
            Airplane_id: vars.airplane_id,
            Departure_airport_code: vars.departure_airport_code,
            Departure_time: vars.departure_time,
            Arrival_airport_code: vars.arrival_airport_code,
            Arrival_time: vars.arrival_time
        };

        insertSql.setLeginstance(data);

    res.redirect('/select/admin');

})

module.exports = router;