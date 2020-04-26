<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        square
        class="col"
        filled
        bg-color="white"
        placeholder="Nueva tarea"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.id"
        @click="editarEstado(task.id, index)"
        :class="{'done bg-blue-1' : task.done}"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.done" no-pointer-events val="teal" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(task.id, index)"
            dense
            flat
            round
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks text-center absolute-center">
      <q-icon name="check" size="100px" color="primery" />
      <div class="text-h5 text-primary text-center">No hay tareas</div>
    </div>
  </q-page>
</template>

<script>
import { db } from "boot/firebase";
export default {
  data() {
    return {
      newTask: "",
      tasks: [
        /*{
          title: "Aprender Vuejs",
          done: false
        },
        {
          title: "Aprender React",
          done: false
        },
        {
          title: "Aprender Django",
          done: false
        }*/
      ]
    };
  },
  created() {
    this.listarTasks();
  },
  methods: {
    async editarEstado(id, index) {
      try {
        if (this.tasks[index].done) {
          const resDB = await db
          .collection("tasks")
          .doc(id)
          .update({done: false});
          this.tasks[index].done = false;
        } else {
          const resDB = await db
          .collection("tasks")
          .doc(id)
          .update({ done: true});
          this.tasks[index].done = true;
        }

        const resDB = await db
          .collection("tasks")
          .doc(id)
          .update({});
      } catch (error) {
        console.log(error);
      }
    },
    async listarTasks() {
      try {
        const resDB = await db.collection("tasks").get();

        resDB.forEach(res => {
          console.log(res);
          const task = {
            id: res.id,
            title: res.data().title,
            done: res.data().done
          };
          console.log(task+ 'alfonso')
          this.tasks.push(task);
        });
      } catch (error) {
        console.log(error);
      }
    },

    deleteTask(id, index) {
      this.$q
        .dialog({
          title: "Confirmar",
          message: "Estas seguro de eliminar esta nota?",
          cancel: true,
          persistent: true
        })
        .onOk(async () => {
          try {
            const resDB = await db
              .collection("tasks")
              .doc(id)
              .delete();
            this.tasks.splice(index, 1);
            this.$q.notify("Tarea eliminada");
          } catch (error) {
            console.log(error);
          }
        });
    },
    async addTask() {
      try {
        const resDB = await db.collection("tasks").add({
          title: this.newTask,
          done: false
        });
        this.tasks.push({
          title: this.newTask,
          done: false,
          id: resDB.id
        });
        this.newTask = "";
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.5;
}
</style>