import React from 'react'

function Step1() {
    const { id } = useParams();
  const service = services.find(service => service.id === parseInt(id));
  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <div>
    Step1
    <input>Owner Name</input>
    <input>Provisioning Date</input>
    <input>Decomissioning Date</input>
    </div>
  )
}

export default Step1