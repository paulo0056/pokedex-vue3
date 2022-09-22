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
    <img src="./assets/img/pokedex.png" alt="pokedex" class="pokedex" />
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
        loading.value = false;
      } else {
        pokemonImage.value = undefined;

        apiMessage.value = "Pokemon Not Found D:";
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
    };
  },
  created() {
    this.fectchPokemon("1");
  },
});
</script>

<style>
</style>
