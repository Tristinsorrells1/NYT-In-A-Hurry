import { useEffect, useState } from "react"
import { getHomeStories } from "../APICalls/APICalls"

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
}, [stories])

console.log(stories)
  return (
    <h2>Home</h2>
  )
}

export default Home;