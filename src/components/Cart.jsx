import { useState } from 'react'
import { pizzaCart } from '../Pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const aumentar = (id) => {
    const nuevoCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    )

    setCart(nuevoCart)
  }

  const disminuir = (id) => {
    const nuevoCart = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0)

    setCart(nuevoCart)
  }

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  )

  return (
    <main className="container my-5" style={{ maxWidth: '700px' }}>
      <h4 className="mb-4">Detalles del pedido:</h4>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <div className="d-flex align-items-center gap-3">
            <img
              src={pizza.img}
              alt={pizza.name}
              width="70"
              height="50"
              style={{ objectFit: 'cover' }}
            />

            <strong className="text-capitalize">{pizza.name}</strong>
          </div>

          <div className="d-flex align-items-center gap-3">
            <strong>${pizza.price.toLocaleString('es-CL')}</strong>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => disminuir(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => aumentar(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3 className="mt-4">
        Total: ${total.toLocaleString('es-CL')}
      </h3>

      <button className="btn btn-dark mt-3">
        Pagar
      </button>
    </main>
  )
}

export default Cart