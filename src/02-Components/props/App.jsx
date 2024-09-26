import "./App.css";

function FriendlyGreeting({ name = "there" }) {
  return (
    <p
      style={{
        fontSize: "1.25rem",
        textAlign: "center",
        color: "Snow",
      }}
    >
      Greetings, {name}!
    </p>
  );
}

// const element = React.createElement(FriendlyGreeting, {
//   name: "Beto",
// });

export default FriendlyGreeting;
