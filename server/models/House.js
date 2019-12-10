import mongoose from "mongoose";

const Schema = mongoose.Schema;

const House = new Schema(
  {
    state: { type: String, maxlength: 20 },
    city: { type: String, maxlength: 20 },
    price: { type: Number },
    description: { type: String, maxlength: 250 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House