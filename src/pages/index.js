import Header from "../components/Header";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold text-pink-600">Selamat Datang ke Maya Ecomm</h1>
        <p className="text-lg text-gray-700 mt-3">Urus Chat & Order Shopee, Bantu Seller Fokus Jualan</p>

        {/* Pakej */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <PackageCard title="Pakej Smart" price="RM150" link="https://wa.me/60123781294?text=Pakej%20Smart" />
          <PackageCard title="Pakej Pro" price="RM300" link="https://wa.me/60123781294?text=Pakej%20Pro" />
          <PackageCard title="Pakej Ultimate" price="RM500" link="https://wa.me/60123781294?text=Pakej%20Ultimate" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
