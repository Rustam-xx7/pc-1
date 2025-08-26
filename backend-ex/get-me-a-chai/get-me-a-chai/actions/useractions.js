"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  //fetch the secret of the user who os getting the payment 
      let user = await User.findOne({username: to_user})
      const secret = user.razorpaysecret
      const Id = user.razorpayId


  var instance = new Razorpay({
    key_id: Id,
    key_secret: secret,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let x = await instance.orders.create(options);

  // create apayment object which shows a pending payment
  await Payment.create({
    oid: x.id,
    amount: amount/100,
    to_user: to_username,
    name: paymentform.name,
    massage: paymentform.massage,
  });

  return x;
};


export const fetchuser = async (username) => {
  await connectDB()
  let u = await User.findOne({username: username})
  let user = u.toObject({flattenObjectIds: true})
  return user
}

export const fetchpayments = async (username) => {
  await connectDB()
  let p = await Payment.find({to_user: username, done: true }.sort({amount: -1}).lean())
  return p ;
}

export const updateProfile = async (data, oldusername) => {
  await connectDB()
  let ndata = Object.fromEntries(data)

  // if the username is being updated check if username is available or not 
  if( oldusername !== ndata.username) {
    let u = await User.findOne({username: ndata.username})
    if(u){
      return {error: "Username is already exists"}
    }
    await User.updateOne({email: ndata.email}, ndata)

    // Now update all the payments
    await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
  }

  
  else{
    await User.updateOne({email: ndata.email}, ndata)
  }


}