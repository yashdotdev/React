import Post from "./components/Post";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <>
      <Post title="An update" body="It's been a while since I posted..." />
      <Post title="My new blog" body="I am starting a new blog!" />
      <TodoList/>
    </>
  );
}
