import React from 'react'
export const Article = () => {
    return (
        <section id="artikel" className="py-16 bg-white">
            <div className="w-[85%] xl:w-[80%] mx-auto">
                {/* Judul */}
                <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-700">Artikel</h4>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                        Informasi, Tips, dan Tren Seputar Pertanian Modern dan Berkelanjutan
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    {/* Artikel Utama */}
                    <div className="md:col-span-2 space-y-4">
                        <img
                            src="/artikel1.jpg"
                            alt="Artikel utama"
                            className="w-full md:max-w-[60%] h-[380px] object-cover rounded-xl"
                        />

                        <p className="text-sm text-gray-500">27 February 2025</p>
                        <h3 className="text-xl font-semibold text-gray-900">
                            Teknologi Pertanian yang Wajib Diketahui Petani Milenial
                        </h3>
                        <p className="text-gray-700">
                            Teknologi seperti sensor kelembaban, drone <br /> dan aplikasi manajemen
                            tani mulai banyak <br /> digunakan di Indonesia
                        </p>
                        <button className="mt-1 mb-10 px-5 py-2 bg-green-400 text-white text-sm font-medium rounded-full hover:bg-green-500 transition">
                            Selengkapnya
                        </button>
                    </div>

                    {/* Artikel Kecil di Kanan */}
                    <div className="space-y-6 md:-ml-90">
                        {[
                            {
                                img: "/artikel2.jpg",
                                date: "26 February 2025",
                                title: "Cara Membuat Kompos Sendiri dari Limbah Rumah Tangga",
                                desc: "Manfaatkan sampah organik jadi pupuk alami, ramah lingkungan,\n dan hemat biaya untuk pertanian sehari-hari."
                            },
                            {
                                img: "/artikel3.jpg",
                                date: "25 February 2025",
                                title: "Apa Itu Smart Farming? Ini Manfaat dan Contohnya di Indonesia",
                                desc: "Teknologi pertanian modern yang bantu petani bekerja lebih efisien,\n produktif, dan terintegrasi dengan data."
                            },
                            {
                                img: "/artikel4.jpg",
                                date: "24 February 2025",
                                title: "Pupuk Hayati vs Pupuk Kimia: Mana yang Lebih Efektif?",
                                desc: "Kenali perbedaan, manfaat, dan penggunaan ideal dari masing-masing \n jenis pupuk untuk hasil panen optimal."
                            },
                            {
                                img: "/artikel5.jpg",
                                date: "23 February 2025",
                                title: "Tips Menanam Sayuran Organik di Lahan Sempit",
                                desc: "Cocok untuk pemula yang ingin bercocok tanam di pekarangan rumah\n dengan cara sehat dan berkelanjutan."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-start gap-4">
                                <img
                                    src={item.img}
                                    alt="thumbnail"
                                    className="w-full md:w-60 h-auto object-cover rounded-lg"
                                />
                                <div>
                                    {item.date && (
                                        <p className="text-[10px] sm:text-xs text-gray-500 mb-1">{item.date}</p>
                                    )}
                                    <h4 className="text-[13px] sm:text-base font-semibold text-gray-800 leading-snug">
                                        {item.title}
                                    </h4>
                                    {item.desc.split("\n").map((line, i) => (
                                        <p key={i} className="text-[13px] sm:text-sm text-black">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
