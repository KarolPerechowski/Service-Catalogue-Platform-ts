import React from 'react'
import { Link } from 'react-router';
import services from '../data/data';

function ServiceList() {
  return (
    <>
        
            <ul className='flex flex-col sm:flex-row list-none'>
                {services.map((service, index) => (
                    <li className='p-2 m-2 border-2' key={index}>
                        <div className='text-xl'>{service.name}</div>
                        <div>{service.shortDescription}</div>
                        <div className='text-green-700'>{service.price}</div>
                        <Link to={`/services/${service.id}`}>View details</Link>
                    </li>
                ))}
            </ul>
        
    </>
  )
}

export default ServiceList;