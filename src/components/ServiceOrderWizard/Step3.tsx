import React from 'react'
import services from '../../data/data'

function Step3() {
    const { id } = useParams();
  const service = services.find(service => service.id === parseInt(id));
  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <div>
    Step3
    <div>
        <div>{service.name}</div>
        <div>{service.detailedDescription}</div>
        <div>{service.price}</div>
    </div>
    <div>
    User input data
    <div>Owner Name</div>
    <div>Provisioning Date</div>
    <div>Decomissioning Date</div>
    <div>Additional Notes</div>
    </div>
    <button>back</button>
    <button>next</button>
    <button>submit</button>
    </div>
  )
}

export default Step3