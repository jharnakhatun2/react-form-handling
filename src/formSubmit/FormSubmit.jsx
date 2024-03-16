import { useState } from "react";

export default function FormSubmit() {
  const [name, setName] = useState("");
  console.log(name);

  const handleSubmit = (event) => {
    setName("");
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
