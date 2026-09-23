import { useDispatch, useSelector } from "react-redux"
import{fetchGiphyGIFs, fetchPhoto, fetchVideos} from "../api/api"
import{setError, setLoading, setQuery,setResults} from '../redux/feature/seacrchSlice'
import { useEffect } from "react"
import ResultCard from "./ResultCard"


const ResultGreed = () => {
    const dispatch = useDispatch()
    const {query, activeTab, results, loading, error} = useSelector((store) => store.search)



    useEffect(function(){
        if (!query) return

        const getData = async() =>{
        dispatch(setLoading()) 
        try{
         let data =[]
         if(activeTab == 'photos'){
           let res = await fetchPhoto(query)
            data = res.results.map((item) => ({
                id : item.id,
                title : item.alt_description,
                type : 'photo',
                thumbnail : item.urls.small,
                src : item.urls.full,
                url : item.links.html
            }))

         }
         if(activeTab == 'videos'){
           let res = await fetchVideos(query)
            data = res.videos.map((item) => ({
                id : item.id,
                title : item.user?.name || "video",
                type : 'video',
                thumbnail : item.image,
                src:item.video_files[0].link, 
                url : item.url                
            }))

         }
         if(activeTab == 'gif'){
             let res = await fetchGiphyGIFs(query)
             data = res.data.map((item) => ({
                id : item.id,
                title : item.title,
                type : item.type,
                thumbnail :item.user?.description || "NO description",
                src :item.images.original.url ,
                url : item.url
            }))

         }
           dispatch(setResults(data))
         } catch (error){
            dispatch(setError(error.message))
         }
    }
    getData()
    },[query,activeTab,dispatch])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>


  return (
    <div className="flex flex-wrap justify-between overflow-auto gap-6 px-10">
        {results.map((item, idx) =>{
            return <div key={idx}>
                <ResultCard item={item}/>
            </div>
        })}
    </div>
  )
}

export default ResultGreed