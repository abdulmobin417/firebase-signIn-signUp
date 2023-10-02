const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1D9BF0] h-screen text-white">
      <h1 className="text-6xl font-semibold ">Welcome To</h1>
      <h1 className="text-6xl font-semibold">
        Login & Registration React Project
      </h1>
      <div className="mt-10">
        <p className="text-3xl font-semibold mb-6">
          Project Using Framework and Terms
        </p>
        <ol className="list-disc text-lg font-medium">
          <li>React</li>
          <li>React Router DOM</li>
          <li>Tailwind CSS</li>
          <li>React Icon</li>
          <li>React Toastify</li>
          <li>Firebase Email/Password Authentication</li>
          <li>Firebase Google Authentication</li>
          <li>Firebase Github Authentication</li>
          <li>Firebase Email Verify</li>
          <li>Firebase Password Reset</li>
          <li>Firebase User Profile Update</li>
          <li>Private Route</li>
          <li>Loading Spinner</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
