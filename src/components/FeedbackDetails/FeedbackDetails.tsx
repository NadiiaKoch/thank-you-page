const FeedbackDetails: React.FC = () => {
  return (
    <div className="p-6 md:p-8 lg:max-w-[450px] bg-info rounded-2xl justify-start items-center gap-3 inline-flex">
      <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
        <div className="text-content text-sm font-medium font-['Inter'] leading-snug">
          Here is what we heard from you:
        </div>
        <div className="self-stretch text-gray-400 text-sm font-normal font-['Inter'] leading-snug">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo.
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
