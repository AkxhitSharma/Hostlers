import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    room_number: String,
    department: String,
  },
  { timestamps: true }
);

UserSchema.pre('save', async function(){
  const userid1=await User.findOne({firstName:"Food"});
  const userid2=await User.findOne({firstName:"Electrical"});
  const userid3=await User.findOne({firstName:"Mechanical"});
  function checkfriend(friend){
    if(friend==userid1._id||userid2._id||userid3._id){
      return 1;
    }else{
      return 0;
    }
  }
  if(this.friends.find(checkfriend)){
    return;
  }else{
     return this.friends.push(userid1._id,userid2._id,userid3._id) ;
    }
  
})

const User = mongoose.model("User", UserSchema);
export default User;
