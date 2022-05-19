import React from 'react'
import LogoutButton from './LogoutButton'

function SurveyTaken({ hasUserTaken, name }) {
  return (
    <div>
      <div className="text-6xl flex justify-center mb-2">
        <p>🙂🙏🏾</p>
      </div>
      <p>
        Thank you,{' '}
        <span className="underline decoration-orange-400">
          {name.split(' ')[0]}
        </span>
        . it seems you have just completed this survey or have already taken
        this survey. Please send to your friends to also take this survey
      </p>
      <div className="mt-4">
        <LogoutButton />
      </div>
    </div>
  )
}

export default SurveyTaken
