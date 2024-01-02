import React, { useEffect, useState } from 'react'
import { apiUrl } from '../App';
import { toast } from 'react-toastify';
import Card from './Card';
function cards({courses,category}) {
    
    const getCourses = () =>{
        if(category === 'All'){
            const allCourse = []
            Object.values(courses).forEach((courseCategory) =>{
                courseCategory.forEach((course) =>{
                    allCourse.push(course)
                })
            })
            return allCourse;
        }else{
            return courses[category];
        }
        
    }
    return (
        <div className='w-full p-20 flex flex-wrap gap-3 justify-between'>
            {
                getCourses().map((course) =>{
                    return <Card key={course.id} course = {course} />
                })
            }
        </div>
    )
}

export default cards