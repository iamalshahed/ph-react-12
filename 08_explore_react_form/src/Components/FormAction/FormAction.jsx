import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };

  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="name" id="name" placeholder="Username" />
        <br />
        <input type="email" name="email" id="email" placeholder="Email" />
        <div className="">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default FormAction;
