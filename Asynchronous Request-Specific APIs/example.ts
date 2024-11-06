export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const params = await searchParams;

  const query = params.query;

  return (...)
}
