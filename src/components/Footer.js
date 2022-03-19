import React from "react";
import { motion } from "framer-motion";
const footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div class="mx-8 text-center text-white">
          <div className="p-2 w-full">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              href="/"
              className="flex mx-auto text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
            >
              Load More
            </motion.button>
          </div>
        </div>
      </footer>
    </>
  );
};
export default footer;
