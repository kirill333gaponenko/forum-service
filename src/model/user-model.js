import {Schema, model, Types} from "mongoose";

const userSchema = new Schema({
    login:{type: String, required: true},
    password:{type: Number, required: true},
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    roles:{
        type: [String],
        enum: ['user', 'admin'],
        default: ['user']
    }


},{
    versionKey: false,
    toJSON: {
        transform: (doc, ret) => {
            delete ret.password;
            delete ret._id;
            ret.roles = ret.roles.map(role => role.toUpperCase());
        }
    }
    })

export default model('User', userSchema, "users");