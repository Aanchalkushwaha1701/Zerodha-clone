const { model } = require("mongoose");
const { SignupSchema } = require("../schemas/SignupSchema");

module.exports = model("User", SignupSchema);