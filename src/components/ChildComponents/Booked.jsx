import { GiTireIronCross } from "react-icons/gi";

const Booked = ({img}) => {
  return (
    <div
      className="w-50 h-70 flex pt-5 ml-10 rounded-2xl gap-3 mb-5"
    >
      <button className="relative top-3 left-45 bg-white p-2 rounded-4xl h-8">
        <GiTireIronCross />
      </button>
      <img src={img} className="w-45 h-70 rounded-2xl" />
    </div>
  );
};
export default Booked;
