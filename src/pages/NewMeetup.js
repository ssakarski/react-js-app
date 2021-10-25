import { useHistory} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
    const history = useHistory();
    function addMeetupHandler(meetupData){
        fetch('https://react-getting-started-cc537-default-rtdb.firebaseio.com/meetups.json',{
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() => {
            history.replace('/')
        });
    }
    return <section>
        <h1>Add new Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupsPage;