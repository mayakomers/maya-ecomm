export default function PackageCard({ title, price, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center w-64">
      <h2 className="text-2xl font-bold text-pink-600">{title}</h2>
      <p className="text-lg text-gray-700">{price}/bulan</p>
      <a href={link} className="block mt-4 bg-pink-500 text-white py-2 px-4 rounded-lg">
        Daftar Sekarang
      </a>
    </div>
  );
}
