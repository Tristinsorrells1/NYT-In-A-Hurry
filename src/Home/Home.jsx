import { useEffect, useState } from "react"
import { getHomeStories } from "../APICalls/APICalls"
import Stories from "../Stories/Stories"
import Details from "../Details/Details"
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();
const [stories, setStories] = useState(undefined)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [selectStory, setSelectStory] = useState(undefined)

useEffect(() => {
  if (!stories && !error) {
  getHomeStories()
  .then((res) => {
      if (res.status === "OK") {
        setStories(res.results)
        setError(false)
      }
      else{
        setError(true)
      }
    })
  }
  console.log(stories)
}, [stories])

const setStory = (story) => {
  setSelectStory({story})
}

const resetStory = () => {
  setSelectStory(undefined)
}

  return (
    <>
      <h2>The New York Times in a Hurry</h2>
      {stories && !selectStory && <Stories stories={stories} setStory={setStory}/>}
      {selectStory && <Details story={selectStory} resetStory={resetStory}/>}
    </>
  )
}

export default Home;