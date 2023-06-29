const InfoContainer = ({ children }) => {
  return (
    <div className={"grow flex flex-col justify-evenly items-center h-full"}>
      {children}
    </div>
  );
};

export default InfoContainer;
