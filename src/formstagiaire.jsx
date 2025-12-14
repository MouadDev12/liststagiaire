import {useState, useEffect} from "react";
import {useNavigate, useParms} from "react-router-dom";


export default form() {
 const navigate= useNavigate();
 const {id} = useParms();

 const [stagiaires, setStagiaires] = useState(() => {
  const [search, setsearch] = useState("");

    const filter= stagiaires.filter((s) =>
    s.nom.toLowerCase().includes(search.toLowerCase())
  );
  
 })
}
