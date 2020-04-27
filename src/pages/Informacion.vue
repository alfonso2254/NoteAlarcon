<template>
  <q-page class="q-pa-lg ">
    <div class="row justify-center">
      <div class="justify-center">
        <div class="row justify-center ">
          <h5 class="q-mt-none text-h2 q-mb-sm">Información</h5>
        </div>
        <div></div>
        <p>
          La siguiente aplicación fue desarrollada por Luis Alfonso Alarcon y
          diseñada por <strong>Quaser</strong>, haciendo uso del framework
          Quasar dependiendo del Framework Vuejs, adicional se implementa
          Firebase como base de datos. La misma Tiene como obejetivo de agregar,
          almacenar, editar, y eliminar notas.
        </p>
        <u class="lista">
          <li class="q-mb-md">
            <strong>Quasar:</strong> Es un super framework basado en VueJS que
            permite a los desarrolladores web crear de forma rápida sitios web
            responsives y aplicaciones de diferentes sabores: SPAs (Single Page
            App) SSR (Server-side Rendered App) ... Multi-platform Desktop Apps
            (usando Electron).
          </li>
          <li class="q-mb-md">
            <strong>Vuejs</strong> Es un marco JavaScript de código abierto
            Modelo-vista-modelo de vista para construir interfaces de usuario y
            aplicaciones de una sola página. Fue creado por Evan You, y lo
            mantienen él y el resto de los miembros activos del equipo central
            provenientes de varias compañías como Netlify y Netguru
          </li>
          <li class="q-mb-md">
            <strong>Firebase</strong>

            Es una plataforma digital que se utiliza para facilitar el
            desarrollo de aplicaciones web o móviles de una forma efectiva,
            rápida y sencilla, la cual es utilizada por sus diversas funciones
            como una técnica de Marketing Digital para aumentar la base de
            usuarios y generar mayores beneficios económicos.

            <p>
              Su principal objetivo, es mejorar el rendimiento de las apps
              mediante la implementación de diversas funcionalidades que van a
              hacer de la aplicación en cuestión, mucho más manejable, segura y
              de fácil acceso para los usuarios.
            </p>
          </li>
        </u>
      </div>
    </div>
    <div class="column items-center">
      <div class="business-card clearfix">
        <div class="business-card-profile">
          <img
            class="business-card-pic"
            src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/p960x960/40573136_2047614191969213_7559930554573914112_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_oc=AQnsJiykhdvMykfkvfLKyXxMMu70eqfkJ3xjOeQ_d4rNt2ZKVYQdSceUFiml7Te9i3M&_nc_ht=scontent-mia3-1.xx&_nc_tp=6&oh=b78e8c8f996a4284f55db75c230f6c69&oe=5EC98E5A"
            alt="profile picture"
          />
          <p class="business-card-name">Luis Alfonso Alarcon</p>
          <p class="business-card-title1">
            Estudiante de la universidad del IUTA Caracas Venezuela
          </p>
        </div>
        <div class="business-card-arrow"></div>
        <div class="business-card-details">
          <p>
            <i class="fa fa-desktop"></i
            ><a class="business-card-link" target="_blank" ref="https://notealarcon.web.app/#/"
              >Demo</a
            >
          </p>
          <a href="" target="_blank" class="business-card-link"
            ><p>
              <i class="fa fa-envelope"></i>alfonso22542254@gmail.com.com
            </p></a
          >
          <a href="#" class="business-card-link"
            ><p><i class="fa fa-phone"></i>0424-2282602</p></a
          >
          <a
            href="https://www.facebook.com/luisalfonso2254"
            target="_blank"
            class="business-card-link"
            ><p><i class="fa fa-facebook"></i>/luisalfonso2254</p></a
          >
          <a
            href="https://twitter.com/Alfonso22542254"
            target="_blank"
            class="business-card-link"
            ><p><i class="fa fa-twitter"></i>@alfonso22542254</p></a
          >
          <a
            href="https://github.com/alfonso2254"
            target="_blank"
            class="business-card-link"
            ><p><i class="fa fa-github"></i>/alfonso2254</p></a
          >
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
    </div>
  </q-page>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.cuadro {
  background-color: rgba(38, 86, 105, 0.116) !important;
  border-radius: 10%;
}
.lista {
  text-decoration: none;
}
.letra {
  font: condensed 120% sans-serif;
}
</style>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url(https://fonts.googleapis.com/css?family=Dosis);

.business-card {
  width: 650px;
  height: 308px;
  background: #2d3035;
  position: relative;
}

.business-card-profile {
  float: left;
  background: #3d4045;
  width: 276px;
  height: 308px;
}

/* grayscale thanks to http://thenewcode.com/532/Convert-Images-To-Black-And-White-With-CSS */

.business-card-pic {
  width: 150px;
  display: block;

  padding: 3px;
  background: #ffffff;
  border-radius: 100px;
  border: solid 7px #54575f;

  margin: 0 auto;
  margin-top: 20px;
}

.business-card-name,
.business-card-title {
  line-height: 5px;
  text-align: center;
  font-family: "dosis";
  color: white;
  font-size: 20px;
}

.business-card-name {
  font-weight: bold;
  margin: 15px;
}

.business-card-title1 {
  color: #999999;
  padding: 0px 30px;
  text-align: center;

  font-size: 16px;
  margin-top: 20px;
}

/* arrow thanks to : https://jsfiddle.net/josedvq/3HG6d/ */

.business-card-arrow {
  width: 20;
  height: 0;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 3%;
  overflow: hidden;
  position: absolute;
  top: calc(50% - 20px);
  left: 270px;
}

.business-card-arrow:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  margin-top: -20px;
  margin-left: -14px;

  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #54575f;
}

/* -----------------
  Details(right side)
 ------------------- */
.business-card-details {
  font-family: "Montserrat";
  color: #e6e6e6;
  font-size: 13px;
  line-height: 20px;
  width: 330px;
  height: 283px;
  display: inline-block;
  overflow: hidden;
  margin-top: 25px;
  margin-left: 25px;
}

.business-card-details .fa {
  color: #d9d9d9;
  width: 20px;
  font-size: 20px;
  text-align: center;
  margin-right: 10px;
}

.business-card-link {
  color: #01bdfc;
  text-decoration: none;
}

.clearfix {
  zoom: 1;
  border-radius: 10%;
  margin-left: 40px;
}
.padre {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
