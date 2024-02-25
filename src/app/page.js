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
        <div id='home' className='flex flex-col md:flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full md:w-1/2 justify-center items-center'>
            <Image
              unoptimized
              className='hidden md:block rounded-lg shadow-lg'
              src={'/logo.png'}
              width={100}
              height={200}
            />
            <div className='text-lg mt-10 pb-2 pl-5 pr-5 pt-2 bg-black text-white font-extralight'>Elevating Tech Hiring</div>
            <div className='text-5xl pt-6 pb-5 pl-20 pr-20 font-extralight border border-black text-black'>Elega</div>
            <Link href="#about">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Know More</button>
            </Link>
          </div>
          <div className='flex bg-black w-full md:w-1/2 h-screen relative bg-white'>
            <Image
              unoptimized
              fill
              src={'/hiring-options.png'}
              alt="Tech Hiring"
            />
          </div>
        </div>
        <div id='about' className='bg-white border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='md:hidden mb-10 rounded-lg shadow-lg'
              src={'/hiring-search-profiles.png'}
              width={200}
              height={200}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-black text-black'>ABOUT US</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-5 pl-5 pr-5 w-full md:w-1/2 font-extralight text-black'>At <b>Elega</b>, we specialize in curating connections between businesses and top-tier tech talent, committed to excellence in every match.</div>
            <Link href="#vision">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Our Vision</button>
            </Link>
          </div>
        </div>
        <div id='vision' className='bg-white border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='md:hidden mb-10 rounded-lg shadow-lg'
              src={'/hiring.png'}
              width={200}
              height={200}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-black text-black'>OUR VISION</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-5 pl-5 pr-5 w-full md:w-1/2 font-extralight text-black'>Our vision is to curate exceptional connections between businesses and top-tier tech talent, prioritizing quality matches over quantity. We aim to revolutionize the hiring process with precision and expertise.</div>
            <Link href="#mission">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Our Mission</button>
            </Link>
          </div>
        </div>
        <div id='mission' className='bg-white border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='md:hidden mb-10 rounded-lg shadow-lg'
              src={'/first.png'}
              width={200}
              height={200}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-black text-black'>OUR MISSION</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-5 pl-5 pr-5 w-full md:w-1/2 font-extralight text-black'>Elega strives to become the trusted cornerstone of tech talent acquisition. Renowned for our unwavering commitment to excellence, innovative methodologies, and transformative impact on the future of recruitment.</div>
            <Link href="#problem">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Problem, we solve</button>
            </Link>
          </div>
        </div>
        <div id='problem' className='bg-white border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='rounded-lg md:hidden mb-10 shadow-lg'
              src={'/hiring-confused.png'}
              width={200}
              height={200}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-black text-black'>The Problem</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-3 pl-3 pr-3 w-full md:w-1/2 font-extralight text-black'><b>The Cost of Traditional Hiring.</b></div>
            <div className='text-center text-sm md:text-xl pt-3 pb-2 pl-3 pr-3 w-full md:w-1/2 font-extralight text-black'>Traditional recruitment agencies flood clients with quantity over quality.</div>
            <div className='text-center text-sm md:text-xl pt-1 pb-5 pl-3 pr-3 w-full md:w-1/2 font-extralight text-black'>Companies waste valuable engineering bandwidth sifting through numerous unqualified candidates.</div>
            <Link href="#solution">
              <button className='mt-2 md:mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Solution</button>
            </Link>
          </div>
        </div>
        <div id='solution' className='bg-white border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full justify-center items-center'>
            <Image
              unoptimized
              className='rounded-lg md:hidden mb-10 shadow-lg'
              src={'/job-hunt.png'}
              width={200}
              height={150}
            />
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 md:font-extralight border border-black text-black'>Our Solution</div>
            <div className='text-center text-sm md:text-xl pt-10 pb-3 pl-3 pr-3 w-full md:w-1/2 font-extralight text-black'><b>Quality Hiring Redefined.</b></div>
            <div className='text-center text-sm md:text-xl pt-3 pb-2 pl-3 pr-3 w-full md:w-1/2 font-extralight text-black'>Elega focuses on quality over quantity. Think of us as your tech talent scouts.</div>
            <div className='text-center text-sm md:text-xl pt-1 pb-5 pl-3 pr-3 w-full md:w-1/2 font-extralight text-black'>Every candidate is rigorously vetted and pre-interviewed by our team of top-notch engineers. Clients receive comprehensive report cards for each candidate, saving valuable engineering bandwidth.</div>
            <Link href="#impact">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>What&apos;s the impact?</button>
            </Link>
          </div>
        </div>
        <div id='impact' className='bg-white md:pt-5 md:pb-5 md:pr-20 flex flex-col md:flex-row h-screen w-full justify-center items-center'>
          <div className='bg-white md:ml-10 w-full md:w-1/2 md:h-screen flex flex-col items-center justify-center'>
            <div className='text-md md:text-4xl pt-1 pb-1 md:pt-3 md:pb-2 pl-10 pr-10 md:font-extralight border border-black text-black'>VALUE WE ADD</div>
            <Link href="#contact">
              <button className='mt-5 hidden md:block md:mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Join Us</button>
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
                <div className='text-sm md:text-3xl pt-1 md:pt-6 pb-1 md:font-extralight text-black'>Access Top Talent</div>
                <div className='text-sm mt-2 pb-2 md:pt-2 font-extralight text-black'>Our rigorous vetting process ensures only the best candidates reach your desk.</div>
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
                <div className='text-sm md:text-3xl pt-1 md:pt-6 pb-1 md:font-extralight text-black'>Engineering Bandwidth</div>
                <div className='text-sm mt-2 pb-2 md:pt-2 font-extralight text-black'>Save engineering bandwidth by eliminating time wasted on unqualified candidates</div>
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
                <div className='text-sm md:text-3xl pt-1 md:pt-6 pb-1 md:font-extralight text-black'>Peace of Mind</div>
                <div className='text-sm mt-2 pb-2 md:pt-2 font-extralight text-black'>Receive detailed candidate report cards for prioritizing candidates</div>
              </div>
            </div>
            <Link href="#contact">
              <button className='md:hidden mt-3 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Join Us</button>
            </Link>
          </div>
        </div>
        <div id='contact' className='flex flex-col bg-white border-y border-black h-screen w-full justify-center items-center'>
          <div className='bg-white text-lg md:text-4xl pt-2 md:pt-6 pb-2 md:pb-5 pl-10 pr-10 md:font-extralight border border-black text-black'>JOIN US</div>
          <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/fYN7bn3TsMzzbccS9">
            <div className='flex justify-center w-64 mt-10 pt-3 pb-3 pl-2 pr-2 shadow-xl bg-black text-white rounded-lg'>
              <span>Sign Up</span>
            </div>
          </a>
        <div className='bg-white text-lg md:text-4xl mt-20 pt-2 md:pt-6 pb-2 md:pb-5 pl-10 pr-10 md:font-extralight border border-black text-black'>GOT A QUESTION?</div>
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
              <div className='bg-white'>
                <Image
                  unoptimized
                  src={'/gmail.png'}
                  width={50}
                  height= {50}
                />
              </div>
            </a>
          </div>
        </div>
        <div className='bg-white flex justify-center items-center text-sm pt-3 pb-3 font-extralight text-black'>Copyright © 2024 Elega - All Rights Reserved.</div>
      </main>
    </div>
  );
}