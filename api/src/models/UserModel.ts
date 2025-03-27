import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

import { IUser } from 'interfaces/global.interface';

export interface IUserModel extends IUser, Document { }

const userSchema = new Schema<IUserModel>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    celular: { type: Number, required: true },
    active: { type: Boolean, required: true, default: false },
    role: { type: String, enum: ['user', 'admin', 'moderator', 'editor'], default: 'user' }
},
    { timestamps: true }
);

userSchema.methods.checkPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};


export const UserModel = model('User', userSchema);
