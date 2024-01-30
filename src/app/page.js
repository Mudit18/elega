import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white flex w-full h-screen items-stretch justify-center">
      <Head>
        <title>Elega</title>
        <meta name="description" content="Elega | Spreading Smiles | Elderly Care" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="bg-white w-full">
        <div id='ziya' className='flex flex-col md:flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full md:w-1/2 justify-center items-center'>
            <Image
              unoptimized
              src={'/logo.png'}
              width={200}
              height={200}
            />
            <div className='text-xl md:text-5xl mt-2 pb-4 pl-8 pr-8 pt-4 bg-black text-white font-extralight'>Elega</div>
            <div className='text-xl md:text-4xl pt-6 pb-5 pl-10 pr-10 font-extralight border border-black text-black'>LUGGAGE STORAGE NEAR YOU</div>
            <div className='text-lg mb-5 pt-6 pb-5 pl-10 pr-10 font-extralight text-black'>Freedom to explore from Rs 200 per day.</div>
            <div className='flex flex-col md:flex-row w-full gap-5 md:gap-20 pl-10 pr-10 items-center md:items-center md:items-start justify-center'>
              <div className='flex flex-row md:flex-col gap-5 text-black items-center justify-center text-center'>
                <Image
                  unoptimized
                  src={'/world.png'}
                  width={50}
                  height={50}
                />
                1000+ locations worldwide
              </div>
              <div className='flex flex-row md:flex-col gap-5 text-black items-center justify-start text-center'>
                <Image
                  unoptimized
                  src={'/security.png'}
                  width={50}
                  height={50}
                />
                Insurance covered
              </div>
              <div className='flex flex-row md:flex-col gap-5 text-black items-center justify-start text-center'>
                <Image
                  unoptimized
                  src={'/call.png'}
                  width={50}
                  height={50}
                />
                100% free cancellation
              </div>
              <div className='flex flex-row md:flex-col gap-5 text-black items-center justify-start text-center'>
                <Image
                  unoptimized
                  src={'/luggage.png'}
                  width={50}
                  height={50}
                />
                No size restrictions
              </div>
            </div>
            <Link href="#about">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Book Now</button>
            </Link>
          </div>
          <div className='flex hidden md:block bg-black w-full md:w-1/2 h-screen relative'>
            <Image
              unoptimized
              src={'/suitcase.png'}
              fill
            />
          </div>
        </div>
        <div className='bg-white flex justify-center items-center text-sm pt-3 pb-3 font-extralight text-black'>Copyright © 2024 Elega - All Rights Reserved.</div>
      </main>
    </div>
  );
}