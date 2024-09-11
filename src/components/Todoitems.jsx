import React, { useState } from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({text, id, isComplete, remove, toggle, edit}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleEdit = () => {
        edit(id, editedText);
        setIsEditing(false);
    }

    return (
        <div className='flex items-center my-3 gap-2'>
            {isEditing ? (
                <div className='flex flex-1 items-center'>
                    <input 
                        type="text" 
                        value={editedText} 
                        onChange={(e) => setEditedText(e.target.value)}
                        className='flex-1 bg-gray-100 rounded px-2 py-1'
                    />
                    <button onClick={handleEdit} className='ml-2 bg-orange-500 text-white px-2 py-1 rounded'>Save</button>
                </div>
            ) : (
                <>
                    <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
                        <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
                        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                            {text}
                        </p>
                    </div>
                    <img onClick={() => setIsEditing(true)} src="https://static.vecteezy.com/system/resources/previews/000/425/359/original/edit-icon-vector-illustration.jpg" alt="Edit" className='w-6 cursor-pointer font-bold mr-2'/>
                    <img onClick={() => remove(id)} src={delete_icon} alt="Delete" className='w-5 cursor-pointer'/>
                </>
            )}
        </div>
    )
}

export default Todoitems

// import React, { useState } from 'react'
// import tick from '../assets/tick.png'
// import not_tick from '../assets/not_tick.png'
// import delete_icon from '../assets/delete.png'

// const Todoitems = ({ text, id, isComplete, scheduledTime, remove, toggle, edit, schedule }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedText, setEditedText] = useState(text);
//   const [isScheduling, setIsScheduling] = useState(false);

//   const handleEdit = () => {
//     edit(id, editedText);
//     setIsEditing(false);
//   }

//   const handleSchedule = (e) => {
//     const time = e.target.value;
//     schedule(id, time);
//     setIsScheduling(false);
//   }

//   return (
//     <div className='flex items-center my-3 gap-2'>
//       {isEditing ? (
//         <div className='flex flex-1 items-center'>
//           <input
//             type="text"
//             value={editedText}
//             onChange={(e) => setEditedText(e.target.value)}
//             className='flex-1 bg-gray-100 rounded px-2 py-1'
//           />
//           <button onClick={handleEdit} className='ml-2 bg-orange-500 text-white px-2 py-1 rounded'>Save</button>
//         </div>
//       ) : (
//         <>
//           <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
//             <img src={isComplete ? tick : not_tick} alt="" className='w-7' />
//             <div className='ml-4'>
//               <p className={`text-slate-700 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
//                 {text}
//               </p>
//               {scheduledTime && (
//                 <p className='text-xs text-gray-500'>Scheduled: {scheduledTime}</p>
//               )}
//             </div>
//           </div>
//           {isScheduling ? (
//             <input
//               type="datetime-local"
//               onChange={handleSchedule}
//               className='bg-gray-100 rounded px-2 py-1 text-sm'
//             />
//           ) : (
//             <img onClick={() => setIsScheduling(true)} src="https://static.vecteezy.com/system/resources/previews/003/738/373/original/time-schedule-icon-free-vector.jpg" alt="Schedule" className='w-5 cursor-pointer mr-2 '/>
//           )}
//           <img onClick={() => setIsEditing(true)} src="https://static.vecteezy.com/system/resources/previews/000/425/359/original/edit-icon-vector-illustration.jpg" alt="Edit" className='w-5 cursor-pointer mr-2' />
//           <img onClick={() => remove(id)} src={delete_icon} alt="Delete" className='w-4 cursor-pointer' />
//         </>
//       )}
//     </div>
//   )
// }

// export default Todoitems
