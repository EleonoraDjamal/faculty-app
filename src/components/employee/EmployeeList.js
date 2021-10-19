import React from 'react'
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = () => {
  return (
    <div>
      <h3>List of Employees</h3>

      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
    </div>
  )
}

export default EmployeeList;
