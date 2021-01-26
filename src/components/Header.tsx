import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="Header">
      <Link to={'/addJob'}>Add a Job</Link>
    </div>
  )
}
