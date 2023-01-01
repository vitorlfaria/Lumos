<template>
<div>
  <header class="container flex align-center justify-between">
    <div class="infos">
      <h1>Trazendo luz aos seus projetos</h1>
      <p>Seu negócio merece ser visto! E para ser notado, nada melhor do que um site próprio e personalizado</p>
      <div class="flex gap">
        <a :href="linkWpp" class="btn-lg btn-color btn-scale" target="_blank" @click="gtag_report_conversion">orçamentos</a>
        <a href="#servicos" class="btn-lg btn-escuro btn-scale">serviços</a>
      </div>
    </div>
  </header>
  <div class="servicos-contato">
    <section id="servicos" class="servicos container">
      <h1>Nossos Serviços</h1>
      <div class="card-container">
        <div class="card-servico">
          <img src="~/assets/website.png" alt="website" class="card-img">
          <div class="card-text">
            <p>Sites institucionais totalmente personalizados</p>
          </div>
        </div>
        <div class="card-servico">
          <img src="~/assets/mobile-app.png" alt="mobile" class="card-img">
          <div class="card-text">
            <p>Aplicativos para celular</p>
          </div>
        </div>
        <div class="card-servico">
          <img src="~/assets/system.png" alt="system" class="card-img">
          <div class="card-text">
            <p>Sistemas completos</p>
          </div>
        </div>
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
  <div class="chamada">
    <h3>
      website para qualquer negócio, empresa ou organização que precisa ser mais conectado. Somos uma equipe de designers e desenvolvedores que vamos trabalhar juntos com você para criar um site personalizado que é exclusivo e perfeitamente ajustado à sua marca.
    </h3>
  </div>
  <div class="features">
    <feature-component
      title="Nós fazemos tudo"
      description=" Desenvolvemos sites responsivos que são otimizados para carregamento rápido e para facilitar a navegação. Além disso, criamos softwares e aplicativos totalmente personalizados para o seu negócio."
    />
    <feature-component
      title="Presença Digital que vende"
      description="Entendemos que a sua empresa precisa estar conectada para promover seus produtos e nós fazemos isso melhor do que ninguém. Por isso, trabalharemos juntos para criar um projeto com a cara da sua empresa."
    />
    <feature-component
      title="Soluções por um valor que cabe no seu bolso"
      description=" Oferecemos preços acessíveis baseados na complexidade do seu projeto, garantindo que você receberá uma solução que se encaixe na sua necessidade. Nossa equipe está disponível para responder quaisquer dúvidas que você possa ter durante todo o processo!"
    />
    <span class="fade"></span>

  </div>
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
  background-color: #ffffff;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-position: left;
  background-repeat: no-repeat;
}

.features {
  width: 100%;
  padding-block: 5rem;
  background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.fade {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #000000d6 20%, #00000000);
  z-index: 2;
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
  background-color: #000000;
}
.chamada h3 {
  font-size: 1.7rem;
  line-height: 2rem;
}
.servicos-contato {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='810' preserveAspectRatio='none' viewBox='0 0 1920 810'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1077%26quot%3b)' fill='none'%3e%3crect width='1920' height='810' x='0' y='0' fill='rgba(238%2c 242%2c 247%2c 1)'%3e%3c/rect%3e%3cpath d='M -1064.7719386074587%2c765 C -936.77%2c652.6 -680.77%2c260.8 -424.77193860745854%2c203 C -168.77%2c145.2 -40.77%2c478.6 215.22806139254146%2c476 C 471.23%2c473.4 599.23%2c166.6 855.2280613925415%2c190 C 1111.23%2c213.4 1282.27%2c623.6 1495.2280613925413%2c593 C 1708.18%2c562.4 1835.05%2c148.2 1920%2c37' stroke='rgba(15%2c 21%2c 27%2c 0.32)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -671.3497751627601%2c49 C -543.35%2c151.4 -287.35%2c551.4 -31.349775162760096%2c561 C 224.65%2c570.6 352.65%2c125.6 608.6502248372399%2c97 C 864.65%2c68.4 992.65%2c403.8 1248.6502248372399%2c418 C 1504.65%2c432.2 1754.38%2c129.4 1888.6502248372399%2c168 C 2022.92%2c206.6 1913.73%2c522.4 1920%2c611' stroke='rgba(15%2c 21%2c 27%2c 0.32)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1100.5555259367293%2c543 C -972.56%2c509.2 -716.56%2c361 -460.5555259367293%2c374 C -204.56%2c387 -76.56%2c623.8 179.44447406327072%2c608 C 435.44%2c592.2 563.44%2c293 819.4444740632707%2c295 C 1075.44%2c297 1239.33%2c599.2 1459.4444740632707%2c618 C 1679.56%2c636.8 1827.89%2c434.8 1920%2c389' stroke='rgba(15%2c 21%2c 27%2c 0.32)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -716.7835495370018%2c304 C -588.78%2c361.2 -332.78%2c591.6 -76.78354953700179%2c590 C 179.22%2c588.4 307.22%2c262.2 563.2164504629982%2c296 C 819.22%2c329.8 947.22%2c815 1203.2164504629982%2c759 C 1459.22%2c703 1699.86%2c84.2 1843.2164504629982%2c16 C 1986.57%2c-52.2 1904.64%2c337.6 1920%2c418' stroke='rgba(15%2c 21%2c 27%2c 0.32)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -51.754615864198854%2c369 C 76.25%2c382.2 332.25%2c444.8 588.2453841358011%2c435 C 844.25%2c425.2 972.25%2c261.4 1228.245384135801%2c320 C 1484.25%2c378.6 1612.25%2c728 1868.245384135801%2c728 C 2124.25%2c728 2497.89%2c373.4 2508.245384135801%2c320 C 2518.6%2c266.6 2037.65%2c432.8 1920%2c461' stroke='rgba(15%2c 21%2c 27%2c 0.32)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -905.8055431000998%2c180 C -777.81%2c288.4 -521.81%2c725.6 -265.80554310009984%2c722 C -9.81%2c718.4 118.19%2c202 374.19445689990016%2c162 C 630.19%2c122 758.19%2c506.4 1014.1944568999002%2c522 C 1270.19%2c537.6 1473.03%2c248.2 1654.1944568999002%2c240 C 1835.36%2c231.8 1866.84%2c432.8 1920%2c481' stroke='rgba(15%2c 21%2c 27%2c 0.32)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1230.1530245089054%2c279 C -1102.15%2c329.2 -846.15%2c577 -590.1530245089054%2c530 C -334.15%2c483 -206.15%2c65.2 49.846975491094554%2c44 C 305.85%2c22.8 433.85%2c385 689.8469754910946%2c424 C 945.85%2c463 1083.82%2c222.6 1329.8469754910946%2c239 C 1575.88%2c255.4 1801.97%2c452.6 1920%2c506' stroke='rgba(15%2c 21%2c 27%2c 0.32)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1077'%3e%3crect width='1920' height='810' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
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
  color: var(--escuro);
}
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 1rem;
}
.card-servico {
  background-color: #000000;
  border-radius: 1rem;
  width: 100%;
  min-height: 20rem;
  text-align: center;
  overflow: hidden;
}
.card-img {
  width: 100%;
  max-height: 10rem;
  object-fit: cover;
}
.card-text {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
.card-text > p {
  font-size: 1.3rem;
  font-weight: 700;
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
  color: var(--escuro);
}
.btn-contato h3 {
  font-size: 1.5rem;
}

@media screen and (max-width: 426px) {
  header {
    height: 100vh;
    flex-direction: column-reverse;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 40%;
  }

  .infos {
    width: 90%;
    text-align: center;
  }
  .infos h1 {
    filter: drop-shadow(5px 5px 2px #000000);
  }
  
  .infos p {
    filter: drop-shadow(2px 2px 2px #000000);
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
