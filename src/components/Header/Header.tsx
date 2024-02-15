import Button from "../Button";

const Header: React.FC = () => {
  return (
    <header className="h-11 md:h-16 py-2 md:px-8 py-4 flex flex-row justify-between items-center w-full z-20 p-4 h-18">
      <div className="h-7 flex flex-row ">
        <span className="logo text-2xl font-bold font-['Inter']">HEARD</span>
        <div className="flex items-end text-sm align-text-bottom font-medium font-['Inter'] text-content">
          by Elis
        </div>
      </div>
      <Button />
    </header>
  );
};

export default Header;
