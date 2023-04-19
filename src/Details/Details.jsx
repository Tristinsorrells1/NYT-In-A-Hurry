const Details = ({ story, resetStory }) => {

  const handleClick = () => {
    resetStory()
  }
  return (
    <>
    <button onClick={(() => handleClick())}>Back</button>
    <h2>{story.story.title}</h2>
    <p>{story.story.abstract}</p>
    <p>{story.story.byline}</p>
    <a href={story.story.url}>Link to story</a>
    </>
  )
}

export default Details;