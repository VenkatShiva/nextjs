import MeetupItem from './MeetupItem';
import meetuplist from './meetuplist.module.css';

function MeetupList(props) {
  const { meetups } = props;
  return (
    <div className={meetuplist.meetup}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </div>
  );
}

export default MeetupList;
