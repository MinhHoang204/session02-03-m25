import React from 'react'
import { useState } from 'react';
export default function Bai2() {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const options = ["Label", "Label", "Label", "Label"];

    const handleSelectOption = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleClear = () => {
        setSelectedOptions([]);
    };

    const handleApply = () => {
        console.log('Selected Options:', selectedOptions);
    };

  return (
    <div className="bg-gray-100 p-4 rounded-md w-80">
            <label htmlFor="select" className="text-sm font-medium text-gray-700">Input Label</label>
            <div className="relative mt-2">
                <div className="flex items-center border border-blue-500 rounded-md px-3 py-2">
                    <span role="img" aria-label="icon" className="mr-2">⏰</span>
                    <input
                        type="text"
                        id="select"
                        readOnly
                        value={selectedOptions.join(', ')}
                        placeholder="Select options"
                        className="w-full bg-transparent focus:outline-none text-gray-900"
                    />
                    <button className="ml-2">
                        <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="absolute mt-2 bg-white border border-blue-500 rounded-md shadow-lg z-10 w-full">
                    <ul className="max-h-48 overflow-y-auto">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelectOption(option)}
                            >
                                <span>{option}</span>
                                {selectedOptions.includes(option) && (
                                    <svg
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between border-t border-gray-300 p-2">
                        <button
                            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-gray-100"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={handleApply}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}