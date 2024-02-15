import FeedbackDetails from "../../components/FeedbackDetails";
import FeedbackMessage from "../../components/FeedbackMessage";

const ThankYou: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row mt-6 px-4 md:px-8 md:mt-[15vh] justify-center items-center gap-6 md:gap-4">
      <FeedbackMessage />
      <FeedbackDetails />
    </main>
  );
};

export default ThankYou;
