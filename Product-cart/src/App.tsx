import './App.css'
import './Responsive.css'
import data from './data.json'
import Cards from './components/Cards'
import YourCart from './components/YourCart'


function App() {

  return (
    <main className="App">
      <section className='desserts-sections'>
        <h1>Desserts</h1>
        <div className='desserts-grids'>
          {data.map((dessert, index) => (
            <Cards
              key={index}
              dessert={dessert}
              index={index}
            />
          ))}
        </div>
      </section>
      <section className='your-cart-section'>
          <h1>Your Cart(0)</h1>
          <YourCart />
      </section>
    </main>
  )
}

export default App
