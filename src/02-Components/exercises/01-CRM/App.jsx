import "./App.css";

// eslint-disable-next-line react/prop-types
function ContactCard({ name, jobName, email }) {
  return (
    <li className="contact-card">
      <h2>{name}</h2>
      <dl>
        <dt>{jobName}</dt>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
}

function App() {
  return (
    <ul>
      <ContactCard
        name="Sunita Kumar"
        jobName="Electrical Engineer"
        email="sunita.kumar@acme.co"
      />
      <ContactCard
        name="Henderson G. Sterling II"
        jobName="Receptionist"
        email="henderson-the-second@acme.co"
      />
      <ContactCard
        name="Aoi Kobayashi"
        jobName="President"
        email="kobayashi.aoi@acme.co"
      />
    </ul>
  );
}

export default App;
