import "./Story.css"
import { NavLink, useNavigate } from 'react-router-dom';


const Story = ({id, title, byline, abstract, url, section, uri}) => {
  const navigate = useNavigate();


  return (
      <div className="story-container"  onClick={(() => navigate(`/${id}`))} key={id}>
        <p className="article-title">{title}</p>
        <p className="section-tag">{section}</p>
      </div>
  )
}

export default Story