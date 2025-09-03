import AdminPanel from "./AdminPanel";
import LoginForm from "../LoginForm";

export default function ConditionalRendering() {
  let isLoggedIn = true;

  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return <div>{content}</div>;
}