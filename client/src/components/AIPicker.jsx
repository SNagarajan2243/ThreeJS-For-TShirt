import React from 'react'

import CustomerButton from './CustomButton'

const AIPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {
          generatingImg ? (
            <CustomerButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
            />
          )
          :
          (
            <>
              <CustomerButton 
                type="outline"
                title="AI Logo"
                handleClick={()=>handleSubmit('logo')}
                customStyles='text-xs'
              />
              <CustomerButton 
                type="filled"
                title="AI Full Image"
                handleClick={()=>handleSubmit('full')}
                customStyles="text-xs"
              />
            </>
          )
        }
      </div>
    </div>
  )
}

export default AIPicker
