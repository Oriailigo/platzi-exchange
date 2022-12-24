<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="i in assets"
        :key="i.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            class="w-6 h-6"
            v-bind:src="`https://static.coincap.io/assets/icons/${i.symbol.toLowerCase()}@2x.png`"
            v-bind:alt="i.name"
          />
        </td>
        <td>
          <b># {{ i.rank }}</b>
        </td>
        <td>{{ i.name }}</td>
        <td>{{ i.priceUsd | dollar }}</td>
        <td>{{ i.marketCapUsd | dollar }}</td>
        <td
          v-bind:class="
            i.changePercent24Hr < 0 ? 'text-red-600' : 'text-green-600'
          "
        >
          {{ i.changePercent24Hr | percent }}
        </td>

        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PxAssetsTable",

  props: {
    //este assets es el que se crea en home.vue
    assets: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>

<script>
export default {
  name: "PxHeader",
  props: {
    assets: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
};
</script>
