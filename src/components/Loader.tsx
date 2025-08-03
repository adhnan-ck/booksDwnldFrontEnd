import { RingLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <RingLoader color="#f08a41" size={50} />
    </div>
  );
}