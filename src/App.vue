<template>
  <div class="app">
    <img :src="`${pokemonImage}`" alt="" class="pokemon_image" />
    <h1 v-if="loading" class="pokemon_data">
      {{ apiMessage }}
    </h1>
    <h1 v-else class="pokemon_data">
      <span class="pokemon_number">{{ pokemonNumber }}</span> -
      <span class="pokemon_name">{{ pokemonNameSearched }}</span>
    </h1>
    <h3 class="pokemon_detail_grid">
      <span class="pokemon_hp"
        >HP: <span class="hp">{{ hp }}</span></span
      >
      <span class="pokemon_atk"
        >ATK: <span class="atk">{{ atk }}</span></span
      >
      <span class="pokemon_def"
        >Def: <span class="def">{{ def }}</span></span
      >
      <span class="pokemon_spc_atk"
        >Atk Spc: <span class="atk_spc">{{ atkSpc }}</span></span
      >
    </h3>
    <span class="pokemon_type"
      >Type: <span class="type">{{ `${type1} / ${type2}` }}</span></span
    >
    <form class="form" @submit.prevent="fectchPokemon(pokemonName)">
      <input
        type="search"
        class="input_search"
        v-model="pokemonName"
        placeholder="Name or Number"
        required
      />
    </form>
    <div class="buttons">
      <button class="button btn-prev" @click="backPokemon">&lt; Prev</button>
      <button class="button btn-next" @click="nextPokemon">Next &gt;</button>
    </div>
    <img src="./assets/img/pokedex-bg.png" alt="pokedex" class="pokedex" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",

  setup() {
    let searchPokemon = ref<number>(1);
    const loading = ref<boolean>(false);
    const pokemonNumber = ref<string | undefined>();
    const pokemonName = ref<string | undefined>();
    const pokemonNameSearched = ref<string | number>("1");
    const pokemonImage = ref<string | undefined>();
    const apiMessage = ref<string | undefined>("Loading...");

    const hp = ref<number | undefined>();
    const atk = ref<number | undefined>();
    const def = ref<number | undefined>();
    const atkSpc = ref<number | undefined>();
    const type1 = ref<string | undefined>();
    const type2 = ref<string | undefined>();

    const fectchPokemon = async (value: string | number) => {
      loading.value = true;
      pokemonNameSearched.value = value;
      pokemonImage.value = undefined;
      const APIResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${
          typeof value === "number" ? value : value.toLowerCase()
        }`
      );
      if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        pokemonNameSearched.value = data.name;
        pokemonNumber.value = data.id;
        pokemonImage.value =
          data.sprites.versions["generation-v"]["black-white"].animated[
            "front_default"
          ];
        searchPokemon.value = data.id;
        loading.value = false;
        hp.value = data.stats[0].base_stat;
        atk.value = data.stats[1].base_stat;
        def.value = data.stats[2].base_stat;
        atkSpc.value = data.stats[3].base_stat;
        type1.value = data.types[0].type.name;
        type2.value = data.types[1].type.name;
      } else {
        pokemonImage.value = undefined;

        apiMessage.value = "Not Found D:";
        loading.value = true;
      }
    };

    const nextPokemon = () => {
      searchPokemon.value += 1;
      fectchPokemon(searchPokemon.value);
    };
    const backPokemon = () => {
      if (searchPokemon.value > 1) {
        searchPokemon.value -= 1;
        fectchPokemon(searchPokemon.value);
      }
    };

    return {
      pokemonName,
      fectchPokemon,
      pokemonNameSearched,
      pokemonNumber,
      pokemonImage,
      apiMessage,
      nextPokemon,
      backPokemon,
      loading,
      hp,
      atk,
      def,
      atkSpc,
      type1,
      type2,
    };
  },
  created() {
    this.fectchPokemon("1");
  },
});
</script>

<style>
</style>
