import React from 'react'
import LogoutButton from '../components/LogoutButton'
import noSensePhoto from '../assets/no-sense.gif'

function CTA() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="uppercase text-lg font-bold text-orange-500 ">
        As you no like shawarma. Abeg getout
      </p>

      <div className="w-full mb-6">
        <img
          src={noSensePhoto}
          alt="you no get sense"
          className="w-full rounded-md"
        />
      </div>

      <LogoutButton />
    </div>
  )
}

export default CTA
