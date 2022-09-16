import CreativeSpeakers from "./design-system/components/CreativeSpeakers";
import speakersData from './design-system/components/CreativeSpeakers/SpeakersData';
import "./design-system/main.css"
function App() {
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        {speakersData.map(item => {
          return(
            <CreativeSpeakers name={item.name} img={item.img} alt={item.alt} Job={item.job} />
          )
        })}
      </div>
      
    </div>
  );
}

export default App;
