import React, { useState } from 'react';
import Nav from './component/Nav';
import Cards from './component/Cards';
import Footer from './component/Footer';
import "./App.css";

const App = () => {

  const [count, setCount] = useState(0);

  const incrementButton = () => {
    setCount(count + 1);
  };

  const decrementButton = () => {
    setCount(count - 1);
  };

  const CardData = [
    {
      id: 1,
      product: "Casio G-Shock GA-2100-9A9ER Tone-on-Tone",
      price1: 40.00,
      price2: 80.00,
      button: "View Option",
      addedToCart: false,
      image: "https://i00.eu/img/606/1024x1024/6q7hblkt/228040.webp",

    },
    {
      id: 2,
      product: "Casio G-Shock Men's Thinner Carbon Mudmaster Watch",
      price1: 20.00,
      price2: 18.00,
      button: "Add to cart",
      addedToCart: false,
      image: "https://m.media-amazon.com/images/I/71MknQTKzbL._AC_SL1500_.jpg",

    },
    {
      id: 3,
      product: "ANALOG-DIGITAL GA-110 SERIES GA-110GB-1A Black Watch",
      price1: 50.00,
      price2: 24.00,
      button: "Add to cart",
      addedToCart: false,
      image: "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GA/GA1/GA-110GB-1A/assets/GA-110GB-1A_Seq1.png.transform/main-visual-pc/image.png",

    },
    {
      id: 4,
      product: "CASIO G-SHOCK G-STEEL GST-B400-1AER",
      price1: 40.00,
      button: "Add to cart",
      addedToCart: false,
      image: "https://www.irisimo.com/files/c/g-shock/CASIO-GST-B400-1AER-550x550_43097.webp",

    },
    {
      id: 5,
      product: "G-Shock Full Metal 'CasiOak' Connected SKU: GMB2100D-1A ",
      price1: 50.00,
      price2: 25.00,
      button: "Add to cart",
      addedToCart: false,
      image: "https://topperjewelers.com/cdn/shop/products/g-shock-full-metal-casioak-silver-topper_720x.png?v=1659046564",

    },
    {
      id: 6,
      product: "Casio G-Shock Analog-Digital Metallic Translucent-GMAS2100SK-4A",
      price1: 120.00,
      price2: 280.00,
      button: "View Option",
      addedToCart: false,
      image: "https://i.ebayimg.com/images/g/b~kAAOSwAgFjG3DJ/s-l1600.webp",
    },
    {
      id: 7,
      product: "CASIO G-SHOCK CLASSIC GA-2100SKE-7AER",
      price1: 20.00,
      price2: 18.00,
      button: "Add to cart",
      addedToCart: false,
      image: "https://fs3.deka.ua/photo/goods/popup/1/209693/209693_20210422_1654_2205_aab474ffce4e84b94b317ef655fc5c96e.png",
    },
    {
      id: 8,
      product: "CASIO G-SHOCK GMD-S5600BA-4JF Pink",
      price1: 40.00,
      button: "Add to cart",
      addedToCart: false,
      image: "https://djm-aaa1.kxcdn.com/resources/upload/products/61N6liwPTbL._AC_UL1500_.jpg",
    }
  ];


  const handleButtonClick = (id) => {
    const updatedData = CardData.map(item => {
      if (item.id === id) {
        if (!item.addedToCart) {
          incrementButton();
          return { ...item, addedToCart: true, button: "Remove from cart" };
        } else {
          decrementButton();
          return { ...item, addedToCart: false, button: "Add to cart" };
        }
      }
      return item;
    });

    return updatedData;
  };

  return (
    <div>
      <Nav count={count} />
      <div className='cards'>
        {CardData.map((data) => (
          <Cards
            key={data.id}
            data={data}
            incrementButton={incrementButton}
            decrementButton={decrementButton}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
      <div>\
      <Footer />

      </div>
    </div>
  );
}

export default App;
