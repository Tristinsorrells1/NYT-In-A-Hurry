import "./Story.css"

const Story = ({id, key, title}) => {
  return (
    <div className="story-container">
      <p>{title}</p>
    </div>
  )
}

export default Story