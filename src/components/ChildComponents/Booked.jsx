import { GiCrossedBones } from "react-icons/gi";

const Booked = () => {
  return (
    <div
      className=" w-50 flex flex-col justify-center items-center pt-5 ml-10 rounded-2xl gap-3 mb-5"
    >
      <button className="relative top-13 -right-14 bg-white border-2 border-black p-2 rounded-4xl">
        <GiCrossedBones />
      </button>
      <img src="/"className="w-40 rounded-2xl" />

      {/* <p className="pl-5 font-bold">{k.title_english.slice(0, 30)}</p> */}
    </div>
  );
};
export default Booked;
