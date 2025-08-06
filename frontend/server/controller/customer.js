// const customer = require("../models/customer");

// exports.addnewcustomer = async (req, res) => {
//   try {
//     const { name, email, googleId, profilepicture } = req.body;
//     // console.log(name,email,googleId,profilepicture)
//     let exisitingcustomer = await Customer.findOne({ email: email })
//       .lean()
//       .exec();
//     if (exisitingCustomer) {
//       res.send(exisitingCustomer);
//     } else {
//       const customer = new customer({
//         name,
//         email,
//         googleId,
//         profilepicture,
//       });
//       const newCustomer = await Customer.save();
//       res.status(201).json(newCustomer);
//     }
//   } catch (error) {
//     console.error("error adding customer", error);
//     res.status(500).json({ error: "internal server error" });
//   }
// };

const Customer = require("../models/customer");

exports.addnewcustomer = async (req, res) => {
  try {
    const { name, email, googleId, profilePicture } = req.body;

    const existingCustomer = await Customer.findOne({ email }).lean().exec();

    if (existingCustomer) {
      return res.send(existingCustomer);
    }

    const newCustomer = new Customer({
      name,
      email,
      googleId,
      profilePicture,
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error("Error adding customer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
