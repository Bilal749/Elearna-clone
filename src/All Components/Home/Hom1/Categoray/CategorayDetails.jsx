/** @format */

import React from 'react';
import { useParams } from 'react-router';

import { categoryData } from './CategorayData';

function CategorayDetails() {
  const { id } = useParams();
  const allCategories = categoryData.find((s) => s.id === Number(id));

  if (!allCategories) return <p>Page not Found 404</p>;
  return (
    <div className="bg-orange-600">
      <div>
        <img src={allCategories.img} alt="" />
      </div>

      <h1>{allCategories.title}</h1>
      <p>{allCategories.allinfo}</p>
    </div>
  );
}

export default CategorayDetails;
