const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Well here is my thought!",
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    id: false
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
