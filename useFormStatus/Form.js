const Form = () => {
  const { pending, data } = useFormStatus();

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
      />
      <button
        disabled={pending}
        type="submit"
      >
        Submit
      </button>
      {pending && (
        <p>Submitting {data?.get('username') as string}...</p>
      )}
    </div>
  );
};
