import  { useState } from 'react'
import { setQuery } from '../redux/feature/seacrchSlice'
import {useDispatch} from 'react-redux'

const SerchBar = () => {
    const [text, settext] = useState('')
    
    const dispatch = useDispatch()
    function submitHandler(e){
        console.log('from subitmed')
        e.preventDefault()
        dispatch(setQuery(text))

    }
  return (
    <div>
        <form onSubmit={(e) =>{
            submitHandler(e)
        }}
        className='bg-cyan-950 p-9 flex gap-5'
        >
            <input type="text" value={text} required placeholder='Search all Photos, Videos & Gifs'
            onChange={(e) =>{
                settext(e.target.value)
                
            }}
            className='border-2 w-full rounded outline-none px-6 py-3'
            />
            <button className='active:scale-95 cursor-pointer border-2 rounded outline-none px-6 py-3' > Search</button>
        </form>
    </div>
  )
}

export default SerchBar