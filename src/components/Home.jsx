import Footer from "./Footer"

export default function Home() {
  return(
    <div className="grid md:grid-cols-3 w-full">
        
      <div className="w-full md:col-span-2 p-10">
      <iframe className="w-full h-96" src="https://www.youtube.com/embed/55ULxYpWnws?controls=0">
</iframe>

      </div>
      <div className="m-auto pr-10 justify-center items-center text-center">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fuga eum commodi debitis, quam soluta voluptate, expedita voluptatibus voluptas, optio quia nostrum ab quod quis itaque dolorum. Qui, consequuntur eos?</p>
      </div>
      <div className="text-center w-screen"><Footer />
      </div>
    </div>
    )
}


