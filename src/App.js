import CreativSpeakers from "./design-system/components/CreativSpeakers";
import SpeakersData from './design-system/components/CreativSpeakers/SpeakersData';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        {SpeakersData.map(item => {
          return(
            <CreativSpeakers name={item.name} img={item.img} alt={item.alt} Job={item.job} />
          )
        })}
      </div>
      
    </div>
  );
}

export default App;
