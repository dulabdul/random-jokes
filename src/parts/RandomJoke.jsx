import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Tabs } from 'flowbite';
import { useLazyAxios } from 'use-axios-client';
import axios from 'axios';
export default function RandomJoke() {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        'https://dad-jokes.p.rapidapi.com/random/joke',
        {
          headers: {
            'X-RapidAPI-Key':
              '923f6b1832msh37380df2a4593c2p1ec827jsnfb36baa32614',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
          },
        }
      );

      console.log('data is: ', JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  //   console.log(data?.body[0].setup);
  console.log(isLoading);
  return (
    <>
      <section className='container w-full mx-auto px-4 md:px-0'>
        <div className='mb-4 border-b border-gray-200 dark:border-gray-700'>
          <ul
            className='flex flex-wrap -mb-px text-sm font-medium text-center'
            id='myTab'
            data-tabs-toggle='#myTabContent'
            role='tablist'>
            <li
              className='mr-2'
              role='presentation'>
              <button
                className='inline-block p-4 border-b-2 rounded-t-lg'
                id='profile-tab'
                data-tabs-target='#profile'
                type='button'
                role='tab'
                aria-controls='profile'
                aria-selected='false'>
                Random Jokes
              </button>
            </li>
          </ul>
        </div>
        <div id='myTabContent'>
          <div
            className='hidden p-4 rounded-lg bg-slate-400'
            id='profile'
            role='tabpanel'
            aria-labelledby='profile-tab'>
            <p className='text-sm text-white font-semibold'>
              Let's get a random jokes
            </p>
          </div>
          <div className='p-4 rounded-lg bg-white'>
            {data?.success === true ? (
              <>
                {isLoading ? (
                  'Sabar...loading dulu'
                ) : (
                  <>
                    <h4 className='text-black font-semibold text-2xl'>
                      {data?.body[0].setup}
                    </h4>
                    <p className='text-slate-500 font-normal text-lg'>
                      {data?.body[0].punchline}
                    </p>
                    <br />
                    <p>WKWKKWW LUCUUU NGGAAA??</p>
                    <p>Monmaap kalau garing</p>
                  </>
                )}
              </>
            ) : (
              <p>Click tombol dibawah ini yaa!!!</p>
            )}
          </div>
          <div className='flex gap-4 flex-col md:flex-row'>
            <button
              onClick={handleClick}
              className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-400 mt-3 '>
              Get Jokes
            </button>
            <a
              href='https://wa.me/089675293838?text=jokes%20nya%20ga%20lucu%20sama%20sekali'
              className='bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500 mt-3 '>
              Kontak saya kalau jokesnya ga lucu
            </a>
            <a
              href='/'
              className='bg-lime-800 text-white py-2 px-4 rounded-md hover:bg-lime-600 mt-3 '>
              Balik ke home
            </a>
          </div>
        </div>
        <p className='text-red-800 font-semibold mt-2'>
          *pencet lagi, kalau mau liat jokes yang lain...
        </p>
      </section>
    </>
  );
}
