import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import bgMitigasi from "../../../../../../public/bg-2.jpg";
import Router, { useRouter } from "next/router";
import axios from "axios";
import nookies from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//islogin
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role === "super admin") {
    return {
      redirect: {
        destination: "/dashboard/superAdmin",
      },
    };
  }

  return {
    props: {
      desaId: cookies.desa_id || null,
    },
  };
}

const Mitigasi = ({desaId}) => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [d, setD] = useState();
  const [e, setE] = useState();
  const [f, setF] = useState();
  const [g, setG] = useState();
  const [h, setH] = useState();
  const [i, setI] = useState();
  const [j, setJ] = useState();
  const [k, setK] = useState();

  const handleBack = () => {
    Router.back();
  };
  // const nextKuisioner = () => {
  //     Router.push('/dashboard/kajianResiko/kesiapsiagaan');
  //   };

  const router = useRouter();
  const { id } = router.query;

  const postData = async () => {
    const res = await axios.post("/api/pengkajian/mitigasi", {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f,
      g: g,
      h: h,
      i: i,
      j: j,
      k: k,
      pengkajian_id: id,
    });
    if (res.data.status === "success") {
      toast(`✅ ${res.data.message}`, {
        position: "top-right",
        autoClose: 1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 1,
        theme: "light",
      });
      setTimeout(() => {
        router.push(
          `/dashboard/user/kajianResiko/kesiapsiagaan?id=${encodeURIComponent(id)}`
        );
      }, 3000);
    } else {
      toast(`❌ ${res.data.message}`, {
        position: "top-right",
        autoClose: 0.1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 1,
        theme: "light",
      });
    }
  };

  return (
    <section className="container-fluid h-full relative">
      <ToastContainer />
      <div className="absolute -z-10 inset-0">
        <Image src={bgMitigasi} alt="bg-image" className="h-full" />
      </div>
      <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
        <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">
          Kuisioner Kajian Resiko Bencana/Krisis Kesehatan
        </div>
        <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
          <div className="text-black font-semibold text-[16px]">Mitigasi</div>
          <div className="my-[20px] w-full h-[50px] rounded bg-input-default border border-primary-default" />

          {/* Pertanyaan Start */}

          <div className="grid grid-cols-12">
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-0 lg:me-0 md:me-[20px] me-0">
              <div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    a. Fasilitas kepada Masyarakat dalam rangka pemberdayaan
                    penanggulangan bencana/krisis kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="fasilitas_pemberdaya"
                      onChange={(e) => setA(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Melakukan
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="fasilitas_pemberdaya"
                      onChange={(e) => setA(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Melakukan
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    b. Peta/pemetaan kapasitas sumber daya yang dapat digunakan
                    untuk penanggulangan bencana/krisis kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="peta_kapasitas"
                      onChange={(e) => setB(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="peta_kapasitas"
                      onChange={(e) => setB(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    c. Peta/pemetaan kelompok rentan per dusun
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="peta_rentan"
                      onChange={(e) => setC(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="peta_rentan"
                      onChange={(e) => setC(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    d. Peta/pemetaan jenis bencana per dusun
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="peta_bencana"
                      onChange={(e) => setD(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Memiliki
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="peta_bencana"
                      onChange={(e) => setD(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Memiliki
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    e. Peta arah evakuasi
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="peta_arah"
                      onChange={(e) => setE(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ada
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="peta_arah"
                      onChange={(e) => setE(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Ada
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    f. Petunjuk jalur evakuasi
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="petunjuk_jalur"
                      onChange={(e) => setF(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ada
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="petunjuk_jalur"
                      onChange={(e) => setF(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Ada
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
              <div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    g. Desa mengalokasikan anggaran dana untuk penanggulangan
                    bencana/risiko kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="alokasi_anggaran"
                      onChange={(e) => setG(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ada
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="alokasi_anggaran"
                      onChange={(e) => setG(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Ada
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    h. Data kejadian bencana/krisis kesehatan 5 tahun terakhir
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="data_kejadian"
                      onChange={(e) => setH(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ada
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="data_kejadian"
                      onChange={(e) => setH(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Ada
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    i. Data kontak person pemegang program penanggulangan
                    bencana/krisis kesehatan
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="data_kontak"
                      onChange={(e) => setI(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ada
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="data_kontak"
                      onChange={(e) => setI(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Ada
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    j. Media informasi yang dapat diakses oleh seluruh
                    masyarakat untuk meningkatkan kesadaran dalam kesipsiagaan
                    bencana
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="media_informasi"
                      onChange={(e) => setJ(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ada
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="media_informasi"
                      onChange={(e) => setJ(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Ada
                    </label>
                  </div>
                </div>
                <div className="mb-[16px]">
                  <div className="text-black font-semibold text-[16px] my-[10px]">
                    k. Sistem pemantauan 24 jam
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="ada"
                      value={true}
                      name="sistem_pemantau"
                      onChange={(e) => setK(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Ada
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      id="tidak"
                      value={false}
                      name="sistem_pemantau"
                      onChange={(e) => setK(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Ada
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pertanyaan End */}
        </div>

        <div className="my-5 w-full">
          <div className="grid grid-cols-12">
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-[14px] lg:me-[14px] md:me-[14px] me-0">
              <button
                type=""
                className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                onClick={handleBack}
              >
                Kembali
              </button>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:ms-[14px] lg:ms-[14px] md:ms-[14px] ms-0 xl:mt-0 lg:mt-0 md:mt-0 mt-4">
              <button
                type=""
                onClick={() => postData()}
                className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
              >
                Lanjut Kuisioner Berikutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mitigasi;
