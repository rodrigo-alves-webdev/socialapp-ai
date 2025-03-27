import { CommentModel } from '../models/CommentModel';
import { IComment } from '../interfaces/global.interface';

export class CommentService {
  static async addComment(commentData: IComment): Promise<IComment> {
    const comment = new CommentModel(commentData);
    const savedComment = await comment.save();

    if (commentData.parent) {
      await CommentModel.findByIdAndUpdate(
        commentData.parent,
        { $push: { children: savedComment._id } }, 
        { new: true }
      );
    }

    return savedComment;
  }
  static async getCommentsByPost(postId: string): Promise<IComment[]> {
    return CommentModel.find({ postId, parent: null })
      .populate({
        path: 'children',
        model: 'Comment',
      })
      .lean();
  }

  static async deleteCommentByPost(postId: string): Promise<IComment | null> {
      return CommentModel.findByIdAndDelete(postId);
    }
}