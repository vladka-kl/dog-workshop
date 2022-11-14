import useFetch from "../../hooks/use-fetch";
import { Link } from "react-router-dom";

export default function Cats() {
  const breedsUrl = "https://dog.ceo/api/breeds/list/all";
  const [breedList, breedsListErr, breedsListLoading] = useFetch(breedsUrl);

  if (breedsListLoading || !breedList.message) return <div> loading</div>;
  if (breedsListErr) return <div>error</div>;

  const filteredBreeds = Object.keys(breedList.message);

  return (
    <div>
      {filteredBreeds.map((e, i) => (
        <Link key={i} to={`/dogs/${e}`}>
          {e}{" "}
        </Link>
      ))}
    </div>
  );
}
