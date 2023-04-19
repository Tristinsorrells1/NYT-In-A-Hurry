import Story from "../Story/Story"
import "./Stories.css"

const Stories = ( { stories, setStory } ) => {


  let topStories = stories.map((story) => {
    return ( 
      <Story
        setStory={setStory}
        id={story.uri}
        key={story.uri}
        title={story.title}
        byline={story.byline}
        abstract={story.abstract}
        url={story.url}
        section={story.section.charAt(0).toUpperCase() + story.section.slice(1)}
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