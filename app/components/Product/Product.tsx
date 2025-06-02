import React from 'react'

const Product = () => {
    return (
        <section id="produk" className="py-18 bg-white">
            <div className="w-[90%] xl:w-[80%] mx-auto">
                <h3 className="text-center text-sm font-medium text-black mb-1">Produk Kami</h3>
                <h1 className="text-center text-xl md:text-2xl font-bold text-black mb-10">
                    Inovasi Produk Pertanian untuk Meningkatkan Kualitas dan Hasil Produksi
                </h1>

                <div className="space-y-6">
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row bg-white rounded-xl border border-[#F2F2F2] p-4 gap-5">
                        <img
                            src="/produk1.jpg"
                            alt="Pupuk Organik Cair"
                            className="w-120 h-60 object-cover rounded-md"
                        />
                        <div className="flex-1">
                            <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-2">
                                Pupuk Organik Cair
                            </span>
                            <h4 className="text-lg md:text-xl font-bold text-black mb-1">BioKompos Plus</h4>
                            <p className="text-base text-gray-700 mb-3 leading-relaxed">
                                Pupuk hayati berbasis mikroorganisme aktif untuk meningkatkan <br />
                                kesuburan tanah dan mempercepat pertumbuhan tanaman.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col md:flex-row bg-white rounded-xl border border-[#F2F2F2] p-4 gap-5">
                        <img
                            src="/produk2.jpg"
                            alt="Pupuk Daun Alami"
                            className="w-120 h-60 object-cover rounded-md"
                        />
                        <div className="flex-1">
                            <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-2">
                                Pupuk Daun Alami
                            </span>
                            <h4 className="text-lg md:text-xl font-bold text-black mb-1">NutriTan</h4>
                            <p className="text-base text-gray-700 mb-3 leading-relaxed">
                                Mengandung unsur mikro dan makro untuk meningkatkan <br />
                                fotosintesis dan mempercepat pembungaan serta pembuahan.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col md:flex-row bg-white rounded-xl border border-[#F2F2F2] p-4 gap-5">
                        <img
                            src="/produk3.jpg"
                            alt="Alat Monitoring Tanah"
                            className="w-120 h-60 object-cover rounded-md"
                        />
                        <div className="flex-1">
                            <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-2">
                                Alat Monitoring Tanah
                            </span>
                            <h4 className="text-lg md:text-xl font-bold text-black mb-1">SmartGrow Sensor</h4>
                            <p className="text-base text-gray-700 mb-3 leading-relaxed">
                                Alat sensor digital yang memantau suhu, kelembaban, dan <br />
                                pH tanah secara real-time — cocok untuk lahan hortikultura.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      


    )
}

export default Product