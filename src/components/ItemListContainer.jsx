import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-3">
      <div className="alert alert-primary" role="alert">
        {greeting}
      </div>
    </div>
  );
};

export default ItemListContainer;
