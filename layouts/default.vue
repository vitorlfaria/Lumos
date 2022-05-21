<template>
  <div id="page">
    <div class="container nav flex align-center justify-between">
      <nav class="flex align-center justify-between">
        <h1>Lumos</h1>
        <ul>
          <li><nuxt-link to="/"><a>HOME</a></nuxt-link></li>
          <li><nuxt-link to="/sobre"><a>SOBRE</a></nuxt-link></li>
        </ul>
      </nav>
      <div class="flex gap">
        <button class="btn btn-theme"><i class="fa-solid fa-moon"></i></button>
        <button class="btn btn-contato">contato</button>
      </div>
    </div>
    <nuxt />
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
  --degrade1: #15142a;
  --degrade2: #090714;
  --degrade-azul: #0051a8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-size: 1rem;

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
  padding: 1rem 5rem 1rem 0;
  border-radius: 0 0 3rem 0;
  color: var(--claro);
  background-image: linear-gradient(to right, var(--escuro), var(--degrade-nav));
}

.nav {
  width: 100%;
  position: fixed;
  top: 0;
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

.btn {
  border: none;
  border-radius: .65rem;
  padding: .5rem;
  box-shadow: .3rem .3rem 1rem var(--sombra);
}

.btn-theme {
  background-image: linear-gradient(-45deg, var(--degrade2), var(--degrade1));
}

.btn-contato {
  padding-left: 2rem;
  padding-right: 2rem;
  color: var(--claro);
  background-image: linear-gradient(-45deg, var(--primaria) 20%, var(--degrade-azul));
}

.btn-theme i {
  color: var(--primaria);
}
</style>