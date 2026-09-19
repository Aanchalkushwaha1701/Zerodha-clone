const {model}=require("mongoose");
 const {positionsSchema}=require("../schemas/positionsSchema");
  const positionsModel=new model("position",positionsSchema);


  module.exports={positionsModel};