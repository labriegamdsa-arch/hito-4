import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validarLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Todos los campos son obligatorios')
      return
    }

    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres')
      return
    }

    alert('Login exitoso')
  }

  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">Login</h2>

      <form onSubmit={validarLogin} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </main>
  )
}

export default Login