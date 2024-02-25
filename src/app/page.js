import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white flex w-full h-screen items-stretch justify-center">
      <Head>
        <title>Elega</title>
        <meta name="description" content="Elega | Elevating Technical Hiring" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="bg-white w-full">
        <div id='home' className='relative bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 flex flex-col md:flex-row h-screen w-full justify-center items-center'>
          <Image
            unoptimized
            className='md:hidden'
            width={250}
            height={200}
            src={'/hiring-options.png'}
            alt="Tech Hiring"
          />
          <div className='relative flex flex-col md:h-screen w-full md:w-1/2 justify-center items-center'>
            <Image
              unoptimized
              className='hidden md:block rounded-lg shadow-lg'
              src={'/logo.png'}
              width={100}
              height={200}
            />
            <div className='text-lg mt-10 pb-2 pl-5 pr-5 pt-2 bg-gradient-to-b from-cyan-600 via-cyan-800 to-cyan-600 text-white font-extralight'>Elevating Tech Hiring</div>
            <div className='text-5xl pt-6 pb-5 pl-20 pr-20 font-extralight border border-white text-white'>Elega</div>
            <Link href="#about">
              <div className='hidden absolute bottom-5 m-auto left-0 right-0 md:flex flex-col justify-center items-center'>
                <div className='text-sm pt-3 pb-2 font-extralight text-white'>Know More</div>
                <button className='text-xl animate-bounce text-white'>&darr;</button>
              </div>
            </Link>
          </div>
          <Link href="#about">
            <div className='flex absolute bottom-2 m-auto left-0 right-0 md:hidden flex-col justify-center items-center'>
              <div className='text-sm pt-3 pb-2 font-extralight text-white'>Know More</div>
              <button className='text-xl animate-bounce text-white'>&darr;</button>
            </div>
          </Link>
          <div className='hidden md:block flex w-full md:w-1/2 h-screen relative'>
            <Image
              unoptimized
              fill
              src={'/hiring-options.png'}
              alt="Tech Hiring"
              objectFit='cover'
            />
          </div>
        </div>
        <div id='about' className='bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='relative flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='md:hidden mb-10 rounded-lg shadow-lg'
              src={'/hiring-search-profiles.png'}
              width={250}
              height={200}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-white text-white '>ABOUT US</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-5 pl-5 pr-5 w-full md:w-1/2 font-extralight text-white'>At <b>Elega</b>, we specialize in curating connections between businesses and top-tier tech talent, committed to excellence in every match.</div>
            <Link href="#vision">
              <div className='absolute bottom-2 m-auto left-0 right-0 flex flex-col justify-center items-center'>
                <div className='text-sm pt-3 pb-2 font-extralight text-white'>Our Vision</div>
                <button className='text-xl animate-bounce text-white'>&darr;</button>
              </div>
            </Link>
          </div>
        </div>
        <div id='vision' className='bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='relative flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='md:hidden mb-10 rounded-lg shadow-lg'
              src={'/hiring.png'}
              width={250}
              height={200}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-white text-white'>OUR VISION</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-5 pl-5 pr-5 w-full md:w-1/2 font-extralight text-white'>Our vision is to curate exceptional connections between businesses and top-tier tech talent, prioritizing quality matches over quantity. We aim to revolutionize the hiring process with precision and expertise.</div>
            <Link href="#mission">
              <div className='absolute bottom-2 m-auto left-0 right-0 flex flex-col justify-center items-center'>
                <div className='text-sm pt-3 pb-2 font-extralight text-white'>Our Mission</div>
                <button className='text-xl animate-bounce text-white'>&darr;</button>
              </div>
            </Link>
          </div>
        </div>
        <div id='mission' className='bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='relative flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='md:hidden mb-10 rounded-lg shadow-lg'
              src={'/first.png'}
              width={200}
              height={200}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-white text-white'>OUR MISSION</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-5 pl-5 pr-5 w-full md:w-1/2 font-extralight text-white'>Elega strives to become the trusted cornerstone of tech talent acquisition. Renowned for our unwavering commitment to excellence, innovative methodologies, and transformative impact on the future of recruitment.</div>
            <Link href="#problem">
              <div className='absolute bottom-2 m-auto left-0 right-0 flex flex-col justify-center items-center'>
                <div className='text-sm pt-3 pb-2 font-extralight text-white'>Why Us?</div>
                <button className='text-xl animate-bounce text-white'>&darr;</button>
              </div>
            </Link>
          </div>
        </div>
        <div id='problem' className='bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='relative flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='rounded-lg md:hidden mb-10 shadow-lg'
              src={'/hiring-confused.png'}
              width={250}
              height={200}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-white text-white'>The Problem</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-3 pl-3 pr-3 w-full md:w-1/2 font-extralight text-white'><b>The Cost of Traditional Hiring</b></div>
            <div className='text-center text-sm md:text-xl pt-3 pb-2 pl-3 pr-3 w-full md:w-1/2 font-extralight text-white'>Traditional recruitment agencies flood clients with quantity over quality.</div>
            <div className='text-center text-sm md:text-xl pt-1 pb-5 pl-3 pr-3 w-full md:w-1/2 font-extralight text-white'>Companies waste valuable engineering bandwidth sifting through numerous unqualified candidates.</div>
            <Link href="#solution">
              <div className='absolute bottom-2 m-auto left-0 right-0 flex flex-col justify-center items-center'>
                <div className='text-sm pt-3 pb-2 font-extralight text-white'>Our Solution</div>
                <button className='text-xl animate-bounce text-white'>&darr;</button>
              </div>
            </Link>
          </div>
        </div>
        <div id='solution' className='bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='relative flex flex-col h-screen w-full justify-center items-center'>
            <div className='relative md:hidden h-1/3 w-1/2 rounded-lg md:mb-10 shadow-lg'>
              <Image
                unoptimized
                src={'/job-hunt.png'}
                fill
                objectFit='cover'
              />
            </div>
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-white text-white'>Our Solution</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-3 pl-3 pr-3 w-full md:w-1/2 font-extralight text-white'><b>Quality Hiring Redefined</b></div>
            <div className='text-center text-sm md:text-xl pt-3 pb-2 pl-3 pr-3 w-full md:w-1/2 font-extralight text-white'>Elega focuses on quality over quantity. Think of us as your tech talent scouts.</div>
            <div className='text-center text-sm md:text-xl pt-1 pb-5 pl-3 pr-3 w-full md:w-1/2 font-extralight text-white'>Every candidate is rigorously vetted and pre-interviewed by our team of top-notch engineers. Clients receive comprehensive report cards for each candidate, saving valuable engineering bandwidth.</div>
            <Link href="#impact">
              <div className='absolute bottom-2 m-auto left-0 right-0 flex flex-col justify-center items-center'>
                <div className='text-sm pt-3 pb-2 font-extralight text-white'>What&apos;s the impact?</div>
                <button className='text-xl animate-bounce text-white'>&darr;</button>
              </div>
            </Link>
          </div>
        </div>
        <div id='impact' className='relative bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 md:pt-5 md:pb-5 md:pr-20 flex flex-col md:flex-row h-screen w-full justify-center items-center'>
          <div className='relative md:ml-10 w-full md:w-1/2 md:h-screen flex flex-col items-center justify-center'>
            <div className='text-md md:text-4xl pt-1 pb-1 md:pt-3 md:pb-2 pl-10 pr-10 md:font-extralight border border-white text-white'>VALUE WE ADD</div>
            <Link href="#contact">
              <div className='absolute bottom-20 m-auto left-0 right-0 flex flex-col justify-center items-center'>
                <div className='text-sm pt-3 pb-2 font-extralight text-white'>Join Us</div>
                <button className='text-xl animate-bounce text-white'>&darr;</button>
              </div>
            </Link>
          </div>
          <div className='flex pl-3 pr-3 mt-0 md:pl-0 md:pr-0 flex-col md:h-screen w-full md:w-3/4 justify-center items-center'>
            <div className='flex flex-row w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-1 md:pr-10 justify-center items-end'>
                <Image
                  unoptimized
                  className='rounded-lg shadow-lg'
                  src={'/winners.png'}
                  width={180}
                  height={180}
                />
              </div>
              <div className='flex flex-col pl-5 md:pl-10 w-1/2 justify-center items-start'>
                <div className='text-sm md:text-3xl pt-1 md:pt-6 pb-1 md:font-extralight text-white'>Access Top Talent</div>
                <div className='text-sm mt-2 pb-2 md:pt-2 font-extralight text-white'>Our rigorous vetting process ensures only the best candidates reach your desk.</div>
              </div>
            </div>
            <div className='flex flex-row mt-5 w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-1 md:pr-10 justify-center items-end'>
                <Image
                  unoptimized
                  className='rounded-lg shadow-lg'
                  src={'/bandwidth.png'}
                  width={180}
                  height={180}
                />
              </div>
              <div className='flex flex-col pl-5 md:pl-10 w-1/2 justify-center items-start'>
                <div className='text-sm md:text-3xl pt-1 md:pt-6 pb-1 md:font-extralight text-white'>Engineering Bandwidth</div>
                <div className='text-sm mt-2 pb-2 md:pt-2 font-extralight text-white'>Save engineering bandwidth by eliminating time wasted on unqualified candidates</div>
              </div>
            </div>
            <div className='flex flex-row mt-5 w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-1 md:pr-10 justify-center items-end'>
                <Image
                  unoptimized
                  className='rounded-lg shadow-lg'
                  src={'/report.png'}
                  width={180}
                  height={180}
                />
              </div>
              <div className='flex flex-col pl-5 md:pl-10 w-1/2 justify-center items-start'>
                <div className='text-sm md:text-3xl pt-1 md:pt-6 pb-1 md:font-extralight text-white'>Peace of Mind</div>
                <div className='text-sm mt-2 pb-2 md:pt-2 font-extralight text-white'>Receive detailed candidate report cards for prioritizing candidates</div>
              </div>
            </div>
          </div>
          <Link href="#contact">
            <div className='flex absolute bottom-2 m-auto left-0 right-0 md:hidden flex-col justify-center items-center'>
              {/* <div className='text-sm pt-3 pb-2 font-extralight text-white'>Join Us</div> */}
              <button className='text-xl animate-bounce text-white'>&darr;</button>
            </div>
          </Link>
        </div>
        <div id='contact' className='flex flex-col bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 border-y border-black h-screen w-full justify-center items-center'>
          <div className='text-lg md:text-4xl pt-2 md:pt-6 pb-2 md:pb-5 pl-10 pr-10 md:font-extralight border border-white text-white'>JOIN US</div>
          <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/fYN7bn3TsMzzbccS9">
            <div className='shadow-md shadow-cyan-900 flex justify-center w-64 mt-10 pt-3 pb-3 pl-2 pr-2 shadow-xl bg-cyan-500 text-white rounded-lg'>
              <span>Sign Up</span>
            </div>
          </a>
        <div className='text-lg md:text-4xl mt-20 pt-2 md:pt-6 pb-2 md:pb-5 pl-10 pr-10 md:font-extralight border border-white text-white'>GOT A QUESTION?</div>
          <div className='flex flex-row justify-center items-center mt-10 gap-5 w-128 mt-10'> 
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+919799143281">
              <Image
                unoptimized
                className='rounded-lg mr-5'
                src={'/whatsapp.webp'}
                width={50}
                height={50}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:contact@elega.co.in">
              <Image
                unoptimized
                src={'/gmail.png'}
                width={50}
                height= {50}
              />
            </a>
          </div>
        </div>
        <div className='bg-gray-950 flex justify-center items-center text-sm pt-3 pb-3 font-extralight text-white'>Copyright © 2024 Elega - All Rights Reserved.</div>
      </main>
    </div>
  );
}