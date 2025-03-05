import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='flex mt-14 justify-between gap-4 '>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-sky-400'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-teal-600'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
       
    </div>
  )
}

export default TaskListNum