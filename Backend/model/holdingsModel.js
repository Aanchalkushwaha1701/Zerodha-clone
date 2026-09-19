const {model}=require("mongoose");
 const {holdingsSchema}=require("../schemas/holdingsSchema");
  const holdingsModel=new model("holding",holdingsSchema);


  module.exports={holdingsModel};