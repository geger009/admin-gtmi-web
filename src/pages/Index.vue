<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-xs-12 q-pa-sm">
        <card-counter title="Total Warga" value="80" />
      </div>
      <div class="col-xs-6 q-pa-sm">
        <card-counter title="Total Warga" value="80" />
      </div>
      <div class="col-xs-6 q-pa-sm">
        <card-counter title="Total Warga" value="80" />
      </div>
    </div>
  </q-page>
</template>

<script>
import CardCounter from 'components/cards/CardCounter'

export default {
  name: 'PageIndex',
  components: {
    CardCounter
  }
}
</script>
