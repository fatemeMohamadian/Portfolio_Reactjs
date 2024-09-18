import './index.css'
import Sec1header from './components/section1/Sec1header'
import Headersec from './components/headersec/Headersec'
import About from './components/Aboutsec/About'
import Promain from './components/Projectsec/Promain'
import Contact from './components/contact/Contact'
import Foot from './components/footer/Foot'
export default function App() {
  return (
    <>
      <main className='w-full overflow-x-hidden mx-auto 2xl:container flex flex-wrap justify-center items-center'>
        <header className='w-[90%] flex flex-wrap justify-center items-center'>
          <Headersec />
        </header>
        <section className='w-[90%] mt-[30px] flex flex-wrap justify-center items-center'>
          <Sec1header />
        </section>
        <section className='w-[90%] overflow-hidden mt-[60px] flex flex-wrap justify-center items-center'>
          <About />
        </section>
        <section className='w-[90%] overflow-hidden mt-[80px] flex flex-wrap justify-center items-center'>
          <Promain />
        </section>
        <section className='w-[90%] mt-[30px] flex flex-wrap justify-center items-center'>
          <Contact />
        </section>
        <section className='w-[90%] mt-[40px] bg-[#517a643e] rounded-sm flex flex-wrap justify-center items-center border-[1px] border-[#8afed09c]'>
          <Foot />
        </section>
      </main>
    </>
  )
}

