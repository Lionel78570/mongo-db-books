import Livres from '../models/livres.js';

const livres = [
  {
     author: "John Lang",
     collections: "Le Donjon de Naheulbeuk",
     title: "Le Conseil de Suak",
     editor: "J'ai Lu",
     genre: "Fantasy",
     price: 8.00,
     isbn: "978-2-290-01234-5",
     summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
   },
   {
     author:"Sylvain Tesson",
     collections: "folio",
     title: "Dans les forêts de Sibérie",
     editor: "Gallimard",
     genre: "Aventure",
     isbn: "978-2-07-283680-0",
   },
   {
     author: ["Susanne Hansch","Elke Schwarzer"],
     title: "Manger ses mauvaises herbes",
     editor: "Ulmer",
     genre: "Cuisine",
     price: 16.90,
     isbn: "978-2-37922-160-6",
   }
]

const seedLivres = async () => {
  await Livres.deleteMany({});
  console.log("Old Livres deleted");
  await Livres.insertMany(livres);
  console.log("Seed Livres added");
};

export default seedLivres;