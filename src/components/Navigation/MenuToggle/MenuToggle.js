import React from "react"
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
  const cls = [
    'fa',
    classes.MenuToggle,
    props.isOpen && classes.open
  ];
  props.isOpen ? cls.push('fa-times') : cls.push('fa-bars');
  return (
    <i className={cls.join(' ')}
       onClick={props.onToggle}>
    </i>
  )
};


export default MenuToggle