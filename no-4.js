function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
      return "Nilai akhir harus lebih besar dari nilai awal";
    } else if (dataArray.length <= 5) {
      return "Jumlah angka dalam data Array harus lebih dari 5";
    } else {
      const hasilSeleksi = dataArray.filter((num) => nilaiAwal <= num && num <= nilaiAkhir);
      if (hasilSeleksi.length === 0) {
        return "Nilai tidak ditemukan";
      } else {
        hasilSeleksi.sort();
        return hasilSeleksi;
      }
    }
  }
  
// const nilaiAwal = 5;
// const nilaiAkhir = 20;
// const dataArray = [2, 25, 4, 14, 17, 30, 8];

// const nilaiAwal = 15;
// const nilaiAkhir = 3;
// const dataArray = [2, 25, 4, 14, 17, 30, 8];

// const nilaiAwal = 4;
// const nilaiAkhir = 17;
// const dataArray = [2, 25, 4];

const nilaiAwal = 5;
const nilaiAkhir = 7;
const dataArray = [2, 25, 4, 1, 30, 18];

const hasilSeleksi = seleksiNilai(nilaiAwal, nilaiAkhir, dataArray);

console.log(hasilSeleksi);
