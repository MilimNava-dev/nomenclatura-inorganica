# Nomenclatura Inorgànica

Web interactiva per practicar **nomenclatura inorgànica en català** mitjançant exercicis generats aleatòriament.

L'objectiu del projecte és oferir una manera senzilla i pràctica d'aprendre i practicar la formulació i nomenclatura de compostos inorgànics.

## ✨ Característiques

* 🧪 Exercicis generats automàticament.
* 🔀 Mode aleatori amb un 50% de preguntes de **fórmula → nom** i un 50% de **nom → fórmula**.
* 🎯 Selecció de les categories que es volen practicar.
* ⚖️ Distribució equilibrada dels tipus d'exercicis.
* 🔢 Fórmules químiques amb subíndexs.
* ✅ Correcció automàtica de les respostes.
* ✍️ Detecció d'errors d'accentuació com a categoria independent.
* 📊 Resum de resultats al final de cada sessió.
* 🚫 Evita repetir fórmules durant una mateixa sessió.

## 🧪 Categories

Actualment es poden practicar les següents categories:

* **Noms comuns**

  * Metà
  * Amoníac
  * Aigua
  * Borà
  * Silà
  * Fosfina
* **Hidrurs**
* **Òxids**

  * Metalls
  * No-metalls
* **Peròxids**
* **Hidròxids**
* **Àcids hidràcids**
* **Àcids oxoàcids**
* **Sals binàries**
* **Sals ternàries**
* **Sals ternàries hidrogenades**

## 🛠️ Tecnologies

El projecte està desenvolupat amb:

* [React](https://react.dev/)
* [Vite](https://vite.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* JavaScript (ES6+)

## 📁 Estructura

```text
src/
├── chemistry/
│   ├── generators/
│   ├── checkAnswer.js
│   ├── createBalancedModes.js
│   ├── createBalancedSubtypes.js
│   ├── generateCompound.js
│   └── ...
│
├── components/
│   ├── ui/
│   ├── Formula.jsx
│   ├── ModeSelector.jsx
│   ├── CompoundSelector.jsx
│   └── PracticeCard.jsx
│
├── data/
│   ├── elements.js
│   ├── compoundElements.js
│   ├── polyatomicIons.js
│   └── ...
│
└── App.jsx
```

La carpeta `chemistry` conté la lògica de generació i correcció dels exercicis, mentre que `data` conté la informació química utilitzada pels generadors.

## 🚀 Instal·lació

Clona el repositori:

```bash
git clone https://github.com/MilimNava-dev/nomenclatura-inorganica.git
cd <project-folder>
```

Instal·la les dependències:

```bash
npm install
```

Inicia el servidor de desenvolupament:

```bash
npm run dev
```

Després obre l'adreça que indiqui Vite al navegador.
