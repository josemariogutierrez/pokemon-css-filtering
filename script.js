// @ts-nocheck
const container = document.getElementById("pokemon-container");

function renderPokemonList(data) {
  data.forEach((pokemon) => {
    const { id, name, type_1, type_2, img_name } = pokemon;

    const pokemonDiv = `
      <div class="pokemon" data-name="${name}" data-type="${type_1}${type_2 && `,${type_2}`}">
          <div class="img-container"><img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${img_name}.png" alt="${name}" width="192" height="180" loading="lazy"/></div>
          <div>
              <div>#${id} ${name}</div>
              <div class="types">
                <span class="type ${type_1}">${type_1}</span>
                ${type_2 && `<span class="type ${type_2}">${type_2}</span>`}
              </div>
          </div>
      </div>
    `;
                
    container.insertAdjacentHTML("beforeend", pokemonDiv);
  });
  return;
};

function fetchPokemonData() {
  fetch('./pokemon.json')
    .then((response) => response.json())
    .then((result) => {
      container.innerHTML = "";
      renderPokemonList(result);
    })
    .catch((error) => console.log("error", error));
}

fetchPokemonData();
