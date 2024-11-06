async function getData() {
  const res = await fetch('https://api.dimeloper.com/', { cache: 'force-cache' });
  return res.json();
}
