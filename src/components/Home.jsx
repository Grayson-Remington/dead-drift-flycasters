import Footer from "./Footer"

export default function Home() {
  return(
    <div className="grid md:grid-cols-3 w-full">
        
      <div className="w-full md:col-span-2 p-10">
        <h3 className="text-center m-4 text-3xl">Lastest Video:</h3>
        <iframe className="w-full h-[700px]" 
        src="https://www.youtube.com/embed/55ULxYpWnws?controls=0">
        </iframe>
        

      </div>
      <div className="m-auto pr-10 justify-center items-center text-center text-3xl">
        <p>Welcome! Dead Drift Flycasters is a team of passionate anglers! They travel around the US exploring various waterways.</p>
      </div>
      <div className="text-center w-screen"><Footer />
      </div>
    </div>
    )
}


