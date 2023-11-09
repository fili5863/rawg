import React, { useEffect, useState } from 'react';

function penis() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/gamelist');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('api req failed');
        }
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    data && console.log('data shit', data);
  }, [data]);

  return <div>GamesList</div>;
}

export default penis;
