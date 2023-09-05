const root = document.getElementById("root");

const OPTIONS = {
  WIN: "Ganaste!",
  LOOSE: "Perdiste! ¿Quieres la revancha?",
  TIE: "Empataste! ¿Quieres volverlo a intentar?",
};

const TRIES = {
  PIEDRA_VS_PAPEL: OPTIONS.LOOSE,
  PIEDRA_VS_TIJERAS: OPTIONS.WIN,
  PIEDRA_VS_PIEDRA: OPTIONS.TIE,
  PAPEL_VS_PAPEL: OPTIONS.TIE,
  PAPEL_VS_TIJERAS: OPTIONS.LOOSE,
  PAPEL_VS_PIEDRA: OPTIONS.WIN,
  TIJERAS_VS_PIEDRA: OPTIONS.LOOSE,
  TIJERAS_VS_PAPEL: OPTIONS.WIN,
  TIJERAS_VS_TIJERAS: OPTIONS.TIE,
};

let user = undefined;

const random = (min, max) => Math.ceil(Math.random() * (max - min) + min);

document.addEventListener("click", ({ target }) => {
  if (target.nodeName === "BUTTON") {
    const { textContent } = target;
    const container = document.querySelector("#container");
    const gameElement = document.querySelector("#game");
    const text = textContent.toLowerCase();
    const buttonLanzar = document.querySelector('[name="lanzar"]');
    const keywords = ["piedra", "papel", "tijeras"];

    if (text === "start") {
      container.classList.toggle("hidden");
      gameElement.classList.toggle("hidden");

      return;
    }

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

    const value = random(0, 2);
    const bot = keywords[value].toUpperCase();
    if (name === "lanzar") {
      console.log(bot);
      const result = TRIES[`${user.toUpperCase()}_VS_${bot}`];
      const finalOptions =
        result === OPTIONS.WIN ? alert(result) : confirm(result);

      if (!finalOptions) {
        container.classList.toggle("hidden");
        gameElement.classList.toggle("hidden");
      }
    }
  }
});
