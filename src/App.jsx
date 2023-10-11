import { useState } from 'react'

function App() {
  const [lyrics, setLyrics] = useState('');
  const [color, setColor] = useState('');
  const [list, setList] = useState([]);
  const changer = (newColor) => {
    if (lyrics) {
      const newItem = {
        color: color,
        lyrics: lyrics
      }
      setList(prev => [...prev, newItem])
      setLyrics("");
    }
    setColor(newColor);
  }

  return (
    <div className="Content">
      <h1>Complete the lyrics</h1>
      <div className="singers">
        <button
          onClick={() => changer("purple")}
        >First Singer
        </button>
        <button
          onClick={() => changer("greenyellow")}
        >Second Singer</button>
        <button
          onClick={() => changer("cyan")}
        >Third Singer</button>
        <button
          onClick={() => changer("pink")}
        >Fourth Singer</button>
      </div>
      {color && <input
        type="text"
        value={lyrics}
        onChange={e => setLyrics(e.target.value)}
      />}
      <div className="container">
        {list.map((item) => (<div className="lyrics" style={{ backgroundColor: item.color }}>
          {item.lyrics}
        </div>))}
        {lyrics && <div className="lyrics" style={{ backgroundColor: color }}>
          {lyrics}
        </div>}
      </div>
    </div>
  )
}

export default App