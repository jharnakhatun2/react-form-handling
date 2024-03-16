export default function MultipleFormInput() {
  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
