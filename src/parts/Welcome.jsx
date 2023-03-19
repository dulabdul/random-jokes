import React, { useRef, useEffect, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { AiFillHeart } from 'react-icons/ai';

export default function Welcome() {
  const refHeading = useRef(null);
  const buttonFloor = useRef(null);
  const buttonYes = useRef(null);
  useEffect(() => {
    const characters = refHeading.current.textContent.match(/[\w\W]/g);
    refHeading.current.textContent = '';
    characters?.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      refHeading.current.appendChild(span);
    });
    // Create charcter count variable and set timer with new function called setChar().
    let char = 0;
    let timer = setInterval(setChar, 100);
    function setChar() {
      const spanChar = document.querySelectorAll('span')[char];

      spanChar.className = `fade`;
      spanChar.style.color = '#0ea5e9';
      char++;
      char === characters.length && clearInterval(timer);
    }
  }, []);
  function floorBtn() {
    let mau = document.getElementById('yes');
    let nope = document.getElementById('nope');
    let i = Math.floor(Math.random() * 300) + 1;
    let j = Math.floor(Math.random() * 100) + mau.offsetTop;
    nope.style.left = i + 'px';
    nope.style.top = j + 'px';
  }
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#0c0c0c',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <section className='w-full h-full overflow-hidden bg-black'>
        <div className='container w-full h-screen flex flex-col items-center justify-center mx-auto'>
          <h1
            ref={refHeading}
            className='heading text-center font-semibold text-2xl'>
            Helloo Biru!!
          </h1>
          <br />
          <p className='text-[#f0f0f0] font-extralight z-10'>
            i made this for you, karena jokes nya selalu NT :3
          </p>
          <div className='w-full flex items-center justify-center mt-6 gap-4'>
            <a
              id='yes'
              ref={buttonYes}
              href='/jokes'
              className='text-black z-10 bg-white py-2 px-4 rounded-md hover:bg-blue-400 hover:text-white'>
              Buka
            </a>
            <button
              ref={buttonFloor}
              id='nope'
              onClick={floorBtn}
              className='text-black z-10 bg-white py-2 px-4 rounded-md hover:bg-blue-400 hover:text-white absolute bottom-[200px]'>
              Ngga dulu
            </button>
          </div>
          <div className='w-full mt-4'>
            <div className='relative grid grid-col-1  justify-center w-full'>
              <div>
                <p className='z-10 text-pink-400 text-center inline-block'>
                  <AiFillHeart className='text-pink-500 inline-block' />{' '}
                  <p className='inline-block text-white'>Created by</p> Abdul
                  Rahman
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
