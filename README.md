# 🎀 Happy Birthday for your gf 

## Photos Kaise Add Karo

### Step 1 — gf ki photos
`images/gf-pic/` folder mein daalo:
- `pic 1.jpg`
- `pic2.jpg`
- `pic3.jpg`
(jitni bhi chahein)

### Step 2 — tum dono ki photo
`images/together/` folder mein daalo:
- `together1.jpg`

### Step 3 — index.html update karo (line ~170)

```js
const GF_IMAGES = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
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
git commit -m "Happy Birthday your gf 🎀"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/repo name.git
git push -u origin main
```

GitHub repo → Settings → Pages → Source: `main` → Save

Live link: `https://YOUR_USERNAME.github.io/gf-birthday`

---

Made with 💕 for baby
