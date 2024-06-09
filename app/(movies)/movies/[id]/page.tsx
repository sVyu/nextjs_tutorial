type props = {
  params: { id: string };
};

export default function MovieDetail({ params: { id } }: props) {
  return <h1>Movie {id}</h1>;
}
