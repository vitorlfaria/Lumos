<template>
<div>
  <header class="container flex align-center justify-between">
    <div class="header-strips"></div>
    <div class="infos">
      <h1>Trazendo luz aos seus projetos</h1>
      <p>Seu negócio merece ser visto! E para ser notado, nada melhor do que um site próprio e personalizado</p>
      <div class="flex gap">
        <a :href="linkWpp" class="btn-lg btn-color btn-scale" target="_blank" @click="gtag_report_conversion">orçamentos</a>
        <a href="#servicos" class="btn-lg btn-escuro btn-scale">serviços</a>
      </div>
    </div>
    <div class="header-img">
      <img src="~/assets/telas.png" alt="telas">
    </div>
  </header>
  <div class="card">
    <h1>
      Somos especializados em criação de <span>sites institucionais</span> que são <span>rápidos e eficientes</span>, dando a você uma presença digital autêntica.
    </h1>
  </div>
  <feature-component
    title="Nós fazemos tudo"
    description="Qualquer que seja o tipo de site que você precisa, Lumos tem a expertise para entregar. Criamos sites responsivos que são otimizados para carregamento rápido e para facilitar a navegação."
    animation="68794-cute-astronaut-operating-laptop.json"
  />
  <feature-component-reverse
    title="Presença Digital que vende"
    description="No mundo digital de hoje, sua empresa precisa de um site para atrair clientes e promover seus produtos - e nós entendemos isso melhor do que ninguém. Nós trabalharemos juntos para criar um site profissionalmente desenhado que atrai atenção e faz novos clientes quererem trabalhar com você."
    animation="68789-cute-mascot-astronaut-in-rocket.json"
  />
  <feature-component
    title="Soluções por um valor justo"
    description="Nós oferecemos preços acessíveis baseados na complexidade do seu projeto, garantindo que você receberá um plano que se encaixe na sua necessidade. Nossa equipe está disponível para responder quaisquer dúvidas que você possa ter - então entre em contato conosco agora mesmo!"
    animation="93344-money-investment.json"
  />
  <div class="chamada">
    <h3>
      website para qualquer negócio, empresa ou organização que precisa ser mais conectado. Somos uma equipe de designers e desenvolvedores que vamos trabalhar juntos com você para criar um site personalizado que é exclusivo e perfeitamente ajustado à sua marca.
    </h3>
  </div>
  <section id="servicos" class="servicos container">
    <h1>Nossos Serviços</h1>
    <div class="card-container">
      <div class="card-servico">
        <p>Criação de sites institucionais totalmente personalizados para você.</p>
      </div>
<!--      <div class="card-servico">-->
<!--        <p>Configuração e gerenciamento de Google Ads.</p>-->
<!--      </div>-->
    </div>
  </section>
  <section class="contato">
    <a :href="linkWpp" target="_blank" @click="gtag_report_conversion">
      <div class="btn-contato">
        <h3>Entre em contato para montar o plano perfeito para você.</h3>
      </div>
    </a>
    <a href="tel:41992338159" class="telefone"><i class="fas fa-phone"></i>(41) 99233-8159</a>
  </section>
</div>
</template>

<script>
import lottieAnimation from 'lottie-web-vue'
import FeatureComponent from "~/components/featureComponent";
import FeatureComponentReverse from "~/components/featureComponentReverse";
import FormularioContato from "~/components/FormularioContato";
export default {
  name: 'IndexPage',
  components: {
    FeatureComponent,
    FeatureComponentReverse,
    FormularioContato,
    lottieAnimation
  },
  methods: {
    gtag_report_conversion() {
      this.$gtag('event', 'conversion', {
        'send_to': 'AW-10936166285/eKTtCIzP88cDEI3P4t4o'
      });
      return false;
    }
  },
  computed: {
    linkWpp () {
      return this.$store.getters.getLinkWpp
    }
  }
}
</script>

<style scoped>
span {
  color: #ffffff;
}
header {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #0973b1;
  margin-bottom: 3rem;
  overflow: hidden;
}

.header-strips {
  width: 100%;
  height: 1.5rem;
  position: absolute;
  top: 5.5rem;
  left: 0;
  background-color: #04539c;
}

.header-strips::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 1.5rem;
  left: 0;
  background-color: #0060b9;
}

.infos {
  width: 40%;
}

.infos h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.infos p {
  line-height: 1.5rem;
  margin-bottom: 2rem;
}

.anim {
  width: 35%;
  pointer-events: none;
  margin-right: 3rem;
}

.card h1 {
  font-size: 1.5rem;
}

.card {
  max-width: 75%;
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(223, 126, 0, 0.719);
}
.header-img {
  position: relative;
  height: 100%;
}
.header-img img {
  width: 55em;
  position: absolute;
  right: -12rem;
  top: 50%;
  transform: translateY(-50%);
}
.chamada {
  width: 100%;
  text-align: center;
  padding: 5rem 17rem;
  background-image: url("@/assets/fundo-chamada.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.chamada h3 {
  font-size: 1.7rem;
  line-height: 2rem;
  filter: drop-shadow(0 0 1rem #000);
}
.servicos {
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.servicos h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 1rem #000);
}
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}
.card-servico {
  padding: 2rem;
  background-image: var(--degrade-color);
  border-radius: 1rem;
  width: 100%;
  text-align: center;
}
.card-servico > p {
  font-size: 1.3rem;
}
.contato {
  width: 100%;
  padding: 3rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-contato {
  padding: 2rem ;
  border-radius: 1rem;
  background-color: #46c756;
  transition: transform 300ms ease, background-color 300ms ease;
}
.btn-contato:hover {
  transform: scale(1.05);
  background-color: #23b638;
}
.telefone {
  font-size: 2rem;
  margin-top: 2rem;
}
.btn-contato h3 {
  font-size: 1.5rem;
}

@media screen and (max-width: 426px) {
  header {
    height: fit-content;
    flex-direction: column-reverse;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 20rem;
  }

  header div.card {
    bottom: -20rem;
  }

  .infos {
    width: 90%;
    text-align: center;
  }

  .anim {
    width: 70%;
    pointer-events: none;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .chamada {
    padding: 3rem 2rem;
  }

  .chamada h3 {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  .card-container {
    flex-direction: column;
    gap: 2rem;
  }

  .card-servico {
    width: 90%;
  }

  .servicos h1 {
    text-align: center;
  }

  .btn-contato {
    margin: 0;
    text-align: center;
  }

  .contato {
    padding: 3rem 2rem;
  }
}
</style>
