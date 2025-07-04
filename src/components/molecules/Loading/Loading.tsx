export function Loading({ color = "bg-primary" }: { color?: string }) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative inline-flex">
        <div className={`w-5 h-5 ${color} rounded-full`}></div>
        <div className={`w-5 h-5 ${color} absolute top-0 left-0 animate-ping rounded-full`}></div>
        <div className={`w-5 h-5 ${color} absolute top-0 left-0 animate-pulse rounded-full`}></div>
      </div>
    </div>
  );
}

export default Loading;

