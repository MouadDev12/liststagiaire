import {useState, useEffect}from "react";
import "./Nav";
import "./components/liststagiaire";
import "./Addstagiaire";
import {link} from "react-router-dom";
import "./bootstrap.min.css";
import { stagiaire as initialData} from "../data";




export default function ListStagiaires() {
  const [stagiaires, setStagiaires] = useState (() => {
   const [search, setsearch] = useState("");

    const filter= stagiaires.filter((s) =>
    s.nom.toLowerCase().includes(search.toLowerCase())
  );

   const moyenne= stagiaires.map(s =>s.moyenne);
   const max = Math.max(...moyenne).toFixed(2);
   const min = Math.min(...moyenne).toFixed(2);
   const total = moyenne.reduce((a, b) => a + b, 0).toFixed(2);

    return(
      <div className="container mt-4">
        <h2 className="text-center mb-4"> Liste des stagiaires
        </h2>

      <div className="d-flex justify-content-between align-item-center">
        <input
        type="text"
        className="form-control"
        placeholder="Filtrer par nom..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      <link to="/add" className= "btn btn-primary">Ajouter</link>
      </div>

      <table className ="table table-hover mt-3">
        <thead className="table-success">
          <tr>
            <th>ID</th>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Ville</th>
            <th>Code Postal</th>
            <th>Moyenne</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filter.map((s)=> (
            <tr key={s.id} >
              <td>{s.id}</td>
              <td>{s.matricule}</td>
              <td>{s.nom}</td>
              <td>{s.ville}</td>
              <td>{s.codepostal}</td>
              <td>{s.moyenne}</td>
              <td>
                <button className="btn btn-primary">Editer</button>
                <button className="btn btn-danger">Supprimer</button>
              </td>
            </tr> 
          ))}
        </tbody>
      </table>

      <div className="alert alert-info mt-3">
        <p>
          Moyenne maximale : {max}
        </p>
        <p>
          Moyenne minimale : {min}
        </p>
        <p>
          Moyenne totale : {total}
        </p>
      </div>
      
      </div>
    )
   
  });
  };

