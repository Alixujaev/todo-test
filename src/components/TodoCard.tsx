import { deletePost, updatePost } from "@/api/posts";
import { PostType } from "@/lib/types";
import { setPost } from "@/store/mainSlice";
import { useDispatch } from "react-redux";

const TodoCard = ({ post }: { post: PostType }) => {
  const dispatch = useDispatch();
  function handleDelete(id: string) {
    deletePost(id).then((res) => {
      console.log(res);
    });
  }

  function handleUpdate(id: string, body: PostType) {
    updatePost(id, body).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="p-2 my-2 border rounded-[8px] flex justify-between">
      <div>
        <p>Id:{post.id}</p>
        <p>Title:{post.title}</p>

        <p>Completed: {post.is_completed ? "Yes" : "No"}</p>
      </div>

      <div className="flex space-x-4">
        <button type="button" onClick={() => handleDelete(post.id)}>
          Delete
        </button>
        <button type="button" onClick={() => dispatch(setPost(post))}>
          Edit
        </button>
        <button
          onClick={() =>
            handleUpdate(post.id, { ...post, is_completed: !post.is_completed })
          }
          type="button"
        >
          Change status
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
