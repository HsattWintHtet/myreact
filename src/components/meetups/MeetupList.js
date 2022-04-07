import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
    return <ul className={classes.list}>
        {props.i.map(i =>(
            <MeetupItem 
                key={i.id}
                id={i.id}
                image={i.image}
                title={i.title}
                address={i.address}
                description={i.description}
            />
        ))}
    </ul>
}
export default MeetupList;