export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4 sm:px-6 bg-black text-center">
      <div className="mb-4 text-2xl font-bold tracking-widest uppercase">BlackMarket</div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-8 text-gray-500 text-sm">
        <a href="#" className="hover:text-white transition-colors">ກ່ຽວກັບເຮົາ</a>
        <a href="#" className="hover:text-white transition-colors">ນອກຍະບາຍ</a>
        <a href="#" className="hover:text-white transition-colors">ຕິດຕໍ່</a>
      </div>
      <p className="text-gray-600 text-xs sm:text-sm">© 2025 BlackMarket. All rights reserved in Monochrome.</p>
    </footer>
  );
}

