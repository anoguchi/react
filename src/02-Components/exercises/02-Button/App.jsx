import "./App.css";

// eslint-disable-next-line react/prop-types
function Button({ status, children }) {
  // status: 'cancel' | 'confirm'
  let themeColor;

  function setStatus(status) {
    if (status === "cancel") return (themeColor = "red");
    if (status === "confirm") return (themeColor = "black");
    if (status === "accept") return (themeColor = "green");
    throw new Error("Unrecognized value");
  }

  setStatus(status);

  return (
    <button
      style={{
        border: "2px solid",
        color: themeColor,
        borderColor: themeColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
