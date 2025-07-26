import  Header from '@/components/header';
import  HeroSection  from '@/components/hero-section';

function Home() {
  return (
    <main className="bg-portfolio-light min-h-screen">
      <Header />
      <HeroSection />
      <div className='w-75 bg-black border-1 border-gray-50'>
        <h2 className='text-red-700'>shahid</h2>
      </div>
      {/* <p>Hello</p> */}
    </main>
  );
}

export default Home