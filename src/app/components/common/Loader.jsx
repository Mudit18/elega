import React from 'react'
import Spinner from './Spinner'

export default function Loader() {
  return (
    <div className="w-full  h-screen flex justify-center items-center bg-customDarkBg1">
      <Spinner />
    </div>
  )
}