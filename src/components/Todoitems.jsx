// import React from 'react'
// import tick from '../assets/tick.png'
// import not_tick from '../assets/not_tick.png'
// import delete_icon from '../assets/delete.png'

// const Todoitems = ({text , id , isComplete ,remove , toggle , edit}) => {

//   const [isEditing, setIsEditing] = useState(false);
//     const [editedText, setEditedText] = useState(text);

//     const handleEdit = () => {
//         edit(id, editedText);
//         setIsEditing(false);
//     }

//   return (
//     <div className='flex items-center my-3 gap-2'>
//       <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
//         <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
//         <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
//             ${isComplete ? "line-through" : "" }`}>{text}</p>
//       </div>

//       <img onClick={()=>{remove(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer '/>
//     </div>
//   )
// }

// export default Todoitems
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
                    <button onClick={handleEdit} className='ml-2 bg-blue-500 text-white px-2 py-1 rounded'>Save</button>
                </div>
            ) : (
                <>
                    <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
                        <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
                        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                            {text}
                        </p>
                    </div>
                    <img onClick={() => setIsEditing(true)} src="https://static.vecteezy.com/system/resources/previews/000/425/359/original/edit-icon-vector-illustration.jpg" alt="Edit" className='w-3.5 cursor-pointer mr-2'/>
                    <img onClick={() => remove(id)} src={delete_icon} alt="Delete" className='w-3.5 cursor-pointer'/>
                </>
            )}
        </div>
    )
}

export default Todoitems
