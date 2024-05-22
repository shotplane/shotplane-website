import { FaAddressBook, FaGamepad, FaHome, FaStarOfLife, FaSuperpowers } from "react-icons/fa";

const BottomActions = () => {
  return (
    <div className="fixed max-w-md bottom-3 px-2 w-full z-50">
      <div className=" bg-white shadow-lg z-100 rounded-3xl opacity-90">
        <div className="grid grid-cols-5">
          <div className="p-4 text-28">
            <FaHome />
          </div>
          <div className="p-4 text-28">
            <FaAddressBook />
          </div>
          <div className="p-4 text-28">
            <FaGamepad />
          </div>
          <div className="p-4 text-28">
            <FaStarOfLife />
          </div>
          <div className="p-4 text-28">
            <FaSuperpowers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomActions;