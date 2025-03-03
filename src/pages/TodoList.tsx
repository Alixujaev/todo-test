import { getPosts } from "@/api/posts";
import TodoCard from "@/components/TodoCard";
import TodoForm from "@/components/TodoForm";
import { PostType } from "@/lib/types";
import { setPosts } from "@/store/mainSlice";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts().then((res) => {
      dispatch(setPosts(res));
    });
  }, []);

  return (
    <div>
      <TodoForm />

      {posts.length ? (
        posts.map((item: PostType) => <TodoCard key={item.id} post={item} />)
      ) : (
        <p>Nothing found!</p>
      )}
    </div>
  );
};

export default TodoList;
