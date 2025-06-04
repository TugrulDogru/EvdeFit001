import React, { useState, useEffect } from 'react';

function App() {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/exercises.json')
      .then(res => res.json())
      .then(data => setExercises(data))
      .catch(e => console.error('JSON okunamadı', e));
  }, []);

  const filtered = exercises.filter(e =>
    e.kasGrubu.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{padding: '20px'}}>
      <h1>EvdeFit Egzersizler</h1>
      <input
        placeholder="Kas grubu ara (örnek: göğüs)"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{padding: '10px', fontSize: '16px', width: '300px'}}
      />
      <ul>
        {filtered.map(e => (
          <li key={e.id} style={{marginBottom: '20px'}}>
            <h3>{e.ad}</h3>
            <p>{e.aciklama}</p>
            <p><b>Set/tekrar/dinlenme:</b> {e.setTekrarDinlenme}</p>
            {e.ytLink && (
              <p>
                <a href={e.ytLink} target="_blank" rel="noreferrer">
                  YouTube Videosu
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
