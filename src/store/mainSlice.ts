import { PostType } from '@/lib/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostState {
  posts: PostType[];
  currentPost: PostType;
}

const initialState: PostState = {
  posts: [],
  currentPost: {} as PostType
}

export const postSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload
    },

    setPost: (state, action: PayloadAction<PostType>) => {
      state.currentPost = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, setPost } = postSlice.actions

export default postSlice.reducer