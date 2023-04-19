import { useEffect, useState } from "react"
import { getHomeStories } from "../APICalls/APICalls"
import Stories from "../Stories/Stories"

const Home = () => {
const [stories, setStories] = useState(undefined)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

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

  return (
    <>
      <h2>The New York Times in a Hurry</h2>
      {stories && <Stories stories={stories}/>}
    </>
  )
}

export default Home;