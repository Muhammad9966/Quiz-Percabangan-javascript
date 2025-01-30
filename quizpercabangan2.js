//Buatkanlah program yang meminta pengguna untuk memasukkan usia dan memberikan pesan apakah seseorang tersebut anak-anak (0-12 tahun), remaja (13-17 tahun), dewasa (18-59 tahun), atau lansia (60 tahun ke atas).
const nilai = 59;

if (nilai <= 60 && nilai >= 60 ) {
    console.log('Lansia');
  } else if (nilai <=59 && nilai >= 18) {
    console.log('Dewasa');
  } else if (nilai < 17 && nilai >= 13) {
    console.log('Remaja');
  } else if (nilai < 12 && nilai >= 0) {
    console.log('Anak-Anak');
  } 