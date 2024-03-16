import { useState } from "react";

export default function SingleInput() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
