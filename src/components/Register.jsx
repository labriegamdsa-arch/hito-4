import {useState} from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const validarFormulario = (e) => {
        e.preventDefault()


 if (!email|| !password || !confirmPassword) {
            alert('Por favor, complete todos los campos')
            return
 }

 if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres')
            return
}

if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden')
    return
}

alert('Registro exitoso!')
    
}

    return (

       <main className='register my-5'>
       <h2 className='text-center mb-4'>Register</h2>

       <form onSubmit={validarFormulario} className='mx-auto' style={{maxWidth: '500px'}}>
        <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input 
            type='email' 
            className='form-control'
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

          <div className="mb-3">
          <label className="form-label">Confirm password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>


    <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </main>
)
}

export default Register
