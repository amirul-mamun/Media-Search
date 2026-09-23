import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/feature/seacrchSlice'

const Tabs = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>(state.search.activeTab))
    const tabs = ['photos', 'videos', 'gif']
  return (
    <div className='flex gap-10 p-10'>
       {tabs.map(function(elem, idx){
        return <button key={idx} className={`${ activeTab == elem ? 'bg-green-600' : 'bg-gray-600'} px-4 py-2  rounded uppercase cursor-pointer active:scale-95`}
        onClick={()=>{
            dispatch(setActiveTab(elem))
        }}
        >{elem}</button>
       })}
    </div>
  )
}

export default Tabs