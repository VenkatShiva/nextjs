import { useRouter } from 'next/router';
import Image from 'next/image';
import Classes from './meetupDetails.module.css';

function MeetupDetails(props) {
  const router = useRouter();
  const { image, title, address, description } = props.meetup;
  return (
    <section className={Classes.meetup}>
      <p>Meetup -- {`${router.query.meetupid}`}</p>
      <p>{title}</p>
      <Image src={image} alt="meetup-image" width="700" height="400" />
      <address>Address : {address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetails;
