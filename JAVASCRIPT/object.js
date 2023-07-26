// membuat objek literal 

const mhs = {
    // properti
    nama : 'Andi permadi',
    umur : 19,
    univ : 'Universitas Negeri Jakarta',
    // properti

    // membuat objek didalam objek
    alamat : {
        jalan : 'perintis kemerdekaan',
        kota : 'jakarta utara',
        rt : '03',
        rw : '06',
    },
    

    // method
    menyapa : function(){
        return 'Hallo perkenalkan nama saya '+ this.nama +' saya berumur '+ this.umur +' tahun saya berkuliah di '+ this.univ;
    }

}

// membuat objek use function declaration

function membuatObjekMahasiswa(nama, umur, univ){
    const mhs = {}
    mhs.nama = nama
    mhs.umur = umur
    mhs.univ = univ
    return mhs
}

const mhs2 = membuatObjekMahasiswa('desy', 18, 'unj')

// membuat objek use Constructor
function Mahasiswa(nama, umur, univ){
    this.nama = nama
    this.umur = umur
    this.univ = univ
}

const mhs3 = new Mahasiswa('nabila', 19, 'unj')