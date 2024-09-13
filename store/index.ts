import { PostType } from '@/app/posts/page';
import { getData, getPostBy } from '@/services';
import { create } from 'zustand';

type UsePosts = {
  posts: PostType[];
  loading: boolean;
  getData: () => Promise<void>;
  getPostBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<UsePosts>()((set) => ({
  posts: [],
  loading: false,
  getData: async () => {
    set({ loading: true });
    const posts = await getData();
    set({ posts, loading: false });
  },
  getPostBySearch: async (search) => {
    set({ loading: true });
    const posts = await getPostBy(search);
    set({ posts, loading: false });
  },
}));
