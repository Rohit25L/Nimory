import React from 'react'

const SimmerBody = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img shimmer"></div>
      <div className="flex flex-col gap-10 pt-10 w-2/4">
        <div className="shimmer-line shimmer"></div>
        <div className="shimmer-line short shimmer"></div>
        <div className="shimmer-info shimmer"></div>
      </div>
    </div>
  )
}

export default SimmerBody
