export const getHomeStories = () => {
  let key = import.meta.env.VITE_KEY;
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`
  )
    .then((response) => {
        return response.json()
    })
    .catch((error) => {
      const errorMessage = `An error occurred: ${error.message}`;
      console.log(errorMessage);
      throw new Error(errorMessage);
    });
}