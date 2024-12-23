import './App.css'
import './fonts/fonts.css'
import insta from './assets/images/insta.png'
import discord from './assets/images/discord.png'
import link from './assets/images/link.png'
import x from './assets/images/x.png'
import clublogo from './assets/images/clublogo.svg'
import site from './assets/images/site.svg'
import joindashboard from './assets/images/joindashboard.svg'

function App() {
  return (
    <footer className="bg-red-500 min-h-screen">
      <div className="mx-auto w-full max-w-screen-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col pt-16 space-y-4">
            <div>
              <h1 className=" pr-4 font-bold font-bricolage text-white"><span className='text-3xl italic'>[ -_ ]</span> <span className='text-3xl'>HACKCELERATE</span></h1>
              <p className="text-white pr-4 pt-5 font-semibold font-instrument text-sm ">INDIA'S BIGGEST COMMUNITY HACKATHON</p>
              <p className="text-white pt-3 font-bricolage text-base pr-14">March 8th-9th, 2025 - Chennai</p>
            </div>
            <div className="flex px-11 pt-1 space-x-7 mt-4">
              <img src={insta} alt="Instagram" className="w-8 h-8" />
              <img src={link} alt="LinkedIn" className="w-8 h-8" />
              <img src={discord} alt="Discord" className="w-8 h-8" />
              <img src={x} alt="X" className="w-8 h-8" />
            </div>
          </div>


          <div className="flex flex-col items-center space-y-4">
            <img src={clublogo} alt="Developer Students Club" className="w-2/4" />
            <p className="text-center font-bricolage text-white text-lg mt-4">
              Join Our Community to Get <br></br>Further Updates
            </p>
            <button className="flex items-center bg-transparent border border-white rounded-full px-4 py-2">
              <span className='font-semibold text-white text-xs font-bricolage'>JOIN DASHBOARD</span>
              <img src={joindashboard} alt="Join" className="w-6 h-6 ml-2" />
            </button>
          </div>

        
          <div className="flex flex-col items-center">
            <div className="text-left">
              <img src={site} alt="Developer Students Club" className="w-32 h-20 mb-[-19px]" /> {/* Added mb-[-10px] to reduce space */}
              <nav className="flex flex-col items-center">  {/* Removed pb-2 */}
                <a href="#" className="font-bricolag text-white text-lg text-left hover:underline">Home</a>
                <a href="#" className="font-bricolag text-white text-lg text-left hover:underline">About</a>
                <a href="#" className="font-bricolag text-white text-lg text-left hover:underline">Timeline</a>
                <a href="#" className="font-bricolag text-white text-lg text-left hover:underline">Tracks</a>
                <a href="#" className="font-bricolag text-white text-lg text-left hover:underline">Prizes</a>
                <a href="#" className="font-bricolag text-white text-lg text-left hover:underline">Partners</a>
                <a href="#" className="font-bricolag text-white pb-2 text-lg text-left hover:underline">Faq</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App