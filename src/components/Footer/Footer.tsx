const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6">
        <div className="text-gray-600 text-sm text-center md:text-start font-normal font-['Inter']">
          HEARD is an AI chatbot that can talk to the community and get feedback
          on any topic.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#learn-more"
            className="px-4 py-1.5 text-gray-600 text-sm font-medium font-['Inter'] underline"
          >
            Learn more
          </a>
          <a
            href="#sign-up"
            className="px-4 py-1.5 rounded-md border border-gray-600 text-gray-600 text-sm font-medium font-['Inter']"
          >
            Sign up
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
