import Friend from "./Friend";

function App() {
  return (
    <ul className="friend-list">
      <Friend name="Beto" isOnline={false} />
      <Friend name="Julia" isOnline={true} />
      <Friend name="Tiago" isOnline={true} />
    </ul>
  );
}

export default App;
