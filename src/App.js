import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  const counterNames = [
    { id: 0, name: 'Counter 1'}, 
    { id: 1, name: 'Counter 2'}, 
    { id: 2, name: 'Counter 3'}, 
    { id: 3, name: 'Counter 4'}, 
  ]

  return (
    <>
      <Form />
      {/* {
        counterNames.map(
          counter => <Counter key={counter.id}  name={counter.name}/>
        )
      } */}
    </>
  );
}

export default App;
