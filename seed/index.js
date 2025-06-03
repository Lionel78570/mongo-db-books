import mongoose from 'mongoose';
import seedPokemons from "./pokemon.js";
import seedTrainers from './trainer.js';
import seedLivres from './livres.js';

const seed = async () => {
    console.log(process.env.MONGODB_URI);
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');

        await seedPokemons();
        await seedTrainers();
        await seedLivres();
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(0);
    }
}

seed();