import { useState } from "react";

function App() {
  //STATE
  const [compteur, setCompteur] = useState(1); //useState permet de definire et initialiser un state

  //COMPORTEMENTS

  const handleClick = () => {
    setCompteur(compteur + 1);
    //setCompteur modifi la val du state et rerender
  };
  //AFFICHAGE
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>incremente</button>
    </div>
  );
  //le comportement handleClick est branché à l'élément "button" via l'événement "onClick"
}
export default App;
