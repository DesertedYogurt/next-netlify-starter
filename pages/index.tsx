import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from '../components/button'
import { Image } from '../components/image'
import { useStore } from '../lib/state'

const Home: NextPage = () => {
  const { mouseY, mouseX } = useStore(state => state.mousePos)
  const scrollData = useStore(state => state.scrollData)

  return (
    <>
      <Head>
        <title>Yogurt Verse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className='w-full h-[100vh] max-w-[100vw]'
      >
      {/* Nav */}
        <div
          className='absolute top-0 bg-theme-white h-20 w-full shadow-lg'
        >
          <div
            className='flex lg:max-w-[80%] lg:mx-auto'
          >
            <Image
              className='p-2 hidden sm:block'
              src='/android-chrome-192x192.png'
              width={70}
              height={70}
            />
            <div>
              <p
                className='headerFont font-bold text-lg mt-2 ml-4 text-theme-prime'
              >Yogurtverse</p>
              <p
                className='font-semibold opacity-70 ml-4'
              >
                IP: <span>123.123.123.123</span>
              </p>
            </div>
            <div
              className='ml-auto '
            >
              <a
                className='block mt-2 transform scale-75'
                href="https://yogurtverse.craftingstore.net/"
              >
                  <Button
                    onClick={() => {}}
                  >
                    <div className='flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                      <p className='mt-2 ml-2'>Shop</p>
                    </div>
                  </Button>
              </a>
            </div>
          </div>
        </div>

      {/* Landing */}
      <section>

          <div>

            <div
              className='absolute top-0 left-0 overflow-hidden w-[100vw] h-[100vh] bg-center -z-10'
            >
              <div
                className='w-full h-full '
                style={{
                  backgroundImage: 'url(/img/windmills.png)',
                  transform: 'scale(1.5)',
                  marginLeft: mouseX / 30 - 32,
                  marginTop: mouseY / 30 - 32
                }}
              />
            </div>

            <div
              className='my-[10%] px-2 w-full md:w-[36rem] lg:w-[48rem] mx-auto'
            >
              <h1
              className='text-6xl font-bold text-theme-white drop-shadow-md headerFont'
              >
                Lorem Ipsums Delta flora dello trel gred freh  dello trel gred freh
              </h1>
              <p
                className='text-theme-white bg-theme-black/50 py-2 px-6 w-fit text-lg rounded font-semibold mt-4'
              >
                IP: <span>123.123.123.123</span>
              </p>

              <a href="https://yogurtverse.craftingstore.net/">
                <Button
                  className='mt-8'
                  onClick={() => {}}
                >
                  <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                    <p className='mt-2 ml-2'>Shop</p>
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </section>
        {/* new section */}
        <section className='relative w-full h-full overflow-hidden'>
          {/* background */}
          <div className='absolute top-12 bg-theme-white w-[140%] h-[140vh] -rotate-[4deg]' />

          {/* content */}
          <div className='container flex flex-col md:flex-row lg:max-w-[80%] py-[20rem] w-full mx-auto' >
            <div className='block rounded-lg min-w-[25rem] min-h-[25rem] overflow-hidden lg:ml-[16rem]' >
                <Image
                  src='/img/quest-small.png'
                  width={400}
                  height={400}
                />
            </div>

            <div className='tezt-theme-black z-10 md:pl-6 lg:pl-16'>
              <h3
                className='headerFont text-2xl lg:text-4xl pt-6 text-theme-prime'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec enim</h3>
              <p
                className='pt-7 md:mr-28'
              >
                Sit amet massa iaculis pharetra. Ut suscipit sem ultricies, iaculis turpis in, interdum mauris. In hac habitasse platea dictumst. Mauris aliquet faucibus libero, ut pellentesque tellus ullamcorper ut. Morbi egestas, turpis vel dictum elementum, felis ex commodo massa, at commodo ipsum ligula et dui. Aliquam rhoncus lobortis nibh, in malesuada sapien lobortis sed. Nam vel tellus vulputate, dapib
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default Home
