import './App.css';
import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"

function App() {

  const carsArray = [
    {
      title: "Продаю Audi", 
      price: 5000, 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus modi deleniti atque dolore rerum.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BMW_G11_IMG_2002.jpg/1200px-BMW_G11_IMG_2002.jpg"
    },
    {
      title: "Продаю BMW", 
      price: 4000, 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus modi deleniti atque dolore rerum.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BMW_G11_IMG_2002.jpg/1200px-BMW_G11_IMG_2002.jpg"
    },
    {
      title: "Продаю Honda", 
      price: 8000, 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus modi deleniti atque dolore rerum.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BMW_G11_IMG_2002.jpg/1200px-BMW_G11_IMG_2002.jpg"
    },
  ]
  asadasd

  return (
    <div className="App">
      <Header />
      <div className='container mt-5'>
        <div className='row justify-content-between'>
          {
            carsArray.map((item) => <Card 
              title={item.title} 
              price={item.price}
              imgUrl={item.img}
              description={item.description}
            />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
