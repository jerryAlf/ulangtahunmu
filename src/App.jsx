import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/biaaaa.jpg";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CardImage from "./components/CardImage";
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${
          variant == "primary" && "bg-white text-black "
        } ${variant == "secondary" && "bg-white/30 text-white"}`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white ">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Happy Birthday for uu &#127802;
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Caraku mengucapkan Selamat Ulang Tahun untukmu, sebelum kembali
            menghilang ke dalam keramaian.
            Pernahkah kamu menyadari bahwa ada satu jiwa yang begitu terpaut
            padamu? Seperti inilah caraku mengutarakan kekagumannya
            sekaligus mengucapkan Selamat Ulang Tahun yang Ke-17 teruntuk
            manusia berparas indah, Ia bernama Robiatul Adawiyah.
          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Click "Play" to see Details
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button variant={"primary"} onClick={() => setOpenModal(true)}>
              <FaPlay />
              Play
            </Button>
            <Button variant={"secondary"}>
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">
            More to Explore : Robiatul Adawiyah`s
          </h3>
          <section className=" grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage src={image.src} key={idx} idx={idx} />
            ))}
          </section>
        </div>
      </section>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">Happy Birthday, Biaaaa </h1>
          <p>Haloo Raaaaa~</p>
          <p>
          Biaa, kamu lahir 17 tahun yang lalu, tepat di hari ini. Aku penasaran 
          apakah kamu sudah lahir ke dunia saat ini. 
          17 tahun yang lalu, di hari ini, aku belum lahir. <br />{" "}
            Tetapi aku merasa sangat bahagia dengan keberadaanmu.
            <br />
            <br />
            Dari banyaknya manusia yang mengucapkan Selamat Ulang Tahun untukmu,
            aku juga ingin menjadi salah satu diantaranya. <br />
            Selamat merayakan segala hal baik dalam hidupmu dengan penuh suka
            cita yaa, semua tentangmu pantas untuk dirayakan. Semoga semesta
            selalu melindungi dimanapun kamu berada, dijauhkan dari segala lalai
            dalam beribadah dan berkenan mengabulkan segala inginmu. Aku disini
            hanya bisa mengurai doa-doa pada sang pencipta agar semua tentangmu
            selalu baik-baik saja dan selalu mengaminkan doa-doa baik yang kamu
            langitkan. <br />
            <br /> Walau pertemuan kita hanya sebentar saja tetapi aku sangat bahagia mengetahui dirimu yang begitu indah.
            Sejak pertama kali bertemu dengan dirimu, aku pikir hatiku tak pernah
            lagi sama. Melihatmu tersenyum membuatku seperti manusia paling
            beruntung di dunia. Aku selalu mengingat betapa bahagianya saat
            pertama kali melihatmu sekaligus jatuh hati padamu. <br />
            Terimakasih yaaaa, karna telah hadir dan menjadi bagian dari
            perjalanan-ku yang panjang ini.
            
            <br /> Terakhir, semoga dibahagiakanlah kamu tahun ini dan
            selama-lamanyaaa~.
          </p>
          <p>
             &#128151;&#127802;
            <br />i still waiting for <u>
              </u>― jerrrr&#128060;
          </p>
        </div>
      </Modal>
      <footer className="bg-black/100 text-white py-5 -mt-4">
        <div className="container mx-auto text-center">
          <p className="font-semibold lg:text-base">
            Dibuat oleh{" "}
            <a
              href="https://www.instagram.com/fienyphieer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-600 hover:text-orange-500 transition duration-500 ease-in-out"
            >
              Jerry
            </a>
            &#128060; dengan sepenuh &#128151;.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
