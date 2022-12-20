import Footer from "./Footer"

export default function Team() {
  return(
    <div className="grid md:grid-cols-3 w-full">
      <div className="grid grid-cols-2 grid-rows-2 w-full">
          <div className="m-auto text-center row-span-2">Image</div>
          <h1 className="text-center m-auto text-3xl">Gray</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium perspiciatis a asperiores, error porro atque iusto at aperiam quo temporibus ipsa corporis aliquid modi beatae? Itaque nesciunt quod molestias.</p>



      </div>
      <div className="Tom">Tom</div>
      <div className="Tom">John</div>
      <div className="Hans">Hans</div>
      <div className="text-center w-screen"><Footer />
      </div>
    </div>
    )
}


