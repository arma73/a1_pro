namespace NSAPIGame {
  export interface Collections {
    novelty: number;
    popularity: number;
    slots: number;
    _hd: number;
    all: number;
    bonusbuy?: number;
  }

  export interface Currency {
    id: number;
  }

  export interface GameType {
    id: string;
    title: string;
    provider: string;
    collections: Collections;
    real: Record<string, Currency>;
    demo: string;
  }
}

export default NSAPIGame;
