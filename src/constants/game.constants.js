export const OPTIONS = {
  WIN: 'Ganaste!',
  LOOSE: 'Perdiste! ¿Quieres la revancha?',
  TIE: 'Empataste! ¿Quieres volverlo a intentar?',
}

export const KEYWORDS = ['piedra', 'papel', 'tijeras']
export const BUTTONS = [
  {
    title: 'Piedra',
    name: 'piedra',
    svg: 'src/assets/piedra.svg',
  },
  {
    title: 'Papel',
    name: 'papel',
    svg: 'src/assets/papel.svg',
  },
  {
    title: 'Tijeras',
    name: 'tijeras',
    svg: 'src/assets/tijeras.svg',
  },
]

export const NUMBER_TRIES = 1
export const DONE = 0

export const DEFAULT_GAME_LOOP = NUMBER_TRIES
