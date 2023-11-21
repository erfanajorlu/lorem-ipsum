import {useState} from 'react';
import data from './data';

function App() {
  const [count , setCount] = useState(0);
  const [text,setText] = useState([]);

  return (
    <section className="">
      <h3>Tired Of Boring Lorem Ipsum?</h3>
      <form>
        <label htmlFor="lorem-input">Paragraphs :</label>
        <input type='number' value={count}/>
        <button>GENERATE</button>
        {text.map((item , index)=>{
          return <article key={index}>{item}</article>
        })}
      </form>
    </section>
  );
}

export default App;
