import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Job = new Schema(
  {
    field: { type: String, required: true, maxlength: 20 },
    position: { type: String, required: true, maxlength: 20 },
    salary: { type: Number, required: true },
    description: { type: String, maxlength: 250 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job