import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'airline',
        password: '57Du4580**//',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const insertSql = {
    setAirport : async (data) => {
        const sql = `insert into airport values (
            "${data.Airport_code}", "${data.Name}", "${data.City}", "${data.State}")`;
    
            await promisePool.query(sql);    
    },
    setAirplanetype : async (data) => {
        const sql = `insert into airplane_type values (
            "${data.Airplane_type_name}", "${data.Max_seats}", "${data.Company}")`;
    
            await promisePool.query(sql);    
    },
    setAirplane : async (data) => {
        const sql = `insert into airplane values (
            "${data.Airplane_id}", "${data.Total_number_of_seats}", "${data.Airplane_type}")`;
    
            await promisePool.query(sql);    
    },
    setFlightleg : async (data) => {
        const sql = `insert into flight_leg values (
            "${data.Flight_number}", "${data.Leg_number}", "${data.Departure_airport_code}", 
            "${data.Scheduled_departure_time}", "${data.Arrival_airport_code}", "${data.Scheduled_arrival_time}")`;
    
            await promisePool.query(sql);    
    },
    setLeginstance : async (data) => {
        const sql = `insert into leg_instance values (
            "${data.Flight_number}", "${data.Leg_number}", "${data.Date}", "${data.Number_of_available_seats}", "${data.Airplane_id}", 
            "${data.Departure_airport_code}", "${data.Departure_time}", "${data.Arrival_airport_code}", "${data.Arrival_time}")`;
    
            await promisePool.query(sql);    
    },
    setSeatreservation : async (data) => {
        const sql = `insert into seat_reservation values (
            "${data.Flight_number}", "${data.Leg_number}", "${data.Date}", "${data.Seat_number}", 
            "${data.Customer_name}", "${data.Customer_phone}")`;
    
            await promisePool.query(sql);    
    },
}

export const selectSql = {
    getAirport : async () => {
        const [rows] = await promisePool.query('select * from airport');
        return rows
    },
    getAirplanetype: async () => {
        const [rows] = await promisePool.query('select * from airplane_type');
        return rows
    },
    getAirplane: async () => {
        const [rows] = await promisePool.query('select * from airplane');
        return rows
    },
    getFlightleg : async () => {
        const [rows] = await promisePool.query('select * from flight_leg');
        return rows
    },
    getLeginstance : async () => {
        const [rows] = await promisePool.query('select * from leg_instance');
        return rows
    },
    getSeatreservation : async () => {
        const [rows] = await promisePool.query('select * from seat_reservation');
        return rows
    },
}

export const deleteSql = {
    deleteAirport : async (data) => {
        console.log('deleteSql.deleteAirport:', data.Name); 
        const sql = `delete from airport where Name = "airport3"`; 
        await promisePool.query(sql);
    },    
    deleteAirplanetype : async (data) => {
        console.log('deleteSql.deleteAirplanetype:', data.Airplane_type_name); 
        const sql = `delete from airplane_type where Airplane_type_name = "${data.Airplane_type_name}"`; 
        await promisePool.query(sql);
    },
    deleteAirplane : async (data) => {
        console.log('deleteSql.deleteAirplane:', data.Total_number_of_seats); 
        const sql = `delete from airplane where Total_number_of_seats = 150`; 
        await promisePool.query(sql);
    },  
    deleteFlightleg : async (data) => {
        console.log('deleteSql.deleteFlightleg:', data.Leg_number); 
        const sql = `delete from flight_leg where Leg_number = "${data.Leg_number}"`; 
        await promisePool.query(sql);
    },  
    deleteLeginstance : async (data) => {
        console.log('deleteSql.deleteLeginstance:', data.Number_of_available_seats); 
        const sql = `delete from leg_instance where Number_of_available_seats = 150`; 
        await promisePool.query(sql);
    },  
    deleteSeatreservation : async (data) => {
        console.log('deleteSql.deleteSeatreservation:', data.Seat_number); 
        const sql = `delete from seat_reservation where Seat_number = "A1"`; 
        await promisePool.query(sql);
    },      
}

export const updateSql = {
    updateAirport : async (data) => {
        const sql = `update airport set Name = "${data.Name}" where Name = "airport2"`;
        await promisePool.query(sql);

    },
    updateAirplanetype : async (data) => {
        const sql = `update airplane_type set Airplane_type_name = "${data.Airplane_type_name}"`;
        await promisePool.query(sql);

    },
    updateAirplane : async (data) => {
        const sql = `update airplane set Total_number_of_seats = "${data.Total_number_of_seats}" where Total_number_of_seats = 100`;
        await promisePool.query(sql);

    },
    updateFlightleg : async (data) => {
        const sql = `update flight_leg set Leg_number = "${data.Leg_number}"`;
        await promisePool.query(sql);

    },
    updateLeginstance : async (data) => {
        const sql = `update leg_instance set Number_of_available_seats = "${data.Number_of_available_seats}" where Number_of_available_seats = 100`;
        await promisePool.query(sql);

    },
    updateSeatreservation : async (data) => {
        const sql = `update seat_reservation set Seat_number = "${data.Seat_number}"`;
        await promisePool.query(sql);

    },
}