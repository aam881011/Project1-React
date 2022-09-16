import CreativeSpeakers from "./design-system/components/CreativeSpeakers";
import speakersData from './design-system/components/CreativeSpeakers/SpeakersData';
import "./design-system/main.css"
import OurPrograms from './design-system/components/OurPrograms/OurPrograms';
import ourProgramsData from "./design-system/components/OurPrograms/OurProgramsData";
import OurSponsors from "./design-system/components/OurSponsors/OurSponsors";
import ourSponsors from './design-system/components/OurSponsors/OurSponsorsData';
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
      <div>
        {ourProgramsData.map(item => {
          return(
            <OurPrograms img={item.img} title={item.title} 
            time={item.time} alt={item.alt} description={item.description} 
            name={item.name} roomNumber={item.roomNumber} key={item.id} />
            )
          })}
      </div>
      <div style={{display: 'flex', gap: "1rem"}}>
          {ourSponsors.map(item => {
            return(
              <OurSponsors src={item.src} alt={item.alt} key={item.id} />
            )
          })}
      </div>
    </div>
  );
}

export default App;
