import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';



export default function Notification() {
    return (
	    <div className="Notifications">
	    <button
	style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", fontSize: "15px", position: "absolute", aria-label="Close"
		 onClick={console.log("Close button has been clicked")}
		 >
		 <img src={closeIcon} alt="closeIcon" width="10px" />
		 </button>
		 <p>Here is the list of notifications</p>
		 <ul>
		 <li data="default">New course available</li>
		 <li data="urgent">New resume available</li>
		 <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
		 </ul>
		 </div>
	       );
	      }
