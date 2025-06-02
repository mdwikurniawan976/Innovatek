import React from 'react'

const Contact = () => {
  return (
      <section id="kontak" className="py-12 bg-white">
          <div className="w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              {/* Konten Kiri */}
              <div>
                  <h2 className="text-lg font-semibold text-gray-800">Kontak</h2>
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug mt-2">
                      Terhubung dengan Innovatek untuk <br />
                      Solusi Pertanian yang Lebih Baik
                  </h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                      Kami siap membantu Anda—baik untuk konsultasi, kemitraan, pemesanan produk, maupun informasi lainnya. <br />
                      Jangan ragu untuk menghubungi tim kami melalui salah satu kanal berikut:
                  </p>

                  <div className="mt-6 space-y-4 text-gray-800 text-sm">
                      <div className="flex items-center gap-3">
                          <span>📞</span>
                          <span>+62 833 5555 6666</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <span>📧</span>
                          <span>innovatek@mail.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <span>📍</span>
                          <span>Jl. Layur 00, Pasuruan</span>
                      </div>
                  </div>
              </div>

              {/* Google Maps */}
              <div>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.017710647527!2d112.63893297499187!3d-7.681243992335754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d7f49cb0f577%3A0xac13cef9291fbd27!2sKab.%20Pasuruan!5e0!3m2!1sid!2sid!4v1748864970628!5m2!1sid!2sid"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl w-full"
                  ></iframe>
              </div>

          </div>
      </section>
  )
}

export default Contact