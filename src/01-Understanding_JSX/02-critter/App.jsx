import "./App.css";
import { formatDate } from "./date-helper.js";

function App() {
  const message = {
    content: "Just ate at “Les Corbeaux En Colère”. Wonderful little venue!",
    published: formatDate(new Date()),
    author: {
      avatarSrc: "https://sandpack-bundler.vercel.app/img/avatars/009.png",
      avatarDescription: "Cartoon bear",
      name: "Ben Thorn",
      handle: "benjaminthorn",
    },
  };
  const profileUrl = `/users/${message.author.handle}`;
  const element = (
    <article style={{ filter: "var(--shadow-elevation-high)" }}>
      <header>
        <img
          alt={message.author.avatarDescription}
          src={message.author.avatarSrc}
        />
        <a href={profileUrl}>{message.author.name}</a>
      </header>
      <p>{message.content}</p>
      <footer>
        Posted <time dateTime={message.published}>{message.published}</time>
      </footer>
    </article>
  );
  return element;
}

export default App;
