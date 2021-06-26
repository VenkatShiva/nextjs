// domain.com/news
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function News() {
  const router = useRouter();
  // console.log(router);
  return (
    <Fragment>
      <h1>This is News Page</h1>
      <ul>
        <li>
          <Link href={`${router.asPath}/next-js-is-great`}>
            NextJS is A Great Framework
          </Link>
        </li>
        <li>
          <Link href={`${router.asPath}/something-else-about-nextjs`}>
            Something Else
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default News;
