import React, {useState} from 'react';
import CustomNotification from './CustomNotification'
import UserRecordTable from './UserRecordTable'

const UserDetails = ({users}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [idForMessage, setIdForMessage] = useState('0');
  const [usersList, setUsersList] = useState(users);
  
  const handleDismissAlert = (id) => {
    setShowMessage(false);
    
  };

  const handleUsersNotificationChanges = (id) =>{
    setShowMessage(true);
    setIdForMessage(id);
    usersList[id-1].notificationStatus = true;
    const newUsers = usersList;
    setUsersList(newUsers);
    
  };

  return (
    <div className="container-fluid">
      <h1>Members List</h1>
      {showMessage && <CustomNotification id={idForMessage} dismissAlert={handleDismissAlert}/>}
      <UserRecordTable users={usersList} sendCustomNotification = {handleUsersNotificationChanges}/>
     </div>);
}

export default UserDetails;