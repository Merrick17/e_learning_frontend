import React from "react";
import { Link } from "react-router-dom";

const CoursCard = ({
  category,
  name,
  description,
  price,
  imgUrl,
  totalStudent
}) => {
  return (
    <div className="flex max-w-md bg-white shadow-lg m-4 rounded-lg overflow-hidden">
      <div className="w-1/3 bg-cover bg-landscape">
        <img src={`http://localhost:5000/${imgUrl}`} />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
        <h3>{category}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="flex item-center mt-2">
          Nbr Etudiants: {totalStudent}
        </div>
        <div className="flex item-center justify-between mt-3">
          <h1 className="text-gray-700 font-bold text-xl">{price} DT</h1>
          <Link
            className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            to="/register"
          >
            M'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursCard;
