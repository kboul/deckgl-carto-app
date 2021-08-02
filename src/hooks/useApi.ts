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

const baseUrl = 'https://public.carto.com:443/api/v2/sql?q=';

export default function useApi(sqlOperation: string): ApiReturnType {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const responseData: ResponseData = await axios.get(
          `${baseUrl}${sqlOperation}`
        );
        setData(responseData.data.rows);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [sqlOperation]);

  return { data, loading, error };
}
