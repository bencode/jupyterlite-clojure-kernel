declare module 'sci-npm' {
  /**
   * Evaluates ClojureScript code string and returns the result
   * @param code The ClojureScript code to evaluate
   * @returns The evaluation result
   */
  export function eval_string(code: string): any
}
