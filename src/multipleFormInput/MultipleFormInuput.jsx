import { useState } from "react";

export default function MultipleFormInput() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    select: "Volvo",
    isAgree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Clear form data
    setFormData({
      name: "",
      email: "",
      message: "",
      select: "Volvo",
      isAgree: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <br />
        <br />
        <select name="select" value={formData.select} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <br />
        <br />

        <input
          type="checkbox"
          id="isAgree"
          name="isAgree"
          checked={formData.isAgree}
          onChange={handleChange}
        />

        {formData.isAgree ? (
          <span>Yes! We agree.</span>
        ) : (
          <span>Do you agree to continue?</span>
        )}

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
