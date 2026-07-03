import mongoose from "mongoose";

const codeReviewSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
    },

    overallReview: {
      type: String,
      
    },

    score: {
      type: Number,
      min: 0,
      max: 10,
     
    },

    errors: [
      {
        type: String,
      },
    ],

    suggestions: [
      {
        type: String,
      },
    ],

    optimizedCode: {
      type: String,
     
    },

    complexity: {
      time: {
        type: String,
      },
      space: {
        type: String,
      },
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CodeReview", codeReviewSchema);