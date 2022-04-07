import MeetupList from "../components/meetups/MeetupList";
import { useState,useEffect } from "react";



   function AllMeetupPage(){
    const [isLoading,setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] =useState([]);

    useEffect(()=>{
      // setIsLoading(true)
      fetch(
        'https://my-react-16689-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
      ).then((response) => {
          return response.json();
      }).then((data)=>{
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id:key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
    },[]);

  if (isLoading) {
    return (
      <section>
      <p style={{textAlign: "center"}}>Loading.....</p>
    </section>
    );
  }

    return (
        <section>
        <h1>ALl Meetup</h1>
        <MeetupList i={loadedMeetups}/>
    </section>
    
    )
}
export default AllMeetupPage;