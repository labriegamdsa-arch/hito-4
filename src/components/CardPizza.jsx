const CardPizza = ({ name, price, ingredients, img, setView }) => {
  
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top pizza-img" alt={`Pizza ${name}`} />

      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
      </div>

      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item">
          <strong>Ingredientes:</strong>
        </li>
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="list-group-item">
               🍕 {ingredient}
          </li>
        ))}

        <li className="list-group-item text-center">
          <h5>Precio: ${price.toLocaleString('es-CL')}</h5>
        </li>
      </ul>

      <div className="card-body d-flex justify-content-between">
        <button className="btn btn-outline-dark" onClick={() => setView('pizza')}>
          Ver más 👀
        </button>
        <button className="btn btn-dark">Añadir 🛒</button>
      </div>
    </div>
  )
}

export default CardPizza