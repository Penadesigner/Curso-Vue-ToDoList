<template>
  <div class="home">
     <!-- Content -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
         
            <TodoSpinner v-if="loading"/>
          <template v-else>
            <TodoFormAdd/>

            <TodoItems v-if="$store.state.todos.length"/>

            <TodoEmpyt v-else/>
          </template>
        </div>
    </div>
    <!--/ Content -->
  </div>
</template>

<script>
import TodoSpinner from '@/components/TodoSpinner.vue'
import TodoFormAdd from '@/components/TodoFormAdd.vue'
import TodoItems from '@/components/TodoItems.vue'
import TodoEmpyt from '@/components/TodoEmpyt.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

// @ is an alias to /src

export default {
  components: { TodoSpinner, TodoFormAdd, TodoItems, TodoEmpyt },
  name: 'HomeView',

  setup(){
    // DATA
    const store = useStore()
    const loading = ref(false)

    // CREATED
    loading.value = true
    store.dispatch('getTodos').finally(() => {
      loading.value = false
    })

    // O QUE VAI PARA O TEMPLATE
    return {
      loading
    }
    
  }

}
</script>
