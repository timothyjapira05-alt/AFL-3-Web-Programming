# Portfolio Timothy Japira

Website portfolio dengan 3 halaman: Home, Article (Hobby), dan Photo Gallery.

## Struktur Folder

```
portfolio/
├── index.html          # Halaman Home
├── article.html        # Halaman Article / Hobby
├── gallery.html        # Halaman Photo Gallery
├── css/
│   ├── style.css       # CSS global (navbar, footer, variabel)
│   ├── home.css        # CSS khusus halaman Home
│   ├── article.css     # CSS khusus halaman Article
│   └── gallery.css     # CSS khusus halaman Gallery
├── js/
│   ├── main.js         # JavaScript navbar mobile & smooth scroll
│   └── gallery.js      # JavaScript carousel galeri
├── images/             # Folder untuk gambar
└── README.md
```

## Cara Pakai

1. Buka `index.html` di browser untuk melihat halaman Home.
2. Letakkan gambar-gambar berikut di folder `images/`:
   - `hero.png` — foto utama di hero section (Home)
   - `profile.png` — foto profil di about card (Home)
   - `volleyball.jpg` — foto voli
   - `photography.jpg` — foto bunga / photography
   - `gym.jpg` — foto gym / dumbell
   - `decor.jpg` — foto dekorasi piring (Gallery)
   - `team.jpg` — foto tim (Gallery)

> Jika gambar tidak ada, beberapa akan otomatis fallback ke gambar Unsplash.

## Fitur

- **Responsive Design**: optimal di Desktop, Tablet (≤1024px), dan Mobile (≤768px / ≤480px).
- **Mobile Menu**: hamburger menu yang bisa di-slide.
- **Carousel Galeri**: bisa di-klik, di-swipe (mobile), pakai panah, atau indicator. Support arrow key di keyboard.
- **Hover Animations**: kartu hobi dan trait punya efek hover yang halus.
- **Smooth Scroll**: link anchor scroll otomatis.

## Teknologi

- HTML5
- Tailwind CSS (via CDN)
- CSS3 (custom, dengan variabel & responsive)
- Vanilla JavaScript
- Font Awesome (icon)
- Google Fonts — Poppins

## Breakpoint Responsive

- **Desktop**: > 1024px (default)
- **Tablet**: ≤ 1024px
- **Mobile**: ≤ 768px
- **Small Mobile**: ≤ 480px
