import { IoCloseOutline } from "react-icons/io5";

function Chip() {
  return (
    <div className="flex gap-2 items-center bg-gray-200 rounded-3xl w-fit">
      <div className="w-8 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/women/81.jpg"
          alt="user-photo"
        />
      </div>
      <p>Isabella Gomez</p>
      <IoCloseOutline size={24} cursor="pointer" />
    </div>
  );
}

export default Chip;
