export default async function Page({ params }) {
  const { slug } = await params;

  let languages = ["python ", "javascript", "java", "cpp"];

  if (languages.includes(slug)) {
    return <div>My Post: {slug}</div>;
  } else {
    return <div>Post not found</div>;
  }
  return <div>My Post: {slug}</div>;
}
