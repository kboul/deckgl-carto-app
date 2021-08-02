import { useEffect, useState } from 'react';
import axios from 'axios';

interface ApiReturnType {
  data: any[];
  loading: boolean;
  error: boolean;
}

interface ResponseData {
  data: { rows: Array<any> };
}

export default function useApi(endpoint: string): ApiReturnType {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const responseData: ResponseData = await axios.get(endpoint);
        setData(responseData.data.rows);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
