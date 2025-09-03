export default function LoginForm() {
  return (
    <>
      <h1>This is a login form</h1>
      <br />
      <form action={"/"}>
        <label>Name: </label>
        <input type="text" placeholder="Enter your name" />
        <br />
        <label>Email: </label>
        <input type="email" placeholder="Enter your email I'd" />
        <br />
        <label>Password: </label>
        <input type="password" placeholder="Enter your password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}