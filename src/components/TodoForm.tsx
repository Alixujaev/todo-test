import { createPost, updatePost } from "@/api/posts";
import { PostType } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const currentPost = useSelector((state: any) => state.currentPost);
  const [inputVal, setInputVal] = useState<string>("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    value: string,
    currentPost?: PostType
  ) {
    e.preventDefault();
    if (!value) return;
    let body = {} as PostType;

    if (currentPost?.id) {
      body = {
        ...currentPost,
        title: value,
      };

      updatePost(currentPost.id, body).then((res) => {
        console.log(res);
      });
    } else {
      body = {
        id: uuidv4(),
        title: value,
        is_completed: false,
      };

      createPost(body).then((res) => {
        console.log(res);
      });
    }
  }

  useEffect(() => {
    setInputVal(currentPost.title);
  }, [currentPost]);

  return (
    <form
      id="todo-form"
      onSubmit={(e) => handleSubmit(e, inputVal, currentPost)}
      className="flex mt-10"
    >
      <input
        type="text"
        className="border flex-1"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="bg-blue-500 cursor-pointer">Submit</button>
    </form>
  );
};

export default TodoForm;
