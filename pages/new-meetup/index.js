import NewMeetupForm from '../../components/meetups/NewMeetup';

function NewMeetup() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
