import { useEffect, useState} from 'react'
import Header from './Header'
import CardPizza from './CardPizza'



const Home = ({ setView }) => {
  const [pizzas, setPizzas] = useState([])

  const getPizzas = async () => {
    const response = await fetch('http://localhost:5000/api/pizzas')

    const data = await response.json()
    setPizzas(data)
  }

  useEffect(() => {
    getPizzas()
  }, [])


  return (
    <>
      <Header />

      <main className="container my-5">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {pizzas.map((pizza) => (
            
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              setView={setView}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
