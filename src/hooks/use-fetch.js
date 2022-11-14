import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [resp, setResp] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      axios
        .get(url)
        .then((res) => {
          if (res.status === 200) {
            setResp(res.data);
          } else {
            setResp(res);
          }
        })
        .catch((e) => setError(e))
        .finally(setLoading(false));
    }
    getData();
  }, [url]);
  return [resp, error, loading];
}
