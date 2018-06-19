<template>
  <div class="container py-5">
    <div class="row mb-4">
      <h1 class="col-12">Meower</h1>
    </div>
    <div class="row">
      <Timeline class="col" />
      <Search class="col" />
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import Timeline from '@/components/Timeline';
import Search from '@/components/Search';

export default {
=======
import Timeline from './components/Timeline.vue';
import Search from './components/Search.vue';


export default {
  name: 'app',
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda
  components: {
    Timeline,
    Search,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 768px;
}
</style>
