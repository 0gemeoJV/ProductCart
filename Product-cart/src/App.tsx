import './App.css'
import './Responsive.css'
import data from './data.json'
import Cards from './components/Cards'


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
      <section className='your-cart'>
          <h1>Your Cart(0)</h1>
          <div className='added-items'>
            <p>Your added items will appear here</p>
          </div>
      </section>
    </main>
  )
}

export default App
