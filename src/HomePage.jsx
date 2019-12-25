import React, {useState} from 'react';
import UserDetails from './UserDetails';
import {userList} from './Constants';

const HomePage = () => {
  const[clickMe, setClickMe] = useState(true);

  return (<>
   { clickMe ? <button type="button" className="btn btn-primary" onClick={e => setClickMe(false)}>Click me</button>
    : <UserDetails users={userList}/> }
  </>);
}

export default HomePage;