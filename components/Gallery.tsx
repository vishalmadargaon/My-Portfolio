import { motion } from "framer-motion";

const images = [
  "/images/gallery/1.jpg.jpeg",
  "/images/gallery/2.jpg.jpeg",
  "/images/gallery/3.jpg.jpeg",
  "/images/gallery/4.jpg.jpeg",
  "/images/gallery/5.jpg.jpeg",
];

export default function Gallery() {
  return (
    <section className="bg-black py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        <h2 className="text-[18vw] font-black uppercase text-white/10 leading-none px-6 mb-20">
          OFF SCREEN
        </h2>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex gap-8 w-max mb-8"
        >
          {[...images, ...images].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.15,
                y: -25,
                rotateY: 15,
                rotateX: 10,
              }}
              className="w-[320px] h-[450px] overflow-hidden flex-shrink-0 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >
          {[...images, ...images].reverse().map((img, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.15,
                y: -25,
                rotateY: -15,
                rotateX: 10,
              }}
              className="w-[320px] h-[450px] overflow-hidden flex-shrink-0 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}