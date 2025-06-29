/* eslint-disable jsx-a11y/alt-text */
import "./App.css";

function MyButton() {
  return <button className="btn">Click me</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello, welcome to CRA react app!!</h1>
      <MyButton />
      <AboutPage />
      <img
        className="avatar"
        src="https://pbs.twimg.com/media/GO4mZkda8AAVVsP.jpg:large"
      />
    </div>
  );
}

export default App;
