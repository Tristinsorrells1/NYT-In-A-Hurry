import "./Story.css"


const Story = ({id, key, title, setStory, byline, abstract, url, section}) => {

const handleClick = (event) => {
  setStory({id, title, key, byline, abstract, url, section })
}

  return (
      <div className="story-container" onClick={((event) => handleClick(event))}>
        <p className="article-title">{title}</p>
        <p className="section-tag">{section}</p>
      </div>
  )
}

export default Story