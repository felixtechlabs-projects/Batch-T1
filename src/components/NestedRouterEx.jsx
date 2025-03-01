import React from 'react'
import { useParams } from 'react-router-dom'

const NestedRouterEx = () => {
    const param = new useParams();

  return (
    <div>NestedRouterEx {param.id}</div>
  )
}

export default NestedRouterEx