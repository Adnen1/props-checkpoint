import Element from './profile/profile'
import ProfilePhoto from './components/ProfilePhoto.jpg'

function App() {

  const style={ color: "grey", textAlign: "center", backgroundColor: "black", height:"1000px"}
  return (
    <div style={style}>
      <img src={ProfilePhoto} alt="jamel"/>
    <Element fullName='Adnen Sfar Falfoul'bio='love and peace'profession='Student'/>
  
  
    
    </div>
  );
}

export default App;
