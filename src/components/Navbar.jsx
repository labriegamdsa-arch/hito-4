
const Navbar = ({ setView }) => {

  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <span className="navbar-brand">Pizzería Mamma Mia!</span>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-light" onClick={() => setView('home')}>
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light">🔓 Profile</button>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light" onClick={() => setView('login')}>
                🔐 Login
              </button>
              <button className="btn btn-outline-light" onClick={() => setView('register')}>
                🔐 Register</button>
            </>
          )}

          <button className="btn btn-outline-info" onClick={() => setView('cart')}>
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar