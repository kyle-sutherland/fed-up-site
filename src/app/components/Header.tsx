import Image from "next/image";

export default function Header() {
  return (
    <header className="text-center py-10 content-center">
      <div className={"content-center header-image container pb-6"}>
        <Image
          src={"/Referendum-Signature-Post-1024x1024.png"}
          alt={"Logo"}
          width={500}
          height={500}
          className={"mx-auto"}
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        FedUp Concordia Campaign
      </h1>
      <p className="text-xl text-secondary">
        Demand Good Food for All at Concordia University! 🍎
      </p>
    </header>
  );
}
