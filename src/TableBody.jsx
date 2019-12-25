import React from 'react';

const TableBody = ({users, sendCustomNotification}) => {

  return (<>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td><button id={user.id} onClick={e => sendCustomNotification(e.target.id)}>Send reminder to subscribe</button></td>
            <td>{user.notificationStatus ? 'Notification Sent' : 'false'}</td>
          </tr>
        ))}
      </tbody>
  </>);
}

export default TableBody;