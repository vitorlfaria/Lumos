<template>
  <div id="page">
    <div class="nav flex align-center justify-between">
      <nav class="flex align-center justify-between">
        <h1>Lumos</h1>
        <ul>
          <li><nuxt-link to="/"><a>HOME</a></nuxt-link></li>
          <li><nuxt-link to="/sobre"><a>SOBRE</a></nuxt-link></li>
        </ul>
      </nav>
      <div class="btn-container flex gap">
        <button class="btn btn-escuro"><i class="fa-solid fa-moon"></i></button>
        <button class="btn btn-color btn-scale">contato</button>
      </div>
    </div>
    <a href="https://bit.ly/LumosContato" target="_blank">
      <img src="@/assets/whatsapp.svg" alt="logo whatsapp" class="zipzop">
    </a>
    <nuxt />
    <footer>
      <h1>Lumos</h1>
      <div class="instagram">
        <a href="https://www.instagram.com/lumos_curitiba" target="_blank">
          <h4>Siga-nos no Instagram</h4>
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p class="copyright">&copy; Copyright Lumos - Curitiba 2022</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');

:root {
  --primaria: #8e00c1;
  --escuro: #0a0916;
  --claro: #d8dae5;
  --sombra: #0000008f;
  --degrade-nav: #100f23;
  --degrade-escuro: linear-gradient(45deg, #201f38 0%, #110e24 100%);
  --degrade-azul: #0051a8;
  --cinza-escuro: #110e24;
  --cinza-claro: #201f38;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  color: var(--claro);
}

html {
  font-family: 'Montserrat', sans-serif;
}

.container {
  padding-left: 5rem;
  padding-right: 5rem;
}

.flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.column {
  flex-direction: column;
}

.gap {
  gap: 2rem;
}

#page {
  width: 100%;
  min-height: 100vh;
  background-color: var(--escuro);
}

nav {
  width: 60%;
  padding: 1rem 5rem;
  border-radius: 0 0 3rem 0;
  color: var(--claro);
  background-image: linear-gradient(to right, var(--escuro), var(--degrade-nav));
  box-shadow: 0 0 1rem var(--sombra);
}

.nav {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}

nav a {
  color: var(--claro);
}

nav h1 {
  font-size: 1.5rem;
}

nav ul li {
  display: inline-block;
  margin-left: 2rem;
}

.btn-container {
  margin-right: 8rem;
}

.btn {
  cursor: pointer;
  border: none;
  border-radius: .65rem;
  padding: .5rem;
  box-shadow: .3rem .3rem 1rem var(--sombra);
  font-size: 1rem;
}

.btn-lg {
  cursor: pointer;
  border: none;
  border-radius: .5rem;
  padding: .7rem 2rem;
  box-shadow: .3rem .3rem 1rem var(--sombra);
  font-size: 1rem;
}

.btn-escuro {
  background-image: var(--degrade-escuro);
}

.btn-color {
  padding-left: 2rem;
  padding-right: 2rem;
  color: var(--claro);
  background-image: linear-gradient(-45deg, var(--primaria) 20%, var(--degrade-azul));
}

.btn-scale {
  transition: transform 300ms ease;
}

.btn-scale:hover {
  transform: scale(1.1);
}

.btn-escuro i {
  color: var(--primaria);
}

.m-auto {
  margin: 0 auto;
}

.card {
  width: fit-content;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.27);
  border-radius: 12px;
  border: 2px solid #ffffff0d;
  padding: 2rem;
  text-align: center;
  box-shadow: 1rem 1rem 1rem var(--sombra);
}

.zipzop {
  width: 73px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  cursor: pointer;
  transition: transform 300ms ease;
}

.zipzop:hover {
  transform: scale(1.2);
}

footer {
  width: 100%;
  padding: 3rem 0 5rem 0;
  margin-top: 2rem;
  background-color: var(--cinza-escuro);
  border-top: 2px solid var(--cinza-claro);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  position: relative;
}
footer h1 {
  font-size: 4rem;
}
.instagram a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.instagram i {
  font-size: 2rem;
}
.copyright {
  font-size: .75rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (max-width: 426px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .btn-container {
    display: none;
  }

  nav {
    width: 90%;
    padding: .5rem 2rem;
  }

  nav ul li {
    margin-left: 1rem;
  }

  .zipzop {
    width: 50px;
    bottom: 20px;
    right: 20px;
  }

  footer {
    padding: 3rem 0 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    position: relative;
  }
}
</style>
