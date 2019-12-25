import React from 'react';

const TableHeader = () => {
  return (<>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Membership Status</th>
            <th scope="col">Notification Status</th>
          </tr>
        </thead>
  </>);
}

export default TableHeader;