import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "rin.shima@yurucamp.jp",
    fullName: "Rin Shima",
    password: "123456",
    profilePic:
      "https://res.cloudinary.com/dkkzaekid/image/upload/v1753203404/YelpCamp/fueshgobh9u5l0vrufgv.webp",
  },
  {
    email: "nadeshiko.kagamihara@yurucamp.jp",
    fullName: "Nadeshiko Kagamihara",
    password: "123456",
    profilePic:
      "https://res.cloudinary.com/dkkzaekid/image/upload/v1753203404/YelpCamp/ngpjlwk5ixjvgtfz95g3.webp",
  },
  {
    email: "chiaki.ogaki@yurucamp.jp",
    fullName: "Chiaki Oogaki",
    password: "123456",
    profilePic:
      "https://res.cloudinary.com/dkkzaekid/image/upload/v1753203404/YelpCamp/gkfo5bj2h6r67c4o5qif.webp",
  },
  {
    email: "aoi.inuyama@yurucamp.jp",
    fullName: "Aoi Inuyama",
    password: "123456",
    profilePic:
      "https://res.cloudinary.com/dkkzaekid/image/upload/v1753203404/YelpCamp/pfvujfjq2n30uyf5bft0.webp",
  },
  {
    email: "ena.saito@yurucamp.jp",
    fullName: "Ena Saitou",
    password: "123456",
    profilePic:
      "https://res.cloudinary.com/dkkzaekid/image/upload/v1753203404/YelpCamp/ud72johczgmocz0zbxhx.webp",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
