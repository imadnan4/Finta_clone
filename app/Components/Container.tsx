import React from 'react'
import {cn} from '../utils/utils'

const Container = ({ children , className} :{children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 md:py-4 w-full", className)}>
      {children}
    </div>
  )
}

export default Container
