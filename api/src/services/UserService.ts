import bcrypt from 'bcryptjs'
import { Types } from 'mongoose';

import { IUser } from '../interfaces/global.interface';

import { UserModel, IUserModel } from '../models/UserModel';

export class UserService {
  static async create(data: IUser): Promise<IUserModel> {
    const hashedPassword = await bcrypt.hash(data.password, 8);
    const user = new UserModel({
      ...data,
      password: hashedPassword,
    });
    return await user.save();
  }

  static async find(): Promise<IUserModel[]> {
    return await UserModel.find();
  }

  static async findUserById(id: Types.ObjectId, projection: string): Promise<IUserModel | null> {
    return await UserModel.findById(id, projection);
  }

  static async findOne(email: string): Promise<IUserModel | null> {
    return await UserModel.findOne({ email }, 'email');
  }

  static async update(id: Types.ObjectId, data: Partial<IUser>): Promise<IUserModel | null> {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: Types.ObjectId): Promise<IUserModel | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
