import React from "react";
import TableItem from "./TableItem";

const Table = (props) => {
  return (
    <table className="table align-middle mb-5 bg-white">
      <thead className="bg-light">
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Status</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.shoppingProducts.map((product) => (
          <TableItem
            {...product}
            key={product.id}
            onRemoveProduct={props.onRemove}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
