import React from 'react'
import Header from '../Others/Header.jsx'
import TaskListNum from '../Others/TaskListNum.jsx'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TaskListNum/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard