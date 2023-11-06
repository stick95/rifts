// Create a typings.d.ts file in your source directory
declare module "@3d-dice/dice-box" {
  interface DiceBoxOptions {
    assetPath: string;
    // Add other options as needed
  }

  export default class DiceBox {
    constructor(selector: string, options?: DiceBoxOptions);
    init: () => Promise<void>;
    roll: (notation: string, options?: object) => void;
    clear: () => void;
    show: () => void;
    updateConfig: (config: object) => void;
    onRollComplete: (result:any) => void;
  }
}
