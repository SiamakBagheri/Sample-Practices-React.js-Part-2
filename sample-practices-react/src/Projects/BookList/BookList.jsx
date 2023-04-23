import React, { Component } from "react";
import BookInfo from "./BookInfo";

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],

      name: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.name) {
      let newBook = {
        id: this.state.books.length + 1,
        name: this.state.name,
      };

      this.setState({
        books: [...this.state.books, newBook],
      });
    }

    this.setState({
      name: "",
    });
  }

  handleInput(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <section className="vh-100" Style="background-color: #e2d5de;">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" Style="border-radius: 15px;">
                <div className="card-body p-5">
                  <h6 className="mb-3">Awesome Todo List</h6>
                  <form
                    className="d-flex justify-content-center align-items-start mb-4"
                    onClick={(e) => this.handleSubmit(e)}
                  >
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form3"
                        className="form-control form-control-lg"
                        onChange={(e) => this.handleInput(e)}
                        value={this.state.name}
                      />
                      <label className="form-label" htmlFor="form3">
                        What do you need to do today?
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg ms-2"
                    >
                      اضافه کردن
                    </button>
                  </form>
                  <ul className="list-group mb-0">
                    {this.state.books.map((book) => (
                      <BookInfo {...book} key={book.id} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BookList;
