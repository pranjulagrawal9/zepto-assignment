import { IoCloseOutline } from "react-icons/io5";

function Chip({ name, imageUrl, onRemove, isHighLight }) {
  return (
    <div
      className={`flex gap-2 items-center bg-gray-200 rounded-3xl w-fit ${
        isHighLight ? "border-2 border-blue-500" : ""
      }`}
    >
      <div className="w-8 rounded-full overflow-hidden">
        <img src={imageUrl} alt="user-photo" />
      </div>
      <p>{name}</p>
      <IoCloseOutline size={24} cursor="pointer" onClick={onRemove} />
    </div>
  );
}

export default Chip;
