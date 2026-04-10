export default function Contact() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Contact</h1>
      <p>Get in touch with me here.</p>
      <form>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email: <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message: <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}