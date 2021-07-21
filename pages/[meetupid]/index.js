import MeetupDetails from '../../components/meetups/MeetupDetails';

function Meetup() {
  const meetup = {
    id: 'm1',
    title: 'Meetup 1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Stadtbus_N%C3%BCrnberg_Bus_553_Btf._F%C3%BCrth.jpg/1024px-Stadtbus_N%C3%BCrnberg_Bus_553_Btf._F%C3%BCrth.jpg',
    address: 'Address 1',
    description: 'Description 1',
  };
  return <MeetupDetails meetup={meetup} />;
}

export default Meetup;
