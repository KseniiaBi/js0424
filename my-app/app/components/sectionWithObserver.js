'use client';
import { useEffect, useState, useRef } from "react";

const  SectionWithObserver = ({children}) =>{
    const [isIntersecting, setIsIntersecting] = useState(false);
    const target = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=> {
                setIsIntersecting(entry.isIntersecting)
            },
            {
                rootMargin: '0px',
                threshold: 0.8
            }
        );
        
        observer.observe(target.current);
        return ()=> observer.disconnect();
    }, [isIntersecting]);

    useEffect(()=> {
        if(isIntersecting) {
            target.current.querySelectorAll('.animating').forEach(item => {
                item.classList.add('completed');
            })
        }
    });

    return(
        <section ref={target} className="centered">
            {children}
        </section>
    )
}

export default SectionWithObserver;