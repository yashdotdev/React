/* eslint-disable jsx-a11y/alt-text */
export default function Home() {
  const user = {
    name: "Yash",
    imageUrl: "https://pbs.twimg.com/media/GO4mZkda8AAVVsP.jpg:large",
    imageSize: "190px",
  };
  return (
    <>
      <h1>Hello, welcome to {user.name}'s website!!</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}
