import Image from 'next/image';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const { id, image, title, address } = props;
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push(`/${id}`);
  };
  return (
    <div>
      <p>{title}</p>
      <Image src={image} alt="meetup-imag" width="700" height="400" />
      <p>Address : {address}</p>
      <button onClick={showDetailsHandler}>Show Details</button>
    </div>
  );
}

export default MeetupItem;
