import React, { useState } from 'react';
import DropdownCSS from '../../styles/Dropdown.module.css';

export default function Dropdown(props) {
    const [isToggle, setIsToggle] = useState(false);

    return isToggle ? (
        <div className={DropdownCSS.dropdownContainer}>
            <div className={DropdownCSS.divTitle}>
                <div><p className={DropdownCSS.title}>{props.title}</p></div>
                <div>
                    <svg className={DropdownCSS.svg} onClick={() => setIsToggle(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                        <path d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502064 13.205C-0.167355 12.5355 -0.167355 11.4484 0.502064 10.779L10.7843 0.496709L10.7897 0.502064Z" fill="white"/>
                    </svg>
                </div>
            </div>  
            <div className={DropdownCSS.pContainer}>
                <p className={DropdownCSS.p}>{props.text}</p>
            </div>
        </div>
    ) : (
        <div className={DropdownCSS.dropdownContainer}>
            <div className={DropdownCSS.divTitle}>
                <div><p className={DropdownCSS.title}>{props.title}</p></div>
                <div>
                    <svg className={DropdownCSS.svg} onClick={() => setIsToggle(true)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clip-path="url(#clip0_181350_179)">
                            <path d="M14.7897 22.2103C15.4591 22.8797 16.5462 22.8797 17.2157 22.2103L27.4979 11.928C28.1674 11.2586 28.1674 10.1715 27.4979 9.50206C26.8285 8.83265 25.7414 8.83265 25.072 9.50206L16 18.574L6.92804 9.50742C6.25862 8.838 5.17148 8.838 4.50206 9.50742C3.83265 10.1768 3.83265 11.264 4.50206 11.9334L14.7843 22.2157L14.7897 22.2103Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_181350_179">
                            <rect width="32" height="32" fill="white" transform="translate(32) rotate(90)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>  
        </div>
    )
} 