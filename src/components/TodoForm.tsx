import { createPost } from "@/api/posts";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [inputVal, setInputVal] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, value: string) {
    e.preventDefault();

    const body = {
      id: uuidv4(),
      title: value,
      is_completed: false,
    };

    if (value) {
      createPost(body).then((res) => {
        console.log(res);
        setInputVal("");
      });
    } else {
      alert("Please write something");
    }
  }

  return (
    <form
      id="todo-form"
      onSubmit={(e) => handleSubmit(e, inputVal)}
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
