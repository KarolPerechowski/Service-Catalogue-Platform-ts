import React from 'react'

function Step2() {
    const { id } = useParams();
    const service = services.find(service => service.id === parseInt(id));
    if (!service) {
      return <div>Service not found</div>;
    }
  return (
    <div>
    Step2
    <div>{service.price}</div>
    <input>Additional Notes</input>
    </div>
  )
}

export default Step2