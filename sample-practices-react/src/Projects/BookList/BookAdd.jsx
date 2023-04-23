import React from "react";

const BookAdd = ({ book, name }) => {
  function handleInput(e) {
    this.setState({
      name: e.target.value,
    });
  }

  return (
    <form className="d-flex justify-content-center align-items-start mb-4">
      <div className="form-outline flex-fill">
        <input
          type="text"
          id="form3"
          className="form-control form-control-lg"
          onChange={(e) => handleInput(e)}
          value={name}
        />
        <label className="form-label" htmlFor="form3">
          What do you need to do today?
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-lg ms-2">
        Add
      </button>
    </form>
  );
};

export default BookAdd;
