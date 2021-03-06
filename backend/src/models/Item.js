const db = require("mongoose");

const clientSchema = new db.Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String,
    },
    image: {
      type: String
    },
    pickup_location_latitude: {
      type: Number
    },
    pickup_location_longitude: {
      type: Number
    },
    pickup_location_description: {
      type: String
    },
    available_to_pickup: {
      type: Boolean,
      default: true,
    },
    user_name: {
      type: String
    },
    user_email: {
      type: String,
    }

  },
  { timestamps: true }
);

module.exports = db.model("Item", clientSchema);