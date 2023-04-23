import React, { Component } from "react";
import Card from "./Card";
import Table from "./Table";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          name: "HP Notebook",
          price: 999,
          available: 9,
          subjects: "laptap",
          img: "assets/1.jpg",
        },
        {
          id: 2,
          name: "HP Envy",
          price: 1099,
          available: 5,
          subjects: "laptap",
          img: "assets/2.jpg",
        },
        {
          id: 3,
          name: "Toshiba B77",
          price: 1299,
          available: 3,
          subjects: "laptap",
          img: "assets/3.jpg",
        },
      ],
      shoppingProducts: [],
    };

    this.addProductToCard = this.addProductToCard.bind(this);
    this.removeProductCartHandler = this.removeProductCartHandler.bind(this);
  }

  addProductToCard(productId) {
    let shoppingProduct = this.state.products.find((product) => {
      return product.id === productId;
    });

    if (shoppingProduct) {
      this.setState({
        shoppingProducts: [...this.state.shoppingProducts, shoppingProduct],
      });
    }
  }

  removeProductCartHandler(productId) {
    let newShoppingProduct = this.state.shoppingProducts.filter((product) => {
      return product.id !== productId;
    });

    this.setState({
      shoppingProducts: newShoppingProduct,
    });
  }

  render() {
    return (
      <>
        <section className="container">
          <div className="container py-5">
            <div className="row">
              {this.state.products.map((product) => (
                <Card
                  {...product}
                  key={product.id}
                  onAddProduct={this.addProductToCard}
                />
              ))}
            </div>
          </div>
          <Table
            shoppingProducts={this.state.shoppingProducts}
            onRemove={this.removeProductCartHandler}
          />
        </section>
      </>
    );
  }
}

export default ShoppingCart;
