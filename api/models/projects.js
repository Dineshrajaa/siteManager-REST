'use strict';
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const ProjectSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})