import {useState} from 'react';
import data from './data';

function App() {
  const [count , setCount] = useState(0);
  const [text,setText] = useState([]);

  const handleSubmit= (e)=>{
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0){
      amount = 1;
    }
    if(count > 8){
      amount = 8;
    }

    setText(data.slice(0,amount));
  }
  return (
    <section className="flex flex-col items-center mt-16 w-full min-h-screen">
      <h3 className='font-bold text-3xl my-8'>Tired Of Boring Lorem Ipsum?</h3>
      <form className='text-xl flex text-slate-900 justify-center items-center' onSubmit={handleSubmit}>
        <label htmlFor='amount' className='mx-0 font-semibold '>Paragraphs :</label>
        <input type='number' name='amount' id='amount' className='px-0.5 py-1 w-12 m-3' value={count} onChange={(e) =>{setCount(e.target.value)}}/>
        <button className='bg-blue-300 text-center rounded-lg px-4 py-1'>GENERATE</button>
      </form>
      <article className='mx-auto w-1/2 text-center text-slate-700'>
      {text.map((item , index)=>{
          return <p className='my-8 font-semibold' key={index}>{item}</p>
        })}
        </article>
    </section>
  );
}

export default App;
