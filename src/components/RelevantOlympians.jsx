import React from 'react'
import Link from "next/link";

const RelevantOlympians = ({olympians}) => {
  const validOlympians = ['aphrodite', 'apollo', 'ares', 'artemis', 'athena', 'demeter', 'dionysus', 'hephaestus', 'hera', 'hermes', 'poseidon', 'zeus']
  
  const getLink = (olympian) => {
    if(validOlympians.includes(olympian.toLowerCase())) {
      return `/${olympian.toLowerCase()}`
    } else {
      return '/'
    }
  }
  return (
    <div className="text-black mx-10 flex flex-col items-center">
        {olympians.map((olympian) => <div className='py-1' key={olympian}><Link href={getLink(olympian)}>{olympian}</Link></div>)}
    </div>
  )
}

export default RelevantOlympians