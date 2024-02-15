import { IoCheckmarkOutline } from "react-icons/io5";

const FeedbackMessage: React.FC = () => {
  return (
    <div className="flex-col justify-start md:justify-start md:items-start md:min-w-80 items-center gap-7 inline-flex">
      <div className="w-16 h-16 py-4 bg-emerald-500 bg-opacity-20 rounded-2xl flex-col justify-center items-center gap-2.5 flex">
        <IoCheckmarkOutline className="w-8 h-8 text-emerald-500" />
      </div>
      <div className="flex-col justify-start items-center md:justify-start md:items-start gap-2 flex">
        <div className="text-center md:text-start text-content text-3xl font-semibold font-['Inter'] leading-10">
          Thank you!
        </div>
        <div className="text-gray-400 text-base font-light font-['Inter'] leading-tight">
          Your feedback has been submitted.
        </div>
      </div>
    </div>
  );
};

export default FeedbackMessage;
