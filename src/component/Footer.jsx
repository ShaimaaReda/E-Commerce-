import React from 'react'
// import images from './../assets/images'

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className='container mx-auto '>
        <h2>Get the FreshCart app</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sint.</p>
        <div className='flex justify-between'>
        <input
            className="mt-2 border shadow rounded w-4/5 py-2 px-3"
            type="email"
            name="email"
            placeholder="Email"
            />
        <button className="bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Share App Link</button>
        </div>
        <div className='flex justify-between'>
          <h3>Payment Partners</h3>
          <div className='w-28'>
            <img src='./../assets/images/amazon-pay.png' alt='' className="w-full" />
          </div>
        shaiaaa
        </div>
      </div>
    </div>
  )
}
