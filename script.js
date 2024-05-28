// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hitungBtn = document.getElementById('hitung-btn');
    const alasInput = document.getElementById('alas');
    const resetBtn = document.getElementById('Reset-btn');
    const tinggiInput = document.getElementById('tinggi');
    const diketahuiP = document.getElementById('diketahui');

    hitungBtn.addEventListener('click', () => {
        const alas = parseFloat(alasInput.value);
        const tinggi = parseFloat(tinggiInput.value);

        if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
            const luas = (alas * tinggi) / 2;
            diketahuiP.textContent = `Diketahui: Luas Segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luas}`;
        } else {
            diketahuiP.textContent = 'Diketahui: Masukkan nilai yang valid untuk alas dan tinggi.';
        }

    });

        resetBtn.addEventListener('click', () => {
            alasInput.value = '';
            tinggiInput.value = '';
            diketahuiP.textContent = 'Diketahui : -';
    });
});
