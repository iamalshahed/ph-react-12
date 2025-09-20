export default function TaskTwoUser({ user }) {
  const mb = {
    marginBottom: "50px",
  };

  const {
    name,
    email,
    website,
    address: { city },
    company: { name: companyName },
  } = user;

  return (
    <div style={mb}>
      <h3>Name: {name}</h3>
      <h3>
        Email:
        <a href={`mailto:${email.toLowerCase()}`}> {email.toLowerCase()}</a>
      </h3>
      <h3>Company: {companyName}</h3>
      <h3>City: {city}</h3>
      <h3>
        Website:
        <a target="_blank" href={`https://${website}`}>
          {" "}
          {website}
        </a>
      </h3>
      <hr />
    </div>
  );
}
