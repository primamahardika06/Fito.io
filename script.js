// BMI Start

// Fungsi untuk membatasi panjang input
function limitInputLength(element, maxLength) {
  element.addEventListener("input", function () {
    // Hanya membatasi angka jika lebih dari maxLength
    let value = this.value.replace(/\D/g, ""); // Menghapus karakter non-digit
    if (value.length > maxLength) {
      value = value.slice(0, maxLength); // Mengambil hanya maxLength karakter
    }
    this.value = value;
  });
}

// Fungsi untuk menghitung BMI
function calculateBMI() {
  // Mendapatkan nilai input dari form
  const weight = parseFloat(document.getElementById("weightInput").value);
  const height = parseFloat(document.getElementById("heightInput").value);

  // Validasi input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Mohon masukkan nilai berat dan tinggi yang valid.");
    return;
  }

  // Menghitung BMI
  const heightInMeters = height / 100; // Mengubah tinggi dari cm ke meter
  const bmi = weight / (heightInMeters * heightInMeters);

  // Menampilkan hasil
  document.getElementById("bmi").textContent = bmi.toFixed(2);

  // Reset semua elemen yang ingin disembunyikan atau ditampilkan
  const elementsToHide = [
    ".pola_makan_kurus",
    ".penyakit_kurus",
    ".pola_makan_ideal",
    ".penyakit_ideal",
    ".penyakit_obesitas",
    ".program_obesitas",
    ".program_kurus",
    ".program_menjaga",
  ];
  elementsToHide.forEach(selector => {
    document.querySelector(selector).style.display = "none";
  });

  // Menentukan kategori BMI dan saran serta menampilkan elemen yang sesuai
  let description = "";
  let suggestion = "";
  
  if (bmi < 18.5) {
    description = "Kurus";
    suggestion = "Perbanyak Olahraga";
    document.querySelector(".pola_makan_kurus").style.display = "flex";
    document.querySelector(".penyakit_kurus").style.display = "block";
    document.querySelector(".program_kurus").style.display = "flex";
  } else if (bmi < 24.9) {
    description = "Normal";
    suggestion = "Terus Pertahankan Pola Hidup Sehat";
    document.querySelector(".pola_makan_ideal").style.display = "flex";
    document.querySelector(".penyakit_ideal").style.display = "block";
    document.querySelector(".program_menjaga").style.display = "flex";
  } else if (bmi < 29.9) {
    description = "Gemuk";
    suggestion = "Pertimbangkan Mengurangi Berat Badan";
    document.querySelector(".pola_makan_kurus").style.display = "flex";
    document.querySelector(".penyakit_obesitas").style.display = "block";
    document.querySelector(".program_obesitas").style.display = "flex";
  } else {
    description = "Obesitas";
    suggestion = "Konsultasikan dengan Dokter";
    document.querySelector(".pola_makan_kurus").style.display = "flex";
    document.querySelector(".penyakit_obesitas").style.display = "block";
    document.querySelector(".program_obesitas").style.display = "flex";
  }

  document.getElementById("desc").textContent = description;
  document.querySelector(".bmi_saran").textContent = suggestion;

  // Menampilkan elemen hasil
  document.querySelector(".bmi_hasil").classList.remove("hidden");

  // Mengubah tombol menjadi tombol reset
  const button = document.querySelector(".button_bmi button");
  button.textContent = "Cek Ulang";
  button.onclick = function() {
    resetForm();
  };

  // Membatasi input hanya 3 digit
  const heightInput = document.getElementById("heightInput");
  const weightInput = document.getElementById("weightInput");

  limitInputLength(heightInput, 3);
  limitInputLength(weightInput, 3);
}

// Fungsi untuk mereset form
function resetForm() {
  // Reset form: Mengosongkan inputan
  document.getElementById("bmiForm").reset();

  // Mengembalikan tombol menjadi "Cek Sekarang"
  const button = document.querySelector(".button_bmi button");
  button.textContent = "Cek Sekarang";
  button.onclick = function() {
    calculateBMI();
  };

  // Menyembunyikan hasil BMI dan semua elemen terkait
  document.querySelector(".bmi_hasil").classList.add("hidden");

  const elementsToHide = [
    ".pola_makan_kurus",
    ".penyakit_kurus",
    ".pola_makan_ideal",
    ".penyakit_ideal",
    ".penyakit_obesitas",
    ".program_obesitas",
    ".program_kurus",
    ".program_menjaga",
  ];
  elementsToHide.forEach(selector => {
    document.querySelector(selector).style.display = "none";
  });

  // Mengosongkan inputan dan menyembunyikan hasil BMI
  document.getElementById("bmi").textContent = "";
  document.getElementById("desc").textContent = "";
  document.querySelector(".bmi_saran").textContent = "";
}


// BMI End

// Loader Start
document.addEventListener("DOMContentLoaded", function () {
  const loaderContainer = document.querySelector(".loader-container");
  const loaderVideo = loaderContainer.querySelector("video");

  loaderVideo.play();

  loaderVideo.onended = function () {
    document.body.classList.add("loaded");
  };

  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.add("loaded");
    }, 6500);
  });
});

// Loader End

// artikel start
function toggleSelengkapnya() {
  var selengkapnyaDiv = document.querySelector(".selengkapnya");
  var button = document.getElementById("read-more");

  if (
    selengkapnyaDiv.style.display === "none" ||
    selengkapnyaDiv.style.display === ""
  ) {
    selengkapnyaDiv.style.display = "grid";
    button.innerText = "Tampilkan Lebih Sedikit";
  } else {
    selengkapnyaDiv.style.display = "none";
    button.innerText = "Baca Selengkapnya";
  }
}

// artikel end

// icon di klik start
document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen tombol
  const btnPria = document.querySelector("#genderPria button");
  const btnWanita = document.querySelector(".gender_wanita button");

  // Fungsi untuk mengaktifkan tombol Pria dan menonaktifkan tombol Wanita
  btnPria.addEventListener("click", function () {
    btnPria.classList.add("active");
    btnWanita.classList.remove("active");
  });

  // Fungsi untuk mengaktifkan tombol Wanita dan menonaktifkan tombol Pria
  btnWanita.addEventListener("click", function () {
    btnWanita.classList.add("active");
    btnPria.classList.remove("active");
  });
});

// icon di klik end


// Hamburger Start

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navHamburger = document.querySelector(".nav_hamburger");

  hamburger.addEventListener("click", function(event) {
      event.stopPropagation();

      if (navHamburger.style.right === "0px") {
          navHamburger.style.right = "-100%";
      } else {
          navHamburger.style.right = "0";
      }

      hamburger.classList.toggle("active");
  });

  document.addEventListener("click", function(event) {
      if (!navHamburger.contains(event.target) && !hamburger.contains(event.target)) {
          navHamburger.style.right = "-100%";
          hamburger.classList.remove("active");
      } else if (navHamburger.contains(event.target) && event.target.tagName !== 'A' && event.target.tagName !== 'BUTTON') {
          navHamburger.style.right = "-100%";
          hamburger.classList.remove("active");
      }
  });

  window.addEventListener("resize", function() {
      if (window.innerWidth > 768) {
          navHamburger.style.right = "-100%";
          hamburger.classList.remove("active");
      }
  });
});

// Hamburger End

