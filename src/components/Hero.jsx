import coffee from "../assets/coffee5.png";
// import Bean1 from "../assets/bean1.png";
// import Bean2 from "../assets/bean2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="from-slate-100 to-amber-950 bg-gradient-to-r mt-16">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 place-items-center min-h-[700px] relative px-6">
        {/* text section */}
        <div className="space-y-6 max-w-xl">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-amber-900 font-semibold font-sans text-3xl tracking-wide"
          >
            Welcome to Brew Haven
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-bold leading-tight"
          >
            <span className="block text-5xl md:text-6xl">
              Experience Artisanal
            </span>

            <span className="block text-7xl md:text-8xl font-extrabold text-amber-900 tracking-wide">
              COFFEEEEE
            </span>

            <span className="block text-4xl md:text-5xl">at Brew Haven</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Indulge in our carefully crafted brews, made from ethically sourced
            beans and brewed to perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="flex gap-4 pt-2"
          >
            <a href="#menu">
              <button className="bg-amber-900 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-amber-800 transition">
                View Menu
              </button>
            </a>

            <a href="#about">
              <button className="border-2 border-amber-900 text-amber-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-amber-50 transition">
                Our Story
              </button>
            </a>
          </motion.div>
        </div>

        {/* image section */}
        <div>
          <motion.img
            initial={{ opacity: 0, x: 120, scale: 0.6, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 360 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: "easeOut",
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            src={coffee}
            alt="coffee cup"
            className="w-[650px]"
          />
        </div>

        {/* floating beans */}

        {/* <motion.img
          initial={{ opacity: 0, x: 400, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 45 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src={Bean2}
          alt=""
          className="absolute hidden md:block bottom-2 left-60 w-20 rotate-45"
        />
        
        <motion.img
          initial={{ opacity: 0, x: 600, y: 200, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src={Bean1}
          alt=""
          className="absolute hidden md:block top-16 left-0 w-20"
        />

        <motion.img
          initial={{ opacity: 0, x: -100, y: 100, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 45 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src={Bean2}
          alt=""
          className="absolute hidden md:block w-20 top-0 right-0 -rotate-45"
        /> */}
      </div>
    </div>
  );
};

export default Hero;
