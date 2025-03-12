import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = { id: 1, image: 'url1', title: 'Cozy Cottage', description: 'A cozy cottage in the woods.', price: 100 }; // Fetch property by ID

  return (
    <div className="property-detail">
      <img src={property.image} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>${property.price} per night</p>
      <BookingForm property={property} />
    </div>
  );
};

export default PropertyDetail;
