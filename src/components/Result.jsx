function Result({ user }) {
  return (
    <div className="flex justify-between items-center hover:bg-gray-100 px-3 py-1 cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="w-10 rounded-full overflow-hidden">
          <img src={user?.imageUrl} alt="user-image" />
        </div>
        <p>{user?.name}</p>
      </div>
      <p className="opacity-50">{user?.email}</p>
    </div>
  );
}

export default Result;
