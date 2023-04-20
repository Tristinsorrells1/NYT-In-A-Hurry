import Story from "../Story/Story"
import "./Stories.css"

const Stories = ( { stories, setStory } ) => {
  let topStories = stories.map((story) => {
    return ( 
      <Story
        key={story.title}
        setStory={setStory}
        id={story["short_url"].replace("https://nyti.ms/", "")}
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