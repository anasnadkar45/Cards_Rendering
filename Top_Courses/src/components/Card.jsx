import React from 'react'

function Card({course}) {
  console.log(course.title)
  const desc = course.description.substring(0, 250);
  return (
    <div className=''>
      <div className='w-[300px] h-[400px] rounded-md bg-slate-700 p-3 '>
        <img src={course.image.url} className='w-[300px] h-fit' />
        <div>
          <p className='text-[20px] font-bold text-yellow-300'>{course.title}</p>
          <p className='text-gray-400'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Card