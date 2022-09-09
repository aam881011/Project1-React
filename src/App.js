import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Overview from './design-system/components/Overview';

function App() {
  return (
    <div className="App">
      <Overview icon={faUserGroup} title= "650 Participants">
          Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at,
          vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit. 
      </Overview>
      
    
      
    </div>
  );
}

export default App;
