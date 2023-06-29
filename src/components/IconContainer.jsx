const IconContainer = ({ alt }) => {
  return (
    <a
      className={`logo ${alt ? "logo-alt" : ""}`}
      href="https://connecttheworld.hololivepro.com/"
      target="_blank"
    >
      <div>
        <img src="assets/pics/logo_pc_v2.webp" alt="" width={450} />
      </div>
    </a>
  );
};

export default IconContainer;
