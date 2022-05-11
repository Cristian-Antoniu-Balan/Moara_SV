import Produs from "./produs"

const Exercitiul1 = () => {
  return (
  <div className="exercitiu">
    Exercitiul 1
    <div className="d-flex">
      <Produs categorie="alimente" denumire="portocale" pret={5.99} culoare="orange"/>
      <Produs/>
      <Produs categorie="bauturi" denumire="apa" pret={1} culoare="transparent"/>
      <Produs categorie="expirate" culoare="green"/>
    </div>
  </div>)
}

export default Exercitiul1;