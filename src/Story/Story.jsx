import "./Story.css"


const Story = ({id, key, title, setStory}) => {

const handleClick = (event) => {
  console.log("id", id)
  console.log("di", {id, title})
  setStory({id, title})
}

  return (
      <div className="story-container" onClick={((event) => handleClick(event))}>
        <p>{title}</p>
      </div>
  )
}

export default Story