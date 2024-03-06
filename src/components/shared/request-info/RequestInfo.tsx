import { useEffect, useState } from 'react';
import { moviesApi } from '@api/movies.api';

export const RequestInfo = () => {

  const [ info, setInfo ] = useState<unknown>();

  useEffect(() => {

    moviesApi.get('/auth/private')
      .then( resp => setInfo(resp.data) )
      .catch( () => setInfo('Error') );


  },[])


  return (
    <>
      <h2>Información</h2>
      <pre>
        {
          JSON.stringify(info, null, 2)
        }
      </pre>
    </>
  );
};