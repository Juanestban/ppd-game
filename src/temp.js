const OPTIONS = {
  WIN: "Ganaste!",
  LOOSE: "Perdiste! ¿Quieres la revancha?",
  TIE: "Empataste! ¿Quieres volverlo a intentar?",
};

const keywords = ["piedra", "papel", "tijeras"];
const random = (min, max) => Math.ceil(Math.random() * (max - min) + min);

/**
 * Simula el juego "piedra, papel o tijeras" entre el jugador y el oponente.
 *
 * @param {string} player - Movimiento del jugador.
 * @returns {string} - Devuelve un mensaje del objeto OPTIONS según el resultado del juego.
*/
function game(player) {
  const valueRandom = random(0, 2);
  const opponent = keywords[valueRandom]

  if (opponent === keywords[0] && player == keywords[2]) { 
    return OPTIONS.LOOSE
  } else if (opponent === keywords[1] && player === keywords[0]) { 
    return OPTIONS.LOOSE
  } else if (opponent === keywords[2] && player === keywords[1]) {
    return OPTIONS.LOOSE
  } else if (opponent === player) { 
    return OPTIONS.TIE
  }

  return OPTIONS.WIN
}

let user = undefined;

document.addEventListener("click", ({ target }) => {
  if (target.nodeName === "BUTTON") {
    const container = document.querySelector("#container");
    const gameElement = document.querySelector("#game");
    const buttonLanzar = document.querySelector('[name="lanzar"]');
    const keywords = ["piedra", "papel", "tijeras"];

    const { name } = target;

    if (keywords.includes(name.toLowerCase())) {
      keywords.forEach((key) => {
        const element = document.querySelector(`[name="${key}"]`);
        element.classList.remove("selected");
      });

      target.classList.add("selected");
      user = name;
      buttonLanzar.removeAttribute("disabled");
      buttonLanzar.classList.remove("hidden");

      return;
    }

    if (name === "lanzar") {

      const result = game(user)
      const finalOptions =
        result === OPTIONS.WIN ? alert(result) : confirm(result);

      if (!finalOptions) {
        container.classList.toggle("hidden");
        gameElement.classList.toggle("hidden");
      }
    }
  }
});