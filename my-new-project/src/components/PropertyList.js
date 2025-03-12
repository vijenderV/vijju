import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';

// Mock data
const properties = [
  { id: 1, image: 'url1', title: 'Cozy Cottage', description: 'A cozy cottage in the woods.', price: 100 },
  // Add more properties as needed
];

const PropertyList = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    setFilteredProperties(properties); // Replace with actual fetch call
  }, []);

  return (
    <div className="property-list">
      {filteredProperties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
