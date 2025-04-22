import React from 'react'
import myResume from '../Assets/My_resume.pdf'

export default function Resume() {
  return (
    <div>
      <a
        href={myResume}
        download="My_resume.pdf"
      >
        Resume
      </a>
    </div>
  )
}