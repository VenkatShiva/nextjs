import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Meetup 1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Stadtbus_N%C3%BCrnberg_Bus_553_Btf._F%C3%BCrth.jpg/1024px-Stadtbus_N%C3%BCrnberg_Bus_553_Btf._F%C3%BCrth.jpg',
    address: 'Address 1',
    description: 'Description 1',
  },
  {
    id: 'm2',
    title: 'Meetup 2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Stadtbus_N%C3%BCrnberg_Bus_553_Btf._F%C3%BCrth.jpg/1024px-Stadtbus_N%C3%BCrnberg_Bus_553_Btf._F%C3%BCrth.jpg',
    address: 'Address 2',
    description: 'Description 2',
  },
];
function HomePage(props) {
  const { meetups } = props;
  return <MeetupList meetups={meetups} />;
}

function dummyAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DUMMY_MEETUPS);
    }, 1000);
  });
}

// export async function getStaticProps(context) {
//   const meetups = await dummyAsync();
//   console.log('contenxt-->>', context);
//   return {
//     props: {
//       meetups: meetups,
//     },
//   };
// }

export async function getServerSideProps(context) {
  // console.log(' server contenxt-->>>>>>', context);
  const meetups = await dummyAsync();
  return {
    props: {
      meetups: meetups,
    },
  };
}

export default HomePage;
