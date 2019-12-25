import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const UserRecordTable = ({users, sendCustomNotification}) => {
    
  return (<>
      <table className="table table-dark">
        <TableHeader/>
        <TableBody users={users} sendCustomNotification={sendCustomNotification}/>
      </table>
  </>);
}

export default UserRecordTable;