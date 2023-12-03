export const LoadingSkeleton = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center">
      <h1 className="title my-4 ">Star Wars Table</h1>
      <div
        role="status"
        className="max-w-2xl p-4 space-y-4 border border-gray-200 divide-y divide-zinc-700 shadow animate-pulse md:p-6 rounded-md "
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2.5 bg-zinc-700 rounded-full  w-24 mb-2.5" />
            <div className="w-32 h-2 bg-zinc-500 rounded-full " />
          </div>
          <div className="h-2.5 bg-zinc-700 rounded-full  w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-zinc-700 rounded-full  w-24 mb-2.5" />
            <div className="w-32 h-2 bg-zinc-500 rounded-full " />
          </div>
          <div className="h-2.5 bg-zinc-700 rounded-full  w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-zinc-700 rounded-full  w-24 mb-2.5" />
            <div className="w-32 h-2 bg-zinc-500 rounded-full " />
          </div>
          <div className="h-2.5 bg-zinc-700 rounded-full  w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-zinc-700 rounded-full  w-24 mb-2.5" />
            <div className="w-32 h-2 bg-zinc-500 rounded-full " />
          </div>
          <div className="h-2.5 bg-zinc-700 rounded-full  w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-zinc-700 rounded-full  w-24 mb-2.5" />
            <div className="w-32 h-2 bg-zinc-500 rounded-full " />
          </div>
          <div className="h-2.5 bg-zinc-700 rounded-full  w-12" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
