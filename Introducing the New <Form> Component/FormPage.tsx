export default function FormPage() {
  return (
    <div>
      <h1>Next v15 Form Component</h1>
      <p>Which saves us from a lot of boilerplate code.</p>
      <Form action="/search">
        {/* On submission, the input value will be appended to 
            the URL, e.g. /search?query=abc */}
        <input
          name="query"
          placeholder="Enter your search query"
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
