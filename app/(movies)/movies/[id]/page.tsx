import { API_URL } from '../../../(home)/page';

type props = {
  params: { id: string };
};

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({ params: { id } }: props) {
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return <h1>{movie.title}</h1>;
}
