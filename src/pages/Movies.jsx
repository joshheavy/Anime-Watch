import React from 'react'

const Movies = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Coming Soon</h2>
        <p className="text-gray-600">
            We're working on something awesome! Our website is under construction, and we can't wait to show you what we've been working on. Stay tuned!
        </p>
        <div className="flex justify-center">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600">
            Get Notified
            </div>
        </div>
    </div>
    </div>
  )
}

export default Movies