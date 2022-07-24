import React from 'react'

const ImageContainer = ({className, children, width, height}) => {
  return (
    <div className={className} style={{position: 'relative', minWidth: width, width: width, minHeight: height, height: height}}>
        {children}
    </div>
  )
}

export default ImageContainer