import { useEffect, useState } from 'react';
import { authApi } from '@api/auth.api';

export const RequestInfo = () => {

  const [ info, setInfo ] = useState<unknown>();

  useEffect(() => {

    authApi.get('/auth/profile')
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