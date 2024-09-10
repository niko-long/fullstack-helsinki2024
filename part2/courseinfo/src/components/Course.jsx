import React from 'react'
const Course = ({ courses }) => {
    return (
       <div>
         {courses.map(course => {
           const totalExercises = course.parts.reduce((sum,part)=>sum+part.exercises, 0);
           return (
             <div key={course.id}>
               <h1>
                 {course.name}
               </h1>
               <ul>
               {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
               </ul>
               <strong>total of {totalExercises} exercises</strong>
             </div>
           );
         })}
       </div>
     );
   };
export default Course
   