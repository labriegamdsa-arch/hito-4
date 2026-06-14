import { useEffect, useState } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  const getPizza = async () => {
    const response = await fetch('http://localhost:5000/api/pizzas/p001')
    const data = await response.json()
    setPizza(data)
  }

  useEffect(() => {
    getPizza()
  }, [])

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>
  }

  return (
    <main className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: '900px' }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={pizza.img}
              className="img-fluid rounded-start h-100"
              alt={`Pizza ${pizza.name}`}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title text-capitalize">
                Pizza {pizza.name}
              </h2>

              <p className="card-text">{pizza.desc}</p>

              <h5>Ingredientes:</h5>
              <ul>
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>🍕 {ingredient}</li>
                ))}
              </ul>

              <h3>
                Precio: ${pizza.price.toLocaleString('es-CL')}
              </h3>

              <button className="btn btn-dark mt-3">
                Añadir 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pizza 