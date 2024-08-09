function limitInputLength(element, maxLength) {
    element.addEventListener('input', function() {
        // Hanya membatasi angka jika lebih dari maxLength
        let value = this.value.replace(/\D/g, ''); // Menghapus karakter non-digit
        if (value.length > maxLength) {
            value = value.slice(0, maxLength); // Mengambil hanya maxLength karakter
        }
        this.value = value;
    });
}

        function calculateBMI() {
            // Mendapatkan nilai input dari form
            const weight = parseFloat(document.getElementById('weightInput').value);
            const height = parseFloat(document.getElementById('heightInput').value);

            // Validasi input
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                alert("Mohon masukkan nilai berat dan tinggi yang valid.");
                return;
            }

            // Menghitung BMI
            const heightInMeters = height / 100; // Mengubah tinggi dari cm ke meter
            const bmi = weight / (heightInMeters * heightInMeters);

            // Menampilkan hasil
            document.getElementById('bmi').textContent = bmi.toFixed(2);
            
            // Menentukan kategori BMI dan saran
            let description = '';
            let suggestion = '';
            if (bmi < 18.5) {
                description = 'Kurus';
                suggestion = 'Perbanyak Olahraga';
            } else if (bmi < 24.9) {
                description = 'Normal';
                suggestion = 'Terus Pertahankan Pola Hidup Sehat';
            } else if (bmi < 29.9) {
                description = 'Gemuk';
                suggestion = 'Pertimbangkan Mengurangi Berat Badan';
            } else {
                description = 'Obesitas';
                suggestion = 'Konsultasikan dengan Dokter';
            }
            document.getElementById('desc').textContent = description;
            document.querySelector('.bmi_saran').textContent = suggestion;
            
            // Menampilkan elemen hasil
            document.querySelector('.bmi_hasil').classList.remove('hidden');

           
            // Membatasi input hanya 3 digit
            const heightInput = document.getElementById('heightInput');
            const weightInput = document.getElementById('weightInput');
    
            limitInputLength(heightInput, 3); // Maksimal 3 digit
            limitInputLength(weightInput, 3); // Maksimal 3 digit
        }
