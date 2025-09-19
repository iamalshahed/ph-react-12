function Friend({ friend }) {
  const { name, email, phone, website } = friend;
  const mb = {
    marginBottom: "50px",
  };

  return (
    <div style={mb}>
      <h4>Name: {name}</h4>
      <h4>Email: {email.toLowerCase()}</h4>
      <h4>Phone: {phone}</h4>
      <h4>
        Website: <a target="_blank" href={website}>{website}</a>
      </h4>
      <hr />
    </div>
  );
}

export default Friend;
