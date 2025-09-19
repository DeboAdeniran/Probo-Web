export const TryForFreeButton = ({ className, type }) => {
  return (
    <button
      className={`w-full rounded-full ${className} text-white font-medium py-3 px-7 `}
    >
      {type == "30days"
        ? "Try for FREE for 30 days"
        : type == "OpenRole"
        ? "See Open Roles"
        : "Try for Free"}
    </button>
  );
};
export const RequestDemo = ({ className }) => {
  return (
    <button
      className={`w-full rounded-full ${className} text-black font-medium border border-custom2-grey bg-white py-3 px-7 `}
    >
      Request Demo
    </button>
  );
};

const Buttons = { TryForFreeButton, RequestDemo };
export default Buttons;
