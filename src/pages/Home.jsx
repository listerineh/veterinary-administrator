import Image from "../assets/animals.png";

const Home = () => {
  return (
    <div className="grid content-center justify-items-center h-screen px-10 text-center">
      <h1 className="text-5xl font-thin text-black dark:text-white">
        Welcome to {""}
        <span className="text-indigo-600 font-bold">PetVet</span> {""}
        <span className="text-green-400">veterinary</span>!
      </h1>
      <img src={Image} alt="Image photo" width={300} height={300} />
    </div>
  );
};

export default Home;
