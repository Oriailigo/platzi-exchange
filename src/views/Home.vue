<template>
  <div>
    <px-assets-table> </px-assets-table>
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api";
export default {
  name: "Home",
  components: { PxAssetsTable },
  //guardar dato
  data() {
    return {
      assets: [],
    };
  },
  //hook para hacer la interaccion con la api y poder setear mi array.
  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
