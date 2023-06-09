import { useEffect, useState } from "react"
import { getHomeStories } from "../APICalls/APICalls"
import Stories from "../Stories/Stories"
import "./Home.css"

const Home = () => {

const [stories, setStories] = useState(undefined)
const [filteredStories, setFilteredStories] = useState(undefined)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
  if (!stories && !error) {
    setLoading(true)
    getHomeStories()
    .then((res) => {
      setLoading(false)
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
}, [stories])


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
    <h2 className="title">The New York Times in a Hurry</h2>
    {loading && <p className="loading">Loading ...</p>}
    {error && <p className="error">We're Sorry - An Error Occured</p>}
    {stories && <div className="header">
      <p className="website-tagline">See Only The Top Stories from Today</p>
      <select className="filter-dropdown" id="filter" onChange={(() => filterStories())}>
        <option>Filter By Category</option>
        <option>Arts</option>
        <option>Business</option>
        <option>Climate</option>
        <option>Crosswords</option>
        <option>Health</option>
        <option>Opinion</option>
        <option>Sports</option>
        <option>Style</option>
        <option>Technology</option>
        <option>US</option>
        <option>World</option>
      </select>
    </div>}
    {!error && filteredStories && !filteredStories.length && <p className="no-results"> No Results </p>}
    {filteredStories && <Stories stories={filteredStories} />}
    </>
  )
}

export default Home;