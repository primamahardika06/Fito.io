// BMI Start

function limitInputLength(element, maxLength) {
  element.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    this.value = value;
  });
}

// Fungsi untuk menghitung BMI
function calculateBMI() {

  const weight = parseFloat(document.getElementById("weightInput").value);
  const height = parseFloat(document.getElementById("heightInput").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Mohon masukkan nilai berat dan tinggi yang valid.");
    return;
  }

  // Menghitung BMI
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // Menampilkan hasil
  document.getElementById("bmi").textContent = bmi.toFixed(2);

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

  let description = "";
  let suggestion = "";
  
  if (bmi < 18.5) {
    description = "Kurus";
    suggestion = "Perbanyak Olahraga";
    document.querySelector(".pola_makan_kurus").style.display = "flex";
    document.querySelector(".penyakit_kurus").style.display = "block";
    document.querySelector(".program_kurus").style.display = "flex";
    document.querySelector(".kurus_fokus").style.display = "block";
    document.querySelector(".kurus_dft").style.display = "none";
    document.querySelector(".normal_fokus").style.display = "none";
    document.querySelector(".normal_dft").style.display = "block";
    document.querySelector(".gemuk_fokus").style.display = "none";
    document.querySelector(".gemuk_dft").style.display = "block";
    document.querySelector(".obesitas_fokus").style.display = "none";
    document.querySelector(".obesitas_dft").style.display = "block";

  } else if (bmi < 24.9) {
    description = "Normal";
    suggestion = "Terus Pertahankan Pola Hidup Sehat";
    document.querySelector(".pola_makan_ideal").style.display = "flex";
    document.querySelector(".penyakit_ideal").style.display = "block";
    document.querySelector(".program_menjaga").style.display = "flex";
    document.querySelector(".kurus_fokus").style.display = "none";
    document.querySelector(".kurus_dft").style.display = "block";
    document.querySelector(".normal_fokus").style.display = "block";
    document.querySelector(".normal_dft").style.display = "none";
    document.querySelector(".gemuk_fokus").style.display = "none";
    document.querySelector(".gemuk_dft").style.display = "block";
    document.querySelector(".obesitas_fokus").style.display = "none";
    document.querySelector(".obesitas_dft").style.display = "block";
  } else if (bmi < 29.9) {
    description = "Gemuk";
    suggestion = "Pertimbangkan Mengurangi Berat Badan";
    document.querySelector(".pola_makan_kurus").style.display = "flex";
    document.querySelector(".penyakit_obesitas").style.display = "block";
    document.querySelector(".program_obesitas").style.display = "flex";
    document.querySelector(".kurus_fokus").style.display = "none";
    document.querySelector(".kurus_dft").style.display = "block";
    document.querySelector(".normal_fokus").style.display = "none";
    document.querySelector(".normal_dft").style.display = "block";
    document.querySelector(".gemuk_fokus").style.display = "block";
    document.querySelector(".gemuk_dft").style.display = "none";
    document.querySelector(".obesitas_fokus").style.display = "none";
    document.querySelector(".obesitas_dft").style.display = "block";
  } else {
    description = "Obesitas";
    suggestion = "Konsultasikan dengan Dokter";
    document.querySelector(".pola_makan_kurus").style.display = "flex";
    document.querySelector(".penyakit_obesitas").style.display = "block";
    document.querySelector(".program_obesitas").style.display = "flex";
    document.querySelector(".kurus_fokus").style.display = "none";
    document.querySelector(".kurus_dft").style.display = "block";
    document.querySelector(".normal_fokus").style.display = "none";
    document.querySelector(".normal_dft").style.display = "block";
    document.querySelector(".gemuk_fokus").style.display = "none";
    document.querySelector(".gemuk_dft").style.display = "block";
    document.querySelector(".obesitas_fokus").style.display = "block";
    document.querySelector(".obesitas_dft").style.display = "none";
  }

  document.getElementById("desc").textContent = description;
  document.querySelector(".bmi_saran").textContent = suggestion;

  document.querySelector(".bmi_hasil").classList.remove("hidden");

  const button = document.querySelector(".button_bmi button");
  button.textContent = "Cek Ulang";
  button.onclick = function() {
    resetForm();
  };

  const heightInput = document.getElementById("heightInput");
  const weightInput = document.getElementById("weightInput");

  limitInputLength(heightInput, 3);
  limitInputLength(weightInput, 3);
}

// Fungsi untuk mereset form
function resetForm() {
  document.getElementById("bmiForm").reset();

  const button = document.querySelector(".button_bmi button");
  button.textContent = "Cek Sekarang";
  button.onclick = function() {
    calculateBMI();
  };

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

  document.getElementById("bmi").textContent = "";
  document.getElementById("desc").textContent = "";
  document.querySelector(".bmi_saran").textContent = "";
}


// BMI End

// Loader & Typing text Start
document.addEventListener("DOMContentLoaded", function () {
  const loaderContainer = document.querySelector(".loader-container");
  const loaderVideo = loaderContainer.querySelector("video");

  loaderVideo.play();

  function startTypingEffect() {
    const textElement = document.getElementById("typing-effect");
    const text = textElement.textContent;
    textElement.textContent = "";
    let index = 0;

    function typeText() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200);
      }
    }

    typeText();
  }
  loaderVideo.onended = function () {
    document.body.classList.add("loaded");
    startTypingEffect(); 
  };


  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.add("loaded");
      startTypingEffect();
    }, 6500); 
  });
});


// Loader & Typing text End

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

  const btnPria = document.querySelector("#genderPria button");
  const btnWanita = document.querySelector(".gender_wanita button");

  btnPria.addEventListener("click", function () {
    btnPria.classList.add("active");
    btnWanita.classList.remove("active");
  });

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

// sticky navbar start

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const stickyThreshold = 500;

  function makeNavbarSticky() {
      if (window.pageYOffset >= stickyThreshold) {
          navbar.classList.add("sticky");
      } else {
          navbar.classList.remove("sticky");
      }
  }

  window.onscroll = function () {
      makeNavbarSticky();
  };
});
// sticky navbar end

// animasi on scroll start

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.zoom-in-box');

  elements.forEach(function(element) {
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
});


// animasi on scroll end




