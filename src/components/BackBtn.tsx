import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function BackBtn() {
  return (
    <div className="BackBtn">
      <Link to={'/'}>
        <FiChevronLeft className="back-btn"/>
      </Link>
    </div>
  )
}
