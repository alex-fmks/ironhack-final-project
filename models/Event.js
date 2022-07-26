const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: String,
  client: String,
  date: String,
  location: {
    street: String,
    houseNumber: Number,
    postcode: Number,
  },
  timers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Timer",
    },
  ],
});

const Event = model("Event", eventSchema);

module.exports = Event;
