import { Schema, model } from 'mongoose';
import { IAnalytics } from '../interfaces/global.interface';

const Types = Schema.Types

const AnalyticsSchema = new Schema<IAnalytics>(
  {
    postId: { type: Types.ObjectId, required: true },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const AnalyticsModel = model<IAnalytics>('Analytics', AnalyticsSchema);