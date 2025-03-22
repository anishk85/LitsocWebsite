import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function TextGroup({ number, text1, text2, text3 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '40px' }}>
      <div
        style={{
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          border: '2px solid white',
          borderRadius: '50%',
          width: '28px',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          marginRight: '0px',
          marginTop: '15px',
        }}
      >
        {number}
      </div>
      <div>
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: '400',
            color: 'white',
            fontSize: '22px',
            margin: 0,
            marginBottom: '5px',
            marginLeft: '15px',
            padding: 0,
            lineHeight: '1.1',
          }}
        >
          {text1}
        </p>
        <h1
          style={{
            fontFamily: 'Inter',
            fontWeight: '400',
            color: 'white',
            fontSize: '54px',
            margin: 0,
            marginBottom: '5px',
            marginLeft: '15px',
            padding: 0,
            lineHeight: '1',
          }}
        >
          {text2}
        </h1>
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: '400',
            color: 'white',
            fontSize: '15px',
            margin: 0,
            marginLeft: '15px',
            padding: 0,
            lineHeight: '1.1',
          }}
        >
          {text3}
        </p>
        <hr
          style={{
            width: '750px',
            border: '0.5px solid white',
            margin: '10px 0',
          }}
        />
      </div>
    </div>
  );
}

const AboutUs = ({ isActive }) => {
  const textGroupRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      // Reset elements to initial state before animating
      gsap.set(titleRef.current, { y: 50, opacity: 0 });
      gsap.set(textGroupRefs.current, { x: 100, opacity: 0 });

      // Animate the title
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        delay: 0.3,
      });

      // Animate TextGroups with stagger
      gsap.to(textGroupRefs.current, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        stagger: 0.2,
        delay: 0.5,
      });
    }
  }, [isActive]);

  return (
    <div className="page">
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100vw',
          backgroundColor: '#AD906C',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
        }}
      >
        <div
          ref={titleRef}
          style={{
            fontSize: '130px',
            color: '#FFFFFF',
            fontFamily: 'Bricolage Grotesque, sans-serif',
            marginTop: '-48px',
            fontWeight: '500',
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            lineHeight: '1',
          }}
        >
          Who are we?
        </div>
        <hr
          style={{
            width: '1000px',
            border: '1px solid #FFFFFF',
            position: 'absolute',
            top: '9.6%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <div style={{ position: 'absolute', top: '14%', marginLeft: '280px' }}>
          <div ref={(el) => (textGroupRefs.current[0] = el)}>
            <TextGroup
              number="1"
              text1="THE importance of an idea"
              text2="Right concept, right client"
              text3="Unique, recognizable projects"
            />
          </div>
          <div ref={(el) => (textGroupRefs.current[1] = el)}>
            <TextGroup
              number="2"
              text1="Creative Vision Matters"
              text2="Designs that Inspire"
              text3="Innovative, aesthetic solutions"
            />
          </div>
          <div ref={(el) => (textGroupRefs.current[2] = el)}>
            <TextGroup
              number="3"
              text1="Bringing Ideas to Life"
              text2="Execution with Precision"
              text3="Delivering impactful results"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;