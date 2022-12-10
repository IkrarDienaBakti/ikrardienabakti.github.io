var tanya = confirm('Kangen :( ... Mau bermain Batu - Kertas - Gunting?')
while (tanya == true){
    //Batu Gunting Kertas
    //pilihan ayang
    var ayang = prompt('ketikkan: Batu / Gunting / Kertas');

    //Pilihan Comp
    var comp = Math.random();
    if(comp <= 0.34){
        comp = 'Batu';
    } else if(comp >= 0.34 && comp < 0.67){
        comp = 'Kertas';
    } else{
        comp = 'Gunting';
    }
    //menentukan hasil permainan


    var hasil = '';
    if(ayang == comp){
        hasil = 'SERI!'
    } else if(ayang == 'Gunting'){
        hasil = (comp == 'Kertas') ? 'MENANG!' : 'KALAH!';
    } else if(ayang == 'Kertas'){
        hasil = (comp == 'Gunting') ? 'KALAH!' : 'MENANG!';
    } else if(ayang == 'Batu'){
        hasil = (comp == 'Kertas') ? 'KALAH!' : 'MENANG!';
    } else{
        alert('Masukkan pilihan yang benar sayanggg...');
    } if(ayang == comp || ayang == 'Gunting' || ayang == 'Kertas' || ayang == 'Batu'){
        alert('Kamu memilih : ' + ayang + ' dan komputer memilih : ' + comp + ' \nMaka hasilnya : Kamu ' + hasil);
    }



    tanya = confirm('Ingin bermain lagi sayang?')
}
alert('Semangat menjalani harimu sayangku :)')