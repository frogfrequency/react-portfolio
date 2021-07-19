import './App.css';
import { useState } from 'react';



import Header from './components/Header/Header';
import Button from './components/Button/Button'
import ColorPreview from './components/ColorPreview/ColorPreview';

import {colorSchemes} from "./color-schemes.js"




function App() {

  

  const [colorScheme, setColorScheme] = useState(
      colorSchemes[0]
    )
    
    const updateColorScheme = () => {
      let newId = (colorScheme.schemeId+1)%colorSchemes.length; // increasing the current schemeId by one
      setColorScheme(colorSchemes[newId]); // setting colorScheme(state) to next scheme

    }
    function updateIconColors() {
      setTimeout(changeSkipColor(colorScheme.color4),500);
      setTimeout(changeGearColor(colorScheme.color4), 699);
    }







//// start of state ,,,,,,,,,,,,,,,,,,,,,,
const [skipButtonColor, changeSkipColor] = useState(colorScheme.color4)


const handleSkipHover = () => {
    console.log('handleSkipHover')
    changeSkipColor(colorScheme.color3);
}
const handleSkipUnhover = () => {
  console.log('handleSkipUnhover')

    changeSkipColor(colorScheme.color4);
}

const [gearButtonColor, changeGearColor] = useState(colorScheme.color4)
    
const handleGearHover = () => {
    changeGearColor(colorScheme.color3);
}
const handleGearUnhover = () => {
    changeGearColor(colorScheme.color4);
}
//// end of state ''''''''''''''''''''''''''''


















  return (
    <div 
        className="App"
        style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
    >
      <Header text="hi there it works"
      colorScheme={colorScheme}
      updateColorScheme={updateColorScheme}
      gearButtonColor={gearButtonColor}
      skipButtonColor={skipButtonColor}
      handleSkipHover={handleSkipHover}
      handleSkipUnhover={handleSkipUnhover}
      handleGearHover={handleGearHover}
      handleGearUnhover={handleGearUnhover}
      />
      <ColorPreview colorScheme={colorScheme}/>


    </div>
  );
}




export default App;