import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="fixed w-full">
      <div className="py-8 bg-white shadow-lg px-[5%] flex justify-between bg-white/60 backdrop-blur-lg">
        <div className="font-bold text-2xl">
          <a href="/Pokemon_v2/">Pokemon</a>
        </div>
        <div>
          <a href="https://github.com/Nurfaidzy" className="flex gap-2">
            <div className="pt-1">
              <FaGithub />
            </div>
            <div>Mygithub</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
