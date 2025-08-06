// const Booking=require("../models/booking");

// exports.addbooking=async(req,res)=>{
//     const booking =await Booking.create(req.body);
//     console.log(booking);
//     res.send(booking);
// }

// exports.getBooking =async(req,res)=>{
//     let {id}=req.params;
//     const booking=await Booking.find().lean().exec();
//     let filteredBookings=booking.filter((booking)=>booking.customerId.toString()== id);
//     res.send(filteredBookings)
// } 


// const Booking = require("../models/booking");

// exports.addbooking = async (req, res) => {
//   try {
//     const booking = await Booking.create(req.body);
//     console.log("Booking created:", booking);
//     res.send(booking);
//   } catch (error) {
//     console.error("Error creating booking:", error.message);
//     console.error(error);  // full error object
//     res.status(500).json({ error: "Internal Server Error", message: error.message });
//   }
// };

// exports.getBooking = async (req, res) => {
//   try {
//     let { id } = req.params;
//     const booking = await Booking.find().lean().exec();
//     let filteredBookings = booking.filter(
//       (booking) => booking.customerId.toString() == id
//     );
//     res.send(filteredBookings);
//   } catch (error) {
//     console.error("Error getting bookings:", error.message);
//     res.status(500).json({ error: "Internal Server Error", message: error.message });
//   }
// };


const Booking=require("../models/booking");

exports.addbooking=async(req,res)=>{
    console.log("Received Booking data:" ,req.body);
    const booking =await Booking.create(req.body);
    console.log(booking);
    res.send(booking);
}

exports.getBooking =async(req,res)=>{
    let {id}=req.params;
    const booking=await Booking.find().lean().exec();
    let filteredBookings=booking.filter((booking)=>booking.customerId.toString()== id);
    res.send(filteredBookings)
}


