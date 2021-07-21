import { useRef } from 'react';

function NewMeetupFrom(props) {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const adressRef = useRef(null);
  const descRef = useRef(null);
  const handleSubmitMeetup = () => {
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const adress = adressRef.current.value;
    const desc = descRef.current.value;
    props.onAddMeetup({
      title,
      image,
      adress,
      desc
    })
  };
  return (
    <div>
      <p>New MeetUp Form</p>
      <div>
        <label>Meetup Title</label>
        <input
          ref={titleRef}
          placeholder="Enter Meetup title"
          type="text"
        ></input>
      </div>
      <div>
        <label>Meetup Image</label>
        <input
          ref={imageRef}
          placeholder="Enter Meetup image"
          type="text"
        ></input>
      </div>
      <div>
        <label>Meetup Address</label>
        <input
          ref={adressRef}
          placeholder="Enter Meetup adress"
          type="text"
        ></input>
      </div>
      <div>
        <label>Meetup Description</label>
        <input
          ref={descRef}
          placeholder="Enter Meetup description"
          type="text"
        ></input>
      </div>
      <div>
        <button onClick={handleSubmitMeetup}>Submit Meetup</button>
      </div>
    </div>
  );
}

export default NewMeetupFrom;
