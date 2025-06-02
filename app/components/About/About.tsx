import React from 'react'

const About = () => {
    return (
        <div id="tentang" className="pt-10 pb-10 bg-white">
            <div className="w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                {/* Kiri: Judul */}
                <div className="space-y-4">
                    <h3 className="text-sm sm:text-base font-semibold text-black">Tentang Kami</h3>
                    <h1 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                        Mendorong Transformasi Pertanian <br />
                        Melalui Inovasi Teknologi
                    </h1>

                    {/* Tombol - ditampilkan hanya di desktop */}
                    <div className="hidden md:block">
                        <a
                            href="#_"
                            className="inline-block py-3 px-7 text-sm sm:text-base text-white bg-green-400 rounded-full hover:bg-green-500 transition duration-300"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>

                {/* Kanan: Paragraf + Tombol (versi mobile) */}
                <div className="md:flex md:justify-end md:text-right">
                    <div>
                        <p className="text-sm sm:text-base text-gray-800 leading-relaxed text-justify md:text-right max-w-xl">
                            Innovatek hadir sebagai jawaban atas tantangan dunia pertanian modern. Kami menggabungkan teknologi,
                            pengalaman lapangan, dan kepedulian terhadap lingkungan untuk menciptakan solusi pertanian yang lebih efisien,
                            ramah lingkungan, dan berdampak nyata bagi petani Indonesia.
                        </p>

                        {/* Tombol - hanya muncul di mobile */}
                        <div className="block md:hidden mt-4">
                            <a
                                href="#_"
                                className="inline-block py-3 px-7 text-sm sm:text-base text-white bg-green-400 rounded-full hover:bg-green-500 transition duration-300"
                            >
                                Selengkapnya
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
      
    )
}

export default About