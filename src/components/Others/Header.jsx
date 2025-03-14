import React from 'react'

const Header = () => {
  // console.log(data);
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','');
    window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-thin'>hello, <br /> <span className='text-3xl font-light'> hii raja 👋</span></h1>
        <button onClick={logOutUser} className='cursor-pointer bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header