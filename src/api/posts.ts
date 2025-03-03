import axiosInstance from "@/lib/fetch"
import { PostType } from "@/lib/types"

export const getPosts = (): Promise<PostType[]> => {
  const results: Promise<PostType[]> = axiosInstance.get('/posts')
  return results
}

export const createPost = (body: PostType) => {
  const result = axiosInstance.post('/posts', body)

  return result
}

export const deletePost = (id: string) => {
  const result = axiosInstance.delete(`/posts/${id}`)

  return result
}

export const updatePost = (id: string, body: PostType) => {
  const result = axiosInstance.put(`/posts/${id}`, body)
  return result
}