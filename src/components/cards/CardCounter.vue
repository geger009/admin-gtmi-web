<template>
  <q-card>
    <q-card-section>
      {{ title }}
    </q-card-section>

    <q-card-section>
      {{ value }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CardCounter",
  props: [
    "title",
    "value"
  ]
}
</script>
