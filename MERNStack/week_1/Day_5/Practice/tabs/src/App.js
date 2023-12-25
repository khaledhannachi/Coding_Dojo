import Display from './components/Display';
import './App.css';


function App() {
const tabs = [{
  content: "Tab 1 content is showing here",
},
{
  content: "Tab 2 content is showing here",
},
{
  content: "Tab 3 content is showing here",
},
];


  return (
    <div className="App">
      <Display tabs={tabs}/>
    </div>
  );
}

export default App;
