import Header from './components/Header'
import Form from './components/Form'
import Listing from './components/Listing'

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form />
        <Listing />
      </div>
    </div>
  )
}

export default App
