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
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="coin"
          />
        </td>
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
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: i.id } }"
          >
            {{ i.name }}</router-link
          >
        </td>
        <td>{{ i.priceUsd | dollar }}</td>
        <td>{{ i.marketCapUsd | dollar }}</td>
        <td
          v-bind:class="
            i.changePercent24Hr < 0 ? 'text-red-600' : 'text-green-600'
          "
        >
          {{ i.changePercent24Hr | percent }}
        </td>
        <!-- uso al componente boton -->

        <td class="hidden sm:block">
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: i.id } }"
          >
            <div>
              <px-button>
                <span>Detalle</span>
              </px-button>
            </div>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
//importo al componente button
import PxButton from "@/components/PxButton.vue";

export default {
  name: "PxAssetsTable",
  // llamo al componente button
  components: { PxButton },
  data() {
    return {
      coin: "",
    };
  },
  props: {
    //este assets es el que se crea en home.vue
    assets: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filterAssets() {
      return this.assets.filter((a) => a.name.includes(this.coin));
    },
  },

  // computed: {
  //   filteredAssets() {
  //     if (!this.filter) {
  //       return this.assets;
  //     }
  //     return this.assets.filter((a) => {
  //       a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
  //         a.name.toLowerCase().includes(this.filter.toLowerCase());
  //     });
  //   },
  // },
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
