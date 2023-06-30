import TimeLeft from "./TimeLeft";
const IconContainer = ({ alt, timeLeft }) => {
  return (
    <div className={`icon-container  ${alt ? "icon-container-alt" : ""}`}>
      <a
        className={`logo`}
        href="https://connecttheworld.hololivepro.com/"
        target="_blank"
      >
        <div>
          <img src="assets/pics/logo_pc_v2.webp" alt="" width={450} />
        </div>
      </a>
      <TimeLeft alt={alt} timeLeft={timeLeft}></TimeLeft>
    </div>
  );
};

export default IconContainer;
