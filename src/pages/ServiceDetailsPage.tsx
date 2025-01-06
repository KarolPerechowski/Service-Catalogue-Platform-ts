import React from 'react';
import { Link, useParams } from 'react-router';
import services from '../data/data';

function ServiceDetailsPage() {
  const { id } = useParams();
  const service = services.find(service => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
    <Link className='m-2 text-purple-400' to={`/`}>Back to Catalogue</Link>
      <h1 className='m-2'>{service.name}</h1>
      <div>
          <p className='m-2'>{service.detailedDescription}</p>
          <p className='m-2 text-green-700'>Price: {service.price}</p>
      </div>
    </div>
  );
}

export default ServiceDetailsPage;