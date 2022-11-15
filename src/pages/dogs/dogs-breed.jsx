import useFetch from "../../hooks/use-fetch";
import useParams from "react-router-dom";

export default function DogsBreedsPage() {
  const selectedBreedsUrl = `https://dog.ceo/api/breed/${id}/images`;
  const [selectedBreed, selectedBreedErr, selectedBreedLoading] =
    useFetch(selectedBreedsUrl);

  if (selectedBreedLoading || !selectedBreed.message)
    return <div> loading</div>;
  if (selectedBreedErr) return <div>error</div>;

  return (
    <div>
      <img src={selectedBreed.message[0]} alt="" />
    </div>
  );
}
