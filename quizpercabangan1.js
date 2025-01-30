//Buatkanlah program untuk menentukan kategori nilai pemrograman dasar berdasarkan rentang nilai berikut: A (85-100), B (70-84), C (50-69), D (30-49), E (0-29).
const nilai = 50;

if (nilai <= 100 && nilai >= 85) {
  console.log('Grade: A');
} else if (nilai < 84 && nilai >= 70) {
  console.log('Grade: B');
} else if (nilai < 69 && nilai >= 50) {
  console.log('Grade: C');
} else if (nilai < 49 && nilai >= 30) {
  console.log('Grade: D');
} else if (nilai < 29 && nilai >= 0) {
  console.log('Grade: E');
} else {
  console.log('Nilai tidak valid');
}