import Image from "next/image";

const Aakanksha = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/aakanksha.jpeg"
        alt="Aakanksha"
        width={670}
        height={400}
        className="md:grayscale hover:filter-none transition-all rounded-lg shadow-lg dark:shadow-gray-800"
      />
    </div>
  );
};

export default Aakanksha;
