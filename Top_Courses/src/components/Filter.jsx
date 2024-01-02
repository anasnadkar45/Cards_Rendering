import React from 'react'

function Filter({filterData, category, setCategory}) {
    function filterHandler(title){
        setCategory(title)
    }

  return (
    <div className='space-x-5 mt-4 text-center'>
        {
            filterData.map((data) =>{
                return <button key={data.id} 
                className={`border border-b-indigo-700 border-b-2 
                ${category === data.title ? 'border-white' : 'border-transparent'}
                }`}
                onClick={()=>filterHandler(data.title)}>{data.title}</button>
            })
        }
    </div>
  )
}

export default Filter