import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-green-500 text-white py-10 mt-16">
            <div className="w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-2xl font-bold">Innovatek</h4>
                    <p className="mt-4 text-sm leading-relaxed">
                        Memberikan solusi teknologi pertanian yang inovatif dan berkelanjutan
                        untuk masa depan pertanian Indonesia.
                    </p>
                </div>
                <div>
                    <h5 className="font-semibold text-lg mb-4">Navigasi</h5>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#beranda" className="hover:underline">Beranda</a></li>
                        <li><a href="#tentang" className="hover:underline">Tentang Kami</a></li>
                        <li><a href="#kontak" className="hover:underline">Kontak</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-lg mb-4">Kontak</h5>
                    <ul className="text-sm space-y-2">
                        <li>📍 Jl. Layur 00, Pasuruan</li>
                        <li>📞 +62 833 5555 6666</li>
                        <li>📧 innovatek@mail.com</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/80">
                © 2025 Innovatek. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer