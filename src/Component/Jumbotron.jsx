import { motion } from "framer-motion";

const Jumbotron = () => {
  return (
    <>
      <motion.div
        className="flex justify-center pt-[5%]"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div whileHover={{ scale: 1.5 }}>
          <img
            src="https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-Free-PNG.png"
            alt="pokemon"
            className="md:w-[200px] md:h-fit"
          />
        </motion.div>
        <div className="pt-[5%]">
          <motion.h1
            whileHover={{ scale: 1.5, x: 100 }}
            className="text-red-600  text-[100px] font-bold md:py-[5%]"
          >
            PIKACHU
          </motion.h1>
        </div>
      </motion.div>
    </>
  );
};

export default Jumbotron;
