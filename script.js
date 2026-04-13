// Data Koleksi Buku yang Lebih Banyak
let farizBooks = [
    { id: 1, judul: "Clean Code JavaScript", tipe: "IT", icon: "ph-code" },
    { id: 2, judul: "UI Design Principles", tipe: "Desain", icon: "ph-palette" },
    { id: 3, judul: "Modern Macroeconomics", tipe: "Ekonomi", icon: "ph-chart-line-up" },
    { id: 4, judul: "Sosiologi Digital", tipe: "Sosial", icon: "ph-globe" },
    { id: 5, judul: "Algoritma Struktur Data", tipe: "IT", icon: "ph-cpu" },
    { id: 6, judul: "Psikologi Komunikasi", tipe: "Sosial", icon: "ph-chat-circle-dots" },
    { id: 7, judul: "Manajemen Bisnis 4.0", tipe: "Bisnis", icon: "ph-briefcase" },
    { id: 8, judul: "Pancasila & Etika", tipe: "Hukum", icon: "ph-gavel" }
];

// PERBAIKAN DARK MODE TOGGLE
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Render Buku
function render() {
    const list = document.getElementById('book-list');
    list.innerHTML = '';
    farizBooks.forEach(book => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <i class="ph-bold ${book.icon}"></i>
            <h4>${book.judul}</h4>
            <p style="color:var(--text-muted); font-size:0.8rem;">${book.tipe}</p>
            <button onclick="hapus(${book.id})" style="margin-top:15px; background:none; border:1px solid #ef4444; color:#ef4444; cursor:pointer; padding:5px 10px; border-radius:5px;">Hapus</button>
        `;
        list.appendChild(div);
    });
}

// Tambah Buku
function addItem() {
    const t = document.getElementById('newTitle').value;
    const k = document.getElementById('newType').value;
    if(t && k) {
        fathoniBooks.push({ id: Date.now(), judul: t, tipe: k, icon: "ph-book-open" });
        render();
        document.getElementById('newTitle').value = '';
        document.getElementById('newType').value = '';
    }
}

// Hapus Buku
function hapus(id) {
    fathoniBooks = fathoniBooks.filter(b => b.id !== id);
    render();
}

// Validasi Form
document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const durasi = document.getElementById('durasi').value;

    if(nama.length < 3) {
        document.getElementById('errNama').innerText = "Nama minimal 3 huruf!";
    } else if(!email.includes('@')) {
        document.getElementById('errEmail').innerText = "Email tidak valid!";
    } else if(durasi <= 0) {
        document.getElementById('errDurasi').innerText = "Durasi harus positif!";
    } else {
        alert("Peminjaman sukses, Bro!");
        this.reset();
    }
});

render();