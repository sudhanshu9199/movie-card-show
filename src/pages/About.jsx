import React, { useRef } from 'react'
import style from '../styles/About.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import movie_clapper from '../assets/movie_clapper.png';
import wood_table from '../assets/wood_table.png'

gsap.registerPlugin(useGSAP, ScrollTrigger);
const About = () => {
  const containerRef = useRef();
  const container2Ref = useRef(null);
  const imagesRef = useRef([]);
  const text2Ref = useRef();
  const clapperRef = useRef(null);
  const tableRef = useRef(null);
  const text3Ref = useRef([]);


  // GSAP animation
  useGSAP(() => {
    gsap.from(containerRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.5
    });
  }, {scope: containerRef});


  useGSAP(() => {
    gsap.from(text2Ref.current, {
      x: 150,
      opacity: 0,
      duration: 2.8,
      ease: "elastic.out(1,0.3)",
    });
  }, {scope: text2Ref});

  useGSAP(() => {
    gsap.from(imagesRef.current, {
      y: 500, // throw from bottom
      x: () => gsap.utils.random(-200, 200), // random sideways
      rotation: () => gsap.utils.random(-180, 180), // random spins while flying
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    });
  }, []);

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container2Ref.current,
        start: 'top center',
        toggleActions: 'restart none none none',
      }
    });

    t1.from(clapperRef.current, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });

    t1.from(tableRef.current, {
      x: -300,
      opacity: 0,
      duration: 0.8,
      ease: 'power4.out',
    }, '-=0.8');

    t1.from(text3Ref.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    }, '-=0.3');
  }, {scope: container2Ref});

  return (
    <div>
      <div className={style.container1}>
        <div className={style.left} >
          <div ref={containerRef}>
            <h2>Our Story</h2>
          <p>It all started with a simple thought: What if movies could be organized in a fun, personal way – without boring spreadsheets or endless lists? That’s how this site was born.</p>
          <button onClick={() => console.log('hello')
          }>Start to Create</button>
          </div>

          <p ref={text2Ref}>Here, you’re not just a viewer—you’re the creator. 🎥 Add your own movie cards with a poster, name, description, trailer link, and even your personal rating ⭐. Build a collection that truly reflects your taste.</p>
        </div>
        <div className={style.right}>
          {[
            "https://m.media-amazon.com/images/I/81dae9nZFBS._UF1000,1000_QL80_.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-wJsoQxnUNT5Mxm-FAQ0PETZ9OT-GBz8kzW3qt99a6YSeawYoU3SPRcK6Vaj0rmUb8k&usqp=CAU",
            "https://creativereview-new.imgix.net/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1037&h=1536",
            "https://images-cdn.ubuy.co.in/668f03f763dc6918441092c0-avengers-infinity-war-movie-poster.jpg",
            "https://images-cdn.ubuy.co.in/633cae2eb5f1fa3ed74f58ac-titanic-movie-poster-leonardo-dicaprio.jpg",
            "https://i0.wp.com/www.shutterstock.com/blog/wp-content/uploads/sites/5/2024/03/Stopmotion-poster.jpg?ssl=1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2IZ1Yku50b-BiARKwl-stItuYHtPXy8haGMIlgGbhdGl1PLbTHR0N51y3JOP0vkQANI&usqp=CAU",
            "https://cdnb.artstation.com/p/assets/images/images/074/298/193/large/manaal-tawde-avatars-poster.jpg?1711712778"
          ].map((src, i) => (
            <img loading="lazy" key={i} ref={(el) => (imagesRef.current[i] = el)} src={src} alt="" />
          ))}
        </div>
      </div>

      <div className={style.container2} ref={container2Ref}>
        <div className={style.left}>
          <img loading="lazy" src={movie_clapper} alt="" ref={clapperRef} />
          <img loading="lazy" src={wood_table} alt="" ref={tableRef} />
        </div>
        <div className={style.right}>
          <p ref={el => text3Ref.current[0] = el}>Your movies live safely in your device through local storage—no sign-ups, no servers, just pure movie love. Delete the ones you’re done with, or mark the ones closest to your heart ❤️ in the Favorites section.</p>
          <p ref={el => text3Ref.current[1] = el}>This is your mini cinema library, designed by you, for you. 🍿✨</p>
        </div>
      </div>


      <footer>Developed by <span onClick={() => window.open('https://www.linkedin.com/in/sudhanshu-ghosh9199', '_blank')}>@SUDHANSHU_GHOSH</span></footer>
    </div>
  )
}

export default About