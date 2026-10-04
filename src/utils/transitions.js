/* Invalida callbacks tardíos cuando se cancela o sustituye una transición. */
export function createTransitionGuard(){
  let generation=0;
  return {
    begin(){return ++generation;},
    cancel(){generation++;},
    isCurrent(token){return token===generation;}
  };
}
