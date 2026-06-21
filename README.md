# 🎀 Happy Birthday Trisha

## Photos Kaise Add Karo

### Step 1 — Trisha ki photos
`images/trisha/` folder mein daalo:
- `trisha1.jpg`
- `trisha2.jpg`
- `trisha3.jpg`
(jitni bhi chahein)

### Step 2 — Hum dono ki photo
`images/together/` folder mein daalo:
- `together1.jpg`

### Step 3 — index.html update karo (line ~170)

```js
const TRISHA_IMAGES = [
  "trisha1.jpg",
  "trisha2.jpg",
  "trisha3.jpg",
];

const TOGETHER_IMAGES = [
  "together1.jpg",
];
```

---

## GitHub Pages pe Deploy

```bash
git init
git add .
git commit -m "Happy Birthday Trisha 🎀"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trisha-birthday.git
git push -u origin main
```

GitHub repo → Settings → Pages → Source: `main` → Save

Live link: `https://YOUR_USERNAME.github.io/trisha-birthday`

---

Made with 💕 for Trisha
