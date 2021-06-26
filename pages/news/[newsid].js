import { useRouter } from 'next/router';

function ImportantNews(props) {
  const router = useRouter();
  // console.log(router);
  return <h1>Here is the important news</h1>;
}

export default ImportantNews;
