
export default async function getAllPosts() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');


return data.json();
}