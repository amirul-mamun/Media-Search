import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/feature/collectionSlice'

const CollectionCard1 = ({item}) => {
    const dispatch = useDispatch()
    const deletCollection = (item) =>{
          dispatch(removeCollection(item.id))
          dispatch(removeToast())
          
    }

   return (
    <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
        <a target='_blank' href={item.url}>
          {item.type == "photo" ? <img className='h-full w-full object-center object-cover' src= {item.src} alt="" /> : '' }
          {item.type == "video" ? <video className='h-full w-full object-center object-cover' autoPlay loop muted src= {item.src} alt="" /> : '' }
          {item.type == "gif" ? <img className='h-full w-full object-center object-cover' src= {item.src} alt="" /> : '' }
        </a>

        <div id='bottom' className='text-white px-4 py-10 h-[35%] w-full absolute gap-3 bottom-0 flex justify-between items-start'>
          <h2 className='text-lg font-semibold h-14 overflow-hidden capitalize'>{item.title}</h2>
          <button onClick={function(){
            deletCollection(item)
          }}
           className='bg-indigo-800 rounded py-2 px-3 text-sm active:scale-95 cursor-pointer font-semibold'>Remove</button>
        </div>
    </div>
  )
}


export default CollectionCard1