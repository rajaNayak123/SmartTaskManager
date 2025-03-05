import React from 'react'
import Header from '../Others/Header.jsx'
import TaskListNum from '../Others/TaskListNum.jsx'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskListNum data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard