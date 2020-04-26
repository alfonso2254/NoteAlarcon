<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-pa-md full">
        <q-btn
          flat
          dense
          round
          color="secondary"
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          :label="$q.fullscreen.isActive ? '' : ''"
        />
      </div>

      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Todo</div>

        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img src="statics/background1.jpg" class="header-image absolute-top" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item exact to="/" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>Todos</q-item-section>
          </q-item>

          <q-item exact to="/help" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>Ayuda</q-item-section>
          </q-item>

          <q-item exact to="/info" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>Información</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top img-layout"
        src="statics/background.jpg"
        style="height: 192px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="statics/avatars/perfil.png" />
          </q-avatar>
          <div class="text-weight-bold">Luis Alarcon</div>
          <div>@alfonso_2254</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from "quasar";
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd DD MMMM YYYY", {
        days: [
          "Domingo",
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado"
        ],
        months: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        ]
      });
    }
  }
};
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.4;
  filter: grayscale(50%);
}
.full{
  margin: 0 !important;
  padding: 0 !important;
  float: right;
  margin-right: 15px !important;
  margin-top: -45px !important;
  color: white !important;
  background-color: rgba(255, 255, 255, 0.178); 
  border-radius: 100%;
}
</style>
