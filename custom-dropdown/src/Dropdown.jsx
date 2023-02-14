import React from 'react'
import { useState } from 'react'

export const Dropdown = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);

  const options = ['React', 'Vue', 'Angular'];
  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="material-symbols-outlined">arrow_drop_down_circle</span>
        </div>
        {isActive && (
            <div className="dropdown-content">
                {options.map(option => (
                    <div 
                      onClick={e => {
                        setSelected(option)
                        setIsActive(false)
                        }}
                      className="dropdown-item">
                          {option}
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}
