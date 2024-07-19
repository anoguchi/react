// Props are like arguments to a function: they allow us to pass data to our components, so that the components can include customizations based on the data.

export default function FriendGreeting({ name = 'Julia' }) {
  return (
    <p
      style={{
        fontSize: "1.25rem",
        textAlign: "center",
        color: "rebeccapurple",
      }}
    >
      Hi, {name}!
    </p>
  );
}

/* 
  <FriendGreeting name="Beto" /> is transformed into:
  const element = React.createElement(
    FriendGreeting, 
    { name: "Beto" }
  );
  render(element, document.querySelector("#root"));
*/
