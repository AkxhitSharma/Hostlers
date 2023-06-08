import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Food",
    lastName: "Department",
    email: "food@gmail.com",
    password: "$2b$10$WrAoKJ51DAeVec4rBylideKi74PLkszgbuULuq.NRa00q0aTfZsNu",
    picturePath: "pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg",
    friends: [],
    room_number: "Hostel Mess",
    department: "Food Enquiry",
    __v: 1,
  },
  {
    _id: userIds[1],
    firstName: "Electrical",
    lastName: "Department",
    email: "electrical@gmail.com",
    password: "$2b$10$Xm3WqgqDHHb68lA.4wcbteOAcgsnbdfI.YrTzw1N/ET1gT/UpsFKi",
    picturePath: "360_F_285828947_7LvtUCUFARVTzcxvPDM2EkTuknA50buy.jpg",
    friends: [],
    room_number: "Hostel",
    department: "Electrical Faults",
    __v: 1,
  },
  {
    _id: userIds[2],
    firstName: "Mechanical",
    lastName: "Department",
    email: "mechanical@gmail.com",
    password: "$2b$10$EKXv1pVg2v62ndFMvKsRkO8R42o24Ev4oHq9bF/2njsvjdA2qgFLO",
    picturePath: "360_F_292531541_8t6gplsraim2A67wbtPI4Scz2wy1SnwQ.jpg",
    friends: [],
    room_number: "Hostel",
    department: "Mechanical Faults",
    __v: 1,
  },
];