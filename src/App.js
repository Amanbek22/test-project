import './App.css';
import Header from "./components/header/Header"
import Card from "./components/card/Card"

function f(a, b) {
  return a + b;
}

f(2, 2);
f(2, 2);
f(2, 2);
f(2, 2);


function App() {
  return (
    <div className="App">
      <Header />
      {5 + 5}
      <div className='container mt-5'>
        <div className='row justify-content-between'>
          <Card
            title="Продаю Audi"
            price={5000}
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BMW_G11_IMG_2002.jpg/1200px-BMW_G11_IMG_2002.jpg"
          />

          <Card
            title="Продаю Audi"
            price={5000}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
