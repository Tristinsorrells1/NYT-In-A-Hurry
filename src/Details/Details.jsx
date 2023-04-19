import { getHomeStories } from "../APICalls/APICalls"
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import "./Details.css"

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
    <section className="details-section">
      <button className="back-button" onClick={(() => handleClick())}>Back</button>
      {loading && <p className="loading">Loading ... </p>}
      {error && <p className="error">We're Sorry, an Error Occured.</p>}
      {selectStory && <div className="title-and-author">
        <h2 className="details-title">{selectStory.title}</h2>
        <div className="article-details">
          <p className="details-byline" >{selectStory.byline}</p>
          <p className="details-byline" >{new Date(selectStory["published_date"]).toLocaleDateString('en-us')}</p>
          {/* <p className="details-byline" >{selectStory.section.charAt(0).toUpperCase() + selectStory.section.slice(1)}</p> */}
        </div>
      </div>}
      {selectStory && <p className="abstract">{selectStory.abstract} <a className="link" href={selectStory.url}> Read the Full Story</a></p>}
      {selectStory && 
        <div className="tag-container">
          {selectStory["des_facet"].map((tag) => 
            <p key={tag} className="tag">{tag}</p>
          )}
        </div>}
    </section>
  )
}

export default Details;