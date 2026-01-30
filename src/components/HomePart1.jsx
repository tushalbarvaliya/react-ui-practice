export const HomePart1 = () => {
  return (
    <div className="flex justify-center text-white my-12 px-4">
      <div className="w-full max-w-5xl">
        <div className="w-full md:w-7/12 lg:w-6/12">
          <h2 className="bg-linear-to-t from-yellow-400 to-red-600 bg-clip-text text-transparent font-bold text-xl sm:text-2xl">
            The wealth container platform.
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mt-4">
            The easiest way to launch your funds.
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-neutral-800 h-10 py-2 sm:h-12  rounded-3xl pl-4 text-white outline-0 w-full sm:w-auto flex-1"
            />

            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-3xl font-bold capitalize transition" type="submit">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
