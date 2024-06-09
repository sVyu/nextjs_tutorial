'use client';
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'Home',
// };

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMoives] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    );
    const json = await response.json();
    setMoives(json);
  };
  useEffect(() => {
    getMovies();
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1>Hello NextJS!</h1>
      <h1>{isLoading ? 'Loading...' : JSON.stringify(movies)}</h1>
    </div>
  );
}
