// latihan membuat objek angkot

function Angkot(sopir, jurusan, penumpang, duit){
    this.sopir = sopir
    this.jurusan = jurusan
    this.penumpang = penumpang
    this.duit = duit

    // method
    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0 ){
            alert('angkot ini sepi gada orang!!')
            return false
        }

        for( const i = 0 ; i < this.penumpang.length ; i++){
            if( this.penumpang[i] == namaPenumpang ) {
                this.penumpang[i] = undefined;
                this.duit += bayar ;
                return this.penumpang ;
            }
        } 
    }

}

const angkot1 = new Angkot('andi permadi', ['Manggarai', 'Rawamangun'], [], 0)

const angkot2 = new Angkot('juned', ['rawamangun','pulo gadung'], [], 0)

