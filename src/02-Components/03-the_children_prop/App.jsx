import "./App.css";

// eslint-disable-next-line react/prop-types
function RedButton({ children }) {
  return (
    <button
      style={{
        color: "Snow",
        backgroundColor: "DeepPink",
      }}
    >
      {children}
    </button>
  );
}

export default RedButton;
