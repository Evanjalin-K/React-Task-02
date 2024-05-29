import React, { useState } from 'react';
import "./Card.css";

const Cards = ({ data, incrementButton, decrementButton, handleButtonClick }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { id, product, price1, price2, button, image } = data;

  const toggleButton = () => {
    if (button === "View Option") {
      console.log("View option clicked");
    } else if (button === "Add to cart") {
      if (!isAdded) {
        incrementButton();
      } else {
        decrementButton();
      }
      setIsAdded(!isAdded);
    } else {
      handleButtonClick(id);
    }
  };
  
  const renderPrice = () => {
    if ([2, 3, 5, 7].includes(id)) {
      return (
        <div>
          <div className="star-rating">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>
          <p>
            <del>${price1}</del> ${price2}
          </p>
        </div>
      );
    } else {
      return (
        <div className='priceData1'>
          <p>${price1} {price2 && `$${price2}`}</p>
        </div>
      );
    }
  };

  return (
    <div className='cardContainer container'>
      <div className="card">
        { [2, 3, 5, 7].includes(id) && (
          <div className="sale-text">
            Sale
          </div>
        )}
        <img src={image} className="cardImage card-img-top" alt={product} />
        <div className="card-body">
          <h5 className="card-title">{product}</h5>
          <div className="priceData card-text">
            {renderPrice()}
          </div>
          <div className='cardButton'>
            <button onClick={toggleButton} className="btn btn-light card-button" type="button">
              {isAdded ? "Remove from cart" : button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
