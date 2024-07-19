// Let's suppose that we're building a custom button component. It should look and act just like a regular HTML button, but it should have a red background and white text. Children is a special value, a “reserved word” when it comes to props.

export default function RedButton({ children }) {
  return (
    <button
      style={{
        color: 'white',
        backgroundColor: 'red',
      }}
    >
      {children}
    </button>
  );
}
