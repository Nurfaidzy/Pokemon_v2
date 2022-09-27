import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="absolute">
      <div className="fixed w-full">
        <div className="py-8 bg-white shadow-lg px-[5%] flex justify-between bg-white/60 backdrop-blur-lg">
          <div className="font-bold text-2xl">
            <a href="/Pokemon_v2/">
              <motion.img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                alt="pokemon"
                whileTap={{ scale: 1.4 }}
                className="w-[100px] h-fit"
              />
            </a>
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
    </div>
  );
};

export default Navbar;
