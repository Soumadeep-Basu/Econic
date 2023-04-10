import React, { useState, useEffect } from 'react';

function RandomPoem() {
  const [poem, setPoem] = useState('');

  useEffect(() => {
    fetch('https://poetrydb.org/random/1')
      .then(response => response.json())
      .then(data => {
        const poemData = data[0];
        const poemText = poemData.lines.join('\n');
        setPoem(poemText);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h3>Here is your poem for the Day !</h3>
      <pre>{poem}</pre>
    </div>
  );
}

export default RandomPoem;
