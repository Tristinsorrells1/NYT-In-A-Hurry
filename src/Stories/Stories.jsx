import Story from "../Story/Story"
import "./Stories.css"

const Stories = ( { stories } ) => {
  let topStories = stories.map((story) => {
    return ( 
      <Story
        id={story.uri}
        key={story.uri}
        title={story.title}
      />
    )
  })

  return (
    <section className="stories-section">
      {topStories}
    </section>
  )
}

export default Stories