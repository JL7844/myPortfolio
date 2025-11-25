import React from 'react'
import PropTypes from 'prop-types'
const ButtonPrimary = ({label, target, href, icon, classes, download}) => {
    if(href){
        return(
             <a href={href} target={target} className={"btn btn-primary " + classes} download={download}>
                {label }
                {icon && <span className='material-symbols-rounded' aria-hidden="true">{icon}</span>}
            </a>
        )
    } else{
         return(
              <button className={"btn btn-primary " + classes}>
                {label}
                {icon && <span className='material-symbols-rounded' aria-hidden="true">{icon}</span>}
            </button>
         )
    }

}
const ButtonOutline = ({label, target, href, icon, classes}) => {
    if(href){
        return(
             <a href={href} target={target} className={"btn btn-outline " + classes}>
                {label}
                     {icon && <span className='material-symbols-rounded ' aria-hidden="true">{icon}</span>}
                
               
            </a>
        )
    } else{
         return(
              <button className="btn btn-outline flex items-center justify-center gap-2 w-auto px-6">
    {label}
    {icon && <span className='material-symbols-rounded'>{icon}</span>}
</button>
           
         )
    }

}
ButtonPrimary.propTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}
ButtonOutline.propTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}
export {
    ButtonPrimary,
    ButtonOutline
}
