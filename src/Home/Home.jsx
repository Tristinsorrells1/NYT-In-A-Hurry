import { useEffect, useState } from "react"
import { getHomeStories } from "../APICalls/APICalls"
import Stories from "../Stories/Stories"
import Details from "../Details/Details"
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();
const [stories, setStories] = useState(undefined)
const [filteredStories, setFilteredStories] = useState(undefined)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [selectStory, setSelectStory] = useState(undefined)

useEffect(() => {
  if (!stories && !error) {
  getHomeStories()
  .then((res) => {
      if (res.status === "OK") {
        setStories(res.results)
        setFilteredStories(res.results)
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

const filterStories = () => {
  let filter = document.getElementById("filter")
  if (filter.value === "Filter By Category") {
    setFilteredStories(stories)
    return
  }
  let filteredStories = stories.filter((story) => story.section.toUpperCase() === filter.value.toUpperCase())
  setFilteredStories(filteredStories)
}

  return (
    <>
    <h2>The New York Times in a Hurry</h2>
    <p>See Only The Top Stories from Today</p>
    <select id="filter" onChange={(() => filterStories())}>
      <option>Filter By Category</option>
      <option>Arts</option>
      <option>Business</option>
      <option>Climate</option>
      <option>Crosswords</option>
      <option>Opinion</option>
      <option>Style</option>
      <option>Technology</option>
      <option>US</option>
      <opion>World</opion>
    </select>
      {stories && !selectStory && <Stories stories={filteredStories} setStory={setStory}/>}
      {selectStory && <Details story={selectStory} resetStory={resetStory}/>}
      {!error && filteredStories && !filteredStories.length && <p> No Results </p>}
    </>
  )
}

export default Home;