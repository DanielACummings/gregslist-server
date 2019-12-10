import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Car = new Schema(
  {
    make: { type: String, required: true, maxlength: 20 },
    model: { type: String, required: true },
    year: { type: Number, max: 2040, min: 1800 },
    price: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;
