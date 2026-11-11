
import Wave from "../components/Wave";
import backgroundVideo from "../assets/hero/BgVideo.mp4";
function Hero() {
  return (
    <section className="relative w-full overflow-hidden mt-0 pt-0 ">

      <video
        autoPlay
        loop
        muted
        playsInline
        className=" w-full object-contain"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute bottom-76 right-20 text-[#F3EFE8] w-107">
        <h1 className="text-xl text-[3rem] font-bold text-justify">آریوس؛فراتر از فناوری</h1>
        <p className="text-[20px] font-200  text-justify mt-5">هوشمند سازی فرآیند های سازمانی با راهکارهای نوین اتوماسیون؛برای بهره وری بیشتر و آینده ای هوشمند</p>
      </div>
      <Wave
        color="#f3efe8"
        backgroundColor="#000300"
        direction="bottom">
      </Wave>
    </section>
  );
}

export default Hero;