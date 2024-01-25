/* eslint-disable react/prop-types */

const Categorybox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col justify-center items-center p-3 gap-2 border-b-2 cursor-pointer hover:text-neutral-800 transition">
      <Icon size={26} />
      <div className="text-sm font-medium">{label} </div>
    </div>
  );
};

export default Categorybox;
