const submitActionWithCurrentState = async (
  prevState: any,
  formData: FormData
) => {
  // do some action like adding the user into the users array
};

export default function ActionStateComponent() {
  const [state, formAction] = useActionState(submitActionWithCurrentState, {
    users: [],
    error: null,
  });

  return (
    <div>
      <h1>useActionState Example</h1>
      <form action={formAction} id="action-hook-form" className="mb-4">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
          />
          <button
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div>{state?.error}</div>
      {state?.users?.map((user: any) => (
        <div key={user.username}>
          Name: {user.username} Age: {user.age}
        </div>
      ))}
    </div>
  );
}
