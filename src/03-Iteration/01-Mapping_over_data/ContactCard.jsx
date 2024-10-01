import "./App.css";

// eslint-disable-next-line react/prop-types
function ContactCard({ name, jobName, email }) {
  return (
    <li className="contact-card">
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{jobName}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
}

export default ContactCard;
