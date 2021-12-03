import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { FilmIcon, UserCircleIcon } from '@heroicons/react/solid'
import Content from '../components/Content'
import { useRouter } from 'next/router'

export default function Home({ topAnime }) {


  const searchInputRef = useRef('');
  const router = useRouter();


  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/page?term=${term}`)


  }



  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-yellow-300 sticky top-0 h-28  py-2 px-2 lg:h-56">
          <div className="flex items-center justify-between">
            <FilmIcon className="h-8 w-8" 
            />
            <UserCircleIcon className="h-8 w-8" />
          </div>
          <h1 className=" text-lg lg:text-3xl lg:mt-10 flex justify-center -mt-7">Find Movies, TV shows and more</h1>

          <form className="flex flex-col items-center w-full mx-auto flex-grow  z-10 mt-5 lg:mt-20" onSubmit={handleSearch}>
            <div className="flex w-full  hover:shadow-lg bg-white focus-within:shadow-lg max-w-md rounded-lg lg:rounded-full border border-gray-200 lg:px-5 lg:py-3 items-center sm:max-w-xl lg:max-w-2xl">
              <SearchIcon className="h-5 mr-3 " />
              <input type="text" className="flex-grow focus:outline-none  p-2" placeholder="Enter to search"
                ref={searchInputRef}
              />
              <MicrophoneIcon className="h-5  text-gray-500" />
              <button type="submit" className="hidden"> </button>
            </div>
          </form>
        </div>

      </main>
      <Content topAnime={topAnime.top} />



    </div>
  )
}

export async function getStaticProps() {
  const url = 'https://api.jikan.moe/v3/top/anime/1/bypopularity';
  const anime = await fetch(url).then(res => res.json())

  return {
    props: {
      topAnime: anime
    }
  }
}