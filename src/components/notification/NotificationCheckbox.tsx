"use client"
import React, { useEffect } from 'react';

interface CheckTypes {
  sectionId: string;
  checkboxId: string;
}

const NotificationCheckbox: React.FC<CheckTypes> = ({ sectionId, checkboxId }) => {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.background = 'none';
      section.style.border = 'none';
      section.style.boxShadow = 'none';
    }
  }, [sectionId]);

  return (
    <section id={sectionId}>
      <div className="notify-check">
        <input type="checkbox" id={checkboxId} name="check" defaultChecked />
        <label htmlFor={checkboxId}></label>
      </div>
    </section>
  );
};

export default NotificationCheckbox;
