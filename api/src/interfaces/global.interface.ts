import { Document, Types, FlattenMaps } from 'mongoose'

interface IUser {
    id: Types.ObjectId
    name: string
    email: string
    password: string
    checkPassword(password: string): Promise<boolean>;
    celular: number
    instruments: string[]
    subteam: string[]
    active: boolean
    role: string
}

interface IChangePassword {
    userPassword: string
    newPassword: string
}

interface IPost extends Document {
    content: {}
    author: Types.ObjectId | IUser[]
    status: string
    type: string
    files: string[]
    comments: Types.ObjectId[]
}

interface IMessage extends Document {
    content: string
    author: Types.ObjectId | IUser[]
    sentAt: Date
    recipients: Types.ObjectId[] | IUser[]
    comments: Types.ObjectId[]
}

interface IComment extends Document {
    content: string
    author: Types.ObjectId | IUser[]
    parent: Types.ObjectId
    children: (Types.ObjectId | FlattenMaps<unknown>)[];
    postId: Types.ObjectId;
    role: string
}

interface IAnalytics extends Document {
    postId: Types.ObjectId | IPost[];
    views: number;
    likes: number;
    shares: number;
}


export { IUser, IChangePassword, IPost, IMessage, IComment, IAnalytics }