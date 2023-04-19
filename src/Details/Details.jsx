import { getHomeStories } from "../APICalls/APICalls"
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"

const Details = ( ) => {
const { id } = useParams()
const navigate = useNavigate();


const [stories, setStories] = useState(undefined)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [selectStory, setSelectStory] = useState(undefined)

useEffect(() => {
  if (!stories && !error) {
    setLoading(true)
  getHomeStories()
  .then((res) => {
    setLoading(false)
      if (res.status === "OK") {
        setStories(res.results)
        setSelectStory(res.results.filter((story) => story["short_url"].replace("https://nyti.ms/", "") === id)[0])
        setError(false)
      }
      else{
        setError(true)
      }
    })
  }
}, [stories])

  const handleClick = () => {
    navigate("/")
  }

  return (
    <>
    
    <button onClick={(() => handleClick())}>Back</button>
    {loading && <p>Loading ... </p>}
    {error && <p>We're sorry, an error occured.</p>}
    {!selectStory && !loading && <p>We're sorry, an error occured</p>}
    {selectStory && <section>
      <h2>{selectStory.title}</h2>
      <p>{selectStory.abstract}</p>
      <p>{selectStory.byline}</p>
      <a href={selectStory.url}>Link to story</a>
    </section>}
    </>
  )
}

export default Details;