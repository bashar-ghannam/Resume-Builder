const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userInfoSchema = new Schema({
    firstName: String,
    lastName: String,
    email : String,
    phoneNumber : Number,
    jobTitle : String,
    socialLinks:[],
    description : String,
    experience : [],
    education : [],
    skills :[],
    languages : [],
    Hobbies : []
})

const UserInfo= mongoose.model("UserInfo", userInfoSchema)
module.exports = UserInfo