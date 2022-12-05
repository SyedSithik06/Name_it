import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css'


export default function ResultContainer({ suggestedNames }) {
          
     const suggestedNameJsx = suggestedNames.map(suggestedName => {
       return <NameCard key={suggestedName} suggestedName={suggestedName} />
     })

  return (
    <div className='results-container'>
    <p>{suggestedNameJsx}</p>
    </div>
  )
}
