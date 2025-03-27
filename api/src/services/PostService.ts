import { PostModel } from '../models/PostModel';
import { IPost } from '../interfaces/global.interface';

export class PostService {
  static async createPost(postData: IPost): Promise<IPost> {
    const post = new PostModel(postData);
    return post.save();
  }

  static async getPosts(): Promise<IPost[]> {
    return PostModel.find();
  }

  static async getPostById(postId: string): Promise<IPost | null> {
    return PostModel.findById(postId);
  }

  static async updatePost(postId: string, postData: Partial<IPost>): Promise<IPost | null> {
    return PostModel.findByIdAndUpdate(postId, postData, { new: true });
  }

  static async deletePost(postId: string): Promise<IPost | null> {
    return PostModel.findByIdAndDelete(postId);
  }
}