import React from 'react'

const Card = ({title, author, content}) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl ">
        <div className="p-4 md:p-10">
            <h3 className="text-lg font-bold text-gray-800">
            {title}
            </h3>
            <p className="mt-2 text-gray-500 ">
            {content}
            </p>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800">
            {author}
            </p>
        </div>
    </div>
  )
}

export default Card