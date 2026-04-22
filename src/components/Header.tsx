import Image from "next/image";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white" style={{ height: "100px" }}>
      <div className="h-full flex items-center px-10">
        <Image src="/images/logo.png" alt="ClearNova Logo" width={250} height={60} className="h-[60px] w-auto" priority />
      </div>
    </nav>
  );
}
