import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../Redux/features/seachSlice';

const Tabs = () => {
    const tabs = ['Photos', 'Videos', 'GIF']
    const disPatch = useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab)
    return (
        <div className='flex gap-10 p-10 ' >
            {
                tabs.map(function (elem, idx) {
                    return <button
                        className={`${(activeTab === elem) ? 'active:scale-95 cursor-pointer bg-blue-500 px-4 py-2' : 'active:scale-95 cursor-pointer bg-gray-500 px-4 py-2'}`}
                        key={idx}
                        onClick={() => disPatch(setActiveTab(elem))}
                    >{elem}</button>
                })
            }
        </div>
    )
}

export default Tabs
