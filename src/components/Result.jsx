function Result() {
  return (
    <div className="flex justify-between items-center hover:bg-gray-100 px-3 py-1 cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="w-10 rounded-full overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user-image"
          />
        </div>
        <p>Nick Jonas</p>
      </div>
      <p className="opacity-50">nick.jonas@example.com</p>
    </div>
  );
}

export default Result;
