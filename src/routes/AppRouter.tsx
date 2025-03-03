import Profile from "@/pages/Profile";
import TodoList from "@/pages/TodoList";
import { Route, Routes } from "react-router";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute isLogged={false}>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
