import React from 'react'

export default function Bai1() {
  return (
    <div className="flex flex-col space-y-2">
        <label htmlFor="input-field" className="text-sm font-medium text-gray-700">Label</label>
        <div className="relative">
            <input 
                type="text" 
                id="input-field" 
                placeholder="Placeholder" 
                className="block w-full pl-3 pr-10 py-2 text-base text-gray-900 placeholder-gray-400 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0c0 3-6 3-6 0m6 0a9 9 0 10-18 0 9 9 0 0018 0z"></path>
                </svg>
            </div>
        </div>
        <p className="text-sm text-gray-500">Helper Text</p>
    </div>
  )
}
