// nomor 1
let checkWords = /(?=.*[A-Z])/;
if (checkWords.test("JACK AND JACK")) {
    console.log("Huruf pertama adalah huruf besar");
} else {
    console.log("Huruf pertama adalah huruf kecil")
}

// nomor 2
let checkNumber = /^([^0-9]*[0-9]){10,12}[^0-9]*$/;
if (checkNumber.test("081277788899")) {
    console.log("Nomor yang anda masukkan benar");
} else {
    console.log("jumlah digit yang anda masukan salah");
}

// nomor 3
let checkSearch = /(?=.*[A-Z])/;
let word1 = "Bagaimana cara memulai usaha bisnis";
let word2 = "Bootcamp impact byte";
let word3 ="Status covid hari ini";

if (checkSearch.test(word1, word2, word3)) {
    console.log();
} else if  (checkSearch.test (word1)){
    console.log("Bagaimana cara memulai usaha bisnis");
} else if  (checkSearch.test (word2)){
    console.log("Bootcamp impact byte");
} else if  (checkSearch.test (word3)){
    console.log("Status covid hari ini");
} else {
}
console.log(checkSearch.test("Bagaimana cara memulai bisnis"));
console.log(checkSearch.test("bagaimana cara memulai bisnis"));

// nomor 4
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}