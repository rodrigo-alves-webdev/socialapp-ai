import { Schema, model } from 'mongoose';
import { IComment } from '../interfaces/global.interface';

const Types = Schema.Types

const CommentSchema = new Schema<IComment>(
  {
    postId: { type: Types.ObjectId },
    author: { type: Types.ObjectId },
    content: { type: String, required: true },
    parent: { type: Types.ObjectId },
    children: [{ type: Types.ObjectId, ref: 'Comment', default: [] }],
    role: { type: String },
  },
  { timestamps: true }
);

export const CommentModel = model<IComment>('Comment', CommentSchema);