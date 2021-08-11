import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type='text' required id='title' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5'></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>
        </Card>

    )

}
export default NewMeetupForm;