import ArrowButton from "./components/ArrowButton";

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h1 className="font-extrabold text-[120px]">Iqbal Rasetio.</h1>

     <ArrowButton route="/projects"/>
    </div>
  );
};

export default Home;
