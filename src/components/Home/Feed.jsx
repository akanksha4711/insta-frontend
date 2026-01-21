import { Posts } from "./Posts";

export const Feed = () => {
  return (
    <div className="flex flex-col gap-6 mt-4 items-center">
      <div>Status bar</div>
      <Posts />
    </div>
  );
};
