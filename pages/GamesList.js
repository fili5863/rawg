import React, { useEffect, useState } from 'react';

function penis() {
  const [data, setData] = useState(null);
  const [searchString, setSearchString] = useState('');
  const [gameId, setGameId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/gamelist?search=${searchString}&gameId=${gameId}`);
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
  }, [searchString, gameId]);

  useEffect(() => {
    data && console.log('data shit', data);
  }, [data]);

  useEffect(() => {
    return console.log(gameId);
  }, [gameId]);

  return (
    <div>
      <input
        type="text"
        onChange={e => setSearchString(e.target.value)}
      />
      <button onClick={() => console.log(searchString)}>search</button>

      <div>
        {data &&
          gameId == 0 &&
          data?.results.map((game, index) => {
            return (
              <p
                onClick={() => setGameId(game.id)}
                key={game.id}
              >
                {game.name}
              </p>
            );
          })}
        {gameId != 0 && (
          <>
            <p>{data.name}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: data.description.replace(/\n/g, '<br />'),
              }}
            ></p>
          </>
        )}
      </div>
    </div>
  );
}

export default penis;
