const submitTitle = async (formData: FormData) => {
  // Simulate server delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  const newTitle = formData.get('title') as string;
  if (newTitle === 'error') {
    throw new Error('Title cannot be "error"');
  }
  return newTitle;
};

export default function OptimisticComponent() {
  const [title, setTitle] = useState('Title');
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(title);
  const [error, setError] = useState<string | null>(null);
  const pending = title !== optimisticTitle;

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setOptimisticTitle(formData.get('title') as string);
    try {
      const updatedTitle = await submitTitle(formData);
      setTitle(updatedTitle);
    } catch (e) {
      setError((e as Error).message);
    }
  };
  return (
    <div>
      <h1>useOptimistic Example</h1>
      <h2>{optimisticTitle}</h2>
      <p> {pending && 'Updating...'} </p>
      <form action={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Change Title"
        />
        <button
          type="submit"
          disabled={pending}
        >
          Submit
        </button>
      </form>
      <div>{error && error}</div>
    </div>
  );
}
