import React from 'react';
import reactTodo from '../../media/todo-react.png';
import etchASketch from '../../media/etch-a-sketch.png';
import ecommerce from '../../media/ecommerce.png';
import "./Slider.css";

const slidesInfo = [
    {
        src:reactTodo,
        alt: "React to do list",
        desc:"Lista de tareas hecha con React, usando Vite js",
        link: 'https://yunagosh7.github.io/react-todo1/'
    },
    {
        src:etchASketch,
        alt:"Etch-A-Sketch",
        desc:"Un etch-a-sketch hecho con JavaScript, HTML y CSS puro",
        link:"https://yunagosh7.github.io/etch-a-sketch/"
    },
    {
        src:ecommerce,
        alt:"Ecommerce",
        desc:"Ecommerce con React y Bootstrap5",
        link: "https://yunagosh-ecommerce.netlify.app/"
    }
]

const Slides = [];

for (let i = 0; i < slidesInfo.length; i++) {
    Slides.push((
        <div className='slide-container'>
            <a href={slidesInfo[i].link} target="_blank" rel="noreferrer">
                <img src={slidesInfo[i].src} alt={slidesInfo[i].alt} />
                <div className='slide-desc'>
                    <span>{slidesInfo[i].desc} </span>
                </div>
            </a>
        </div>
    ))
}    
export default Slides