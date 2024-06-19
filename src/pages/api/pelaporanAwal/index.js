import prisma from "../../../../lib/prisma";
import { format } from "date-fns";

export default async function pelaporanHandler(req, res) {
  if (req.method === "POST") {
    const {
      jenisBencana,
      waktuKejadian,
      deskripsi,
      lokasi,
      desa_id,
      jumlahPendudukTerancam,
    } = req.body;

    if (
      !jenisBencana ||
      !waktuKejadian ||
      !deskripsi ||
      !lokasi ||
      !desa_id ||
      !jumlahPendudukTerancam
    ) {
      return res.status(400).json({ message: "Data tidak boleh Kosong!" });
    }

    function convertDateToDateTime(dateStr) {
      const date = new Date(dateStr);

      // Convert to ISO 8601 string
      const isoDate = date.toISOString();

      return isoDate;
    }

    try {
      const WaktuKejadian = convertDateToDateTime(waktuKejadian);

      const pelaporan = await prisma.pelaporanAwal.create({
        data: {
          jenisBencana,
          waktuKejadian: WaktuKejadian,
          deskripsi,
          lokasi,
          desa_id: parseInt(desa_id),
          jumlahPendudukTerancam: parseInt(jumlahPendudukTerancam),
        },
      });
      return res.status(200).json({
        message: "Berhasil Membuat Pelaporan Awal",
        status: "success",
        id_pelaporan: pelaporan.id,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error!", status: "failed" });
    }
  }
}