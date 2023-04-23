import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick(id) {
    this.props.onAddProduct(id);
  }
  render() {
    let { id, img, subjects, price, name, available } = this.props;
    return (
      <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">Today's Combo Offer</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              Style="width: 35px; height: 35px;"
            >
              <p className="text-white mb-0 small">x4</p>
            </div>
          </div>
          <img src={img} className="card-img-top" alt="Laptop" />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small">
                <a href="#!" className="text-muted">
                  {subjects}
                </a>
              </p>
              <p className="small text-danger">
                <s>${price + 147}</s>
              </p>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">{name}</h5>
              <h5 className="text-dark mb-0">${price}</h5>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="text-muted mb-0">
                Available: <span className="fw-bold">{available}</span>
              </p>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={this.handleClick.bind(this, id)}
                >
                  خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
