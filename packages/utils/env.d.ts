declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle) */
declare function getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
 
declare let CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclaration;
};