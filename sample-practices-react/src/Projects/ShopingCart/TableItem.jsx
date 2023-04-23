import React from "react";

const TableItem = ({
  id,
  img,
  subjects,
  price,
  name,
  available,
  onRemoveProduct,
}) => {
  function handleClick(id) {
    onRemoveProduct(id);
  }

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={img}
            alt=""
            Style="width: 45px; height: 45px"
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="text-muted mb-0">{subjects}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-bold mb-1">{name}</p>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">
          {available}
        </span>
      </td>
      <td>${price}</td>
      <td>
        <button
          type="button"
          className="btn btn-denger fw-bolder"
          onClick={handleClick.bind(this, id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
