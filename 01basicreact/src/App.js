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

const user = {
  name: "Yash",
  imageUrl: "https://pbs.twimg.com/media/GO4mZkda8AAVVsP.jpg:large",
  imageSize: "190px",
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello, welcome to {user.name}'s website!!</h1>
      <MyButton />
      <AboutPage />
      <img
        className="avatar"
        src={user.imageUrl}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </div>
  );
}
