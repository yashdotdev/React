export function TodoList() {
  const today = new Date();
  // console.log(today);

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  return <h1>To Do List for {formatDate(today)}</h1>;
}
