import React from 'react'
import './bai5.scss'
interface PopupProps {
    title: string;
    content: string;
    onClose: () => void;
}
export default function Bai5(title:any, onClose:any, content:any) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <h2 className="popup-title">{title}</h2>
          <button className="popup-close" onClick={onClose}>&times;</button>
        </div>
        <div className="popup-content">
          {content}
        </div>
        <div className="popup-footer">
          <button className="popup-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
