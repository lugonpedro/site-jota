import { useState } from "react";
import FacebookButton from "./components/facebook-button";
import FacebookModal from "./components/facebook-modal";
import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_GA_ID);

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-800 text-white min-h-screen w-screen p-4">
      <h1 className="uppercase font-bold text-2xl">TA MALUCO PORRA</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora
        nesciunt iusto iste in minus eveniet, voluptatibus rerum consequuntur
        obcaecati ut, quibusdam vel sed officiis nulla natus commodi temporibus
        delectus!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora
        nesciunt iusto iste in minus eveniet, voluptatibus rerum consequuntur
        obcaecati ut, quibusdam vel sed officiis nulla natus commodi temporibus
        delectus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora
        nesciunt iusto iste in minus eveniet, voluptatibus rerum consequuntur
        obcaecati ut, quibusdam vel sed officiis nulla natus commodi temporibus
        delectus!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora
        nesciunt iusto iste in minus eveniet, voluptatibus rerum consequuntur
        obcaecati ut, quibusdam vel sed officiis nulla natus commodi temporibus
        delectus!
      </p>
      <FacebookButton onClick={() => setIsOpen(true)} />
      <FacebookModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
