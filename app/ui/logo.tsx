import Image from 'next/image';

export default function Logo() {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center`}>
      <Image
        src="/Rick-And-Morty-Logo.png"
        alt="Rick and Morty Logo"
        width={200}
        height={100}
        className="h-auto md:mr-4"
      />
      {/* <p className="text-[44px] text-center mt-4 md:mt-0">fandom</p> */}
    </div>
  );
}
