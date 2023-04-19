import "./Story.css"


const Story = ({id, key, title, setStory, byline, abstract, url}) => {

const handleClick = (event) => {
  console.log("id", id)
  console.log("di", {id, title})
  setStory({id, title, key, byline, abstract, url })
}

  return (
      <div className="story-container" onClick={((event) => handleClick(event))}>
        <p>{title}</p>
      </div>
  )
}

export default Story