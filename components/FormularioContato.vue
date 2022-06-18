<template>
  <div class="form-container">
    <form class="form" method="POST">
      <fieldset>
        <div class="inputs-container">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome aqui..." required />
        </div>
        <div class="inputs-container">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Seu email aqui..." required />
        </div>
      </fieldset>
      <fieldset class="servicos-interesse">
        <label class="servico-label">Serviços de interesse</label>
        <div class="servico">
          <input type="checkbox" name="website">
          <label for="website">Criação de Site</label>
        </div>
        <div class="servico">
          <input type="checkbox" name="googleads">
          <label for="googleads">Anúncios Google Ads</label>
        </div>
      </fieldset>
      <div class="inputs-container">
        <label for="negocio">Nome do seu Negócio</label>
        <input type="text" id="negocio" name="negocio" placeholder="Nome do seu negócio aqui..." />
      </div>
      <div class="textarea-container">
        <label for="negocio">Nome do seu Negócio</label>
        <textarea placeholder="Fale um pouco sobre o que está buscando..."></textarea>
      </div>
      <button class="btn-lg btn-color" @click="enviarContato">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioContato",
  methods: {
    enviarContato (e) {
      e.preventDefault()
      const nome = document.querySelector('#nome').value
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 50%;
  background-image: var(--degrade-escuro);
  box-shadow: 1rem 1rem 1rem var(--sombra);
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 8rem;
  color: var(--claro);
}
fieldset {
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inputs-container {
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.textarea-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
}
input[type="text"] {
  width: 100%;
  padding: .75rem;
  background: none;
  outline: none;
  border: none;
  border-bottom: 2px solid #3a3a6c;
  font-size: 1rem;
}
.servicos-interesse{
  flex-direction: column;
  align-items: start;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.servico-label {
  font-weight: 700;
  margin-bottom: 1rem;
}
.servico {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
input[type="checkbox"] {
  margin: .5rem .5rem;
}
textarea {
  outline: none;
  background: none;
  border: 2px solid #3a3a6c;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  padding: 1rem;
}
</style>
