import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    function slidePrev() {

    }

    function slideNext() {
        const { width } = contentRef.current.getBoundingClientRect();
        setPosition(position - width)
    }


    return(
        <section className={styles.container}>
            <div
             ref={contentRef}
             className={styles.content} 
             style={{transform: `translateX(${position}px)`}}
            >
                {slides.map(slide => (<div className={styles.item} key={ slide.id }>
                    { slide.text }
                </div>
                ))}
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    )
}

export default Slide;