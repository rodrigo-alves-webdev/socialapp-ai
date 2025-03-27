import { Schema, model } from 'mongoose';

import { IPost } from 'interfaces/global.interface';

const Types = Schema.Types

const PostSchema = new Schema<IPost>({
    content: { type: String, required: true },
    author: { type: Types.ObjectId, required: true },
    type: { type: String, required: true },
    files: { type: [String] },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
},
    { timestamps: true }
);


export const PostModel = model<IPost>('Post', PostSchema);
