<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="transparent"
    >
      <q-toolbar>
        <q-space></q-space>

        <q-toolbar-title
          class="text-center text-h4 text-black"
        >
          GTMI
        </q-toolbar-title>

        <q-space></q-space>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
