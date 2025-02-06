import Image from 'next/image'

export default function Header() {
  return (
    <header className="text-center py-10 content-center">
      <div className={"content-center container pb-6"}>
        <Image src={"/Referendum-Signature-Post-1024x1024.png"} alt={"Logo"} width={600} height={600} className={"mx-auto"} />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        FedUp Concordia Campaign
      </h1>
      <p className="text-xl text-pink-950">
        Demand Good Food for All at Concordia University! 🍎
      </p>
    </header>
  );
}
