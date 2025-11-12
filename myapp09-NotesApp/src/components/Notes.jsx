import React from 'react'

const Notes = ({ notes , setNotes}) => {
    const deleteNote = (idx) => {
        let copyTask = [...notes];
        copyTask.splice(idx,1);
        setNotes(copyTask);
    }

    return (
        <>
            <div className=' p-10'>
                <h1 className='text-4xl font-bold'>Recent Notes</h1>
                <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
                    {notes.map(function (elem, idx) {
                        return (
                            <div className="h-52 w-40 rounded-2xl bg-white text-black p-3 flex 
                            justify-between flex-col" key={idx} >
                                <h2 className='font-bold size-3 mb-5 text-2xl  ' >{elem.title}</h2>
                                <h4 className='text-gray-600 leading-tight font-semibold' >{elem.description}</h4>
                                <button className='w-full p-1 rounded bg-red-400 text-xs font-semibold
                                cursor-pointer active:scale-98'
                                    onClick={()=>{
                                        deleteNote(idx)
                                    }} >Delete 
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes
