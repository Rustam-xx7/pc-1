import { useState } from "react";
import "./App.css";
import { motion, useScroll } from "motion/react";

function App() {
  const scrollYProgress = useScroll().scrollYProgress;

  return (
    <>
      <div>
        <motion.div
          className="bg-purple-600 origin-left rounded-full h-5 w-full fixed left-0 top-0"
          style={{
            scaleX: scrollYProgress,
          }}
        ></motion.div>
        <div>
          <motion.div
            className="w-50 h-50 bg-blue-500 rounded-xl border border-white border-2"
            initial={{ rotate: 0, x: 20, scale: 1 }}
            animate={{
              rotate: [0, 360, 0],
              x: [20, 500, 500, 20, 20],
              y: [20, 20, 500, 500, 20],
              scale: 1,
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              // repeat: Infinity,
              // repeatType: "loop",
              ease: "anticipate",
            }}
          ></motion.div>
          <motion.div
            className="h-50 w-50 bg-red-400 rounded-xl border-2"
            initial={{ rotate: 0, x: -500, y: -500, scale: 1 }}
            whileHover={{ backgroundColor: "violet", scale: 1.5 }}
            whileTap={{ backgroundColor: "green", scale: 1 }}
            drag
            whileDrag={{ scale: 0.8 }}
            dragConstraints={{ left: -500, right: 300, top: -500, bottom: 300 }}
            dragDirectionLock={true}
          ></motion.div>
        </div>
        <div className="text-2xl font-mono text-center mt-6 ">
          <h2 className="my-6">Scrolling based animations</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis
            id? Ut harum provident non deserunt sed possimus deleniti,
            voluptates nam? Est blanditiis aperiam cumque nulla unde odit fugit
            reprehenderit obcaecati dicta velit. Dolores facilis maxime ex
            repellendus nemo rerum, distinctio facere, inventore perferendis
            eaque omnis molestiae consequuntur doloremque cumque asperiores
            eligendi quae ad aspernatur laborum laboriosam id. Iure consequuntur
            id, ad provident eius, quod accusantium, libero eveniet voluptas
            doloremque nulla optio ducimus eos dolores beatae fugiat harum
            repudiandae repellendus sunt impedit officiis animi molestiae.
            Libero nesciunt quisquam inventore dicta voluptatum eligendi.
            Deserunt ipsa dignissimos enim odio, illum corrupti maxime dolor
            veniam facere, quibusdam, fugiat laborum ipsum! Nesciunt molestias
            ad aliquid quisquam, adipisci mollitia maiores quas ipsa dolorem
            ducimus laborum molestiae optio. Doloribus,
            <br />
            <br /> itaque optio sapiente tenetur vitae cumque blanditiis
            consequuntur molestiae nobis quasi neque eaque provident soluta
            perferendis corrupti commodi, reprehenderit veritatis eligendi
            voluptatum non architecto. Architecto sed praesentium quisquam ut,
            nobis minima ipsum, quaerat repellat sequi, sunt molestias iure.
            Nisi incidunt, cupiditate quo veniam doloribus, nam voluptate culpa
            amet nihil hic laudantium ipsa provident magni voluptatem aut quasi
            aperiam sed, deleniti ipsum tempore quidem repellat. Aspernatur
            dolores illo omnis eos. Harum culpa voluptatum numquam quia
            provident veritatis velit. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            consectetur quaerat ullam eligendi, saepe animi, nam praesentium
            perspiciatis sunt commodi molestiae assumenda vitae ducimus
            asperiores inventore dolorum qui velit facilis, iusto voluptatibus.
            Culpa rerum dolorem molestiae consequatur adipisci repellat earum.
            Accusantium, dolores vel distinctio quibusdam voluptatem praesentium
            libero veritatis repellat inventore voluptates iure maiores minus
            quod necessitatibus nemo consequuntur possimus saepe culpa
            consequatur sequi iusto tempora nulla delectus. Velit consequatur
            excepturi facere dolorum recusandae totam natus fugit, perferendis
            ullam consequuntur minima quae a voluptate dolorem! Maiores,
            laboriosam minus. Exercitationem provident, eligendi nihil quasi
            ipsa itaque adipisci excepturi sed placeat ipsam? <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            voluptas officiis ipsam iusto hic necessitatibus eveniet
            consectetur, omnis accusantium facere aliquid, nobis est. Quae
            aspernatur optio reiciendis, inventore ullam eum, aliquam vero
            accusantium cupiditate dolores laboriosam fuga id sequi similique
            animi dolore reprehenderit doloremque, voluptatum iure perferendis
            magnam quas nostrum minima. Explicabo, minima eos velit quisquam
            dolore assumenda aut ullam iure facilis veniam vero eaque eius vitae
            ratione fugiat. Voluptatem quisquam consequatur modi dolorum, saepe
            eos maiores minus voluptas mollitia, iusto distinctio nobis itaque
            odio numquam ut a hic sequi ipsa. Error eum officiis repellendus
            possimus corrupti eos totam veniam! <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            odit eligendi iusto corrupti beatae ipsa corporis, iste incidunt
            molestiae tenetur fugit perferendis harum, consectetur eos quia
            excepturi. Ad, consequatur nesciunt? Voluptate eum laborum odit unde
            consequuntur eaque fugiat doloremque sed porro quos harum ipsam,
            ducimus ipsa illum repellat! Ducimus tempora delectus nam
            voluptatibus, aut eaque tempore labore asperiores reiciendis,
            dolorum aliquam perspiciatis quas necessitatibus ullam qui, iure
            omnis nulla! Rerum placeat consectetur, asperiores numquam culpa id
            in blanditiis eaque adipisci nisi laudantium consequatur ex harum
            quam. Optio iusto dicta sapiente velit itaque illo voluptatibus at
            rem. Sed qui animi temporibus.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
