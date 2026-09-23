import React from 'react'
import SerchBar from '../components/SerchBar'
import Tabs from '../components/Tabs'
import ResultGreed from '../components/ResultGreed'
import { useSelector } from 'react-redux'

const Home = () => {
  const {query} = useSelector((store) => (store.search))
  return (
    <div>

        <SerchBar/>

        {query != '' ? <div> <Tabs/>
          <ResultGreed/>
          </div> : <div className='flex items-center justify-center'> 
            <h2 className='text-2xl text-gray-200 mt-[30vh]'> You can Search here for any Photos, Videos or Gifs You will find everything here.</h2> </div> }

    </div>
  )
}

export default Home