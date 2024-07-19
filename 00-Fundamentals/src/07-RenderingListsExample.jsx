// Rendering Lists

function List() {
  const friends = [
    { id: 893, name: "Lynn" },
    { id: 871, name: "Alex" },
    { id: 982, name: "Ben" },
    { id: 61, name: "Mikenzi" }
  ];

  return (
    <ul>
      {friends.map(({ id, name }) => {
        return <li key={id}>{name}</li>
      })}
    </ul>
  );
}

function ListNoKeys() {
  const friends = ["Ben", "Lynn", "Alex"];

  return (
    <ul>
      {friends.map((friend, index) => {
        return <li key={index}>{friend}</li>
      })}
    </ul>
  );
}

export default function FriendsList() {
  return <List />;
  // return <ListNoKeys />;
}