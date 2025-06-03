import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  author: {
    type: [String],
    required: true,
    trim: true,
    validate: {
      validator: arr => arr.length > 0,
      message: "Un livre doit avoir au moins un auteur.",
    },
  },
  collections: {
    type: String,
    required: false,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  editor: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: false,
    min: 0
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  summary: {
    type: String,
    required: false,
    trim: true,
    maxlength: 1000
  }
});
 BookSchema.index(
  {title: "text", collections: "text", editor: "text", genre: "text", author: "text"},
  { weights: { title: 5, collections: 4, editor: 3, genre: 2, author: 1 } }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
