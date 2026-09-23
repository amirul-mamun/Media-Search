import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard1 from '../components/CollectionCard1'
import { clearCollection } from '../redux/feature/collectionSlice'

const Collection = () => {
  const collection = useSelector((state => (state.collection.items)))

  const dispatch = useDispatch()
  const clearAll = () =>{ dispatch(clearCollection())
  }
  return (
    <div className='overflow-auto px-10 py-6'>
      {collection.length > 0 ?  <div className='flex justify-between mb-6'>
            <h2 className='text-2xl font-medium'>Your Collection</h2>
            <button className='px-3 py-2 bg-red-600 m-2 text-white active:scale-95 cursor-pointer rounded' 
             onClick={function(){clearAll()}}
            >Clear All</button>
        </div> : <h2 className='text-2xl text-center font-medium'>Your Collection</h2>
}

       <div className='flex flex-wrap justify-start gap-6' >
          {collection.map((item, idx) =>{
            return <div key={idx}>
                 <CollectionCard1 item ={item} />
            </div>
          })}
       </div>
    </div>
  )
}

export default Collection