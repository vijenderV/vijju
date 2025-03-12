import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <img src={property.image} alt={property.title} />
    <h3>{property.title}</h3>
    <p>{property.description}</p>
    <p>${property.price} per night</p>
    <Link to={`/property/${property.id}`}>View Details</Link>
  </div>
);

export default PropertyCard;
