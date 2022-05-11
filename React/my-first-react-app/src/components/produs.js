import PropTypes from 'prop-types'

const Produs = (props) => {
  return (
    <div className="cutie" style={{backgroundColor: props.culoare}}>
      <div className="eticheta categorie">{`${props.categorie}`}</div>
      <div className="eticheta denumire">{`${props.denumire}`}</div>
      <div className="pret">{`${props.pret}`}</div>
    </div>
  )
}

Produs.propTypes = {
  categorie: PropTypes.string,
  denumire: PropTypes.string,
  pret: PropTypes.number,
  culoare: PropTypes.string
}

Produs.defaultProps = {
  categorie: 'fara categorie',
  denumire: 'fara denumire',
  pret: 0,
  culoare: 'white'
}


export default Produs;