declare const __PATH_PREFIX__: string

declare module '*.css' {
  const content: { [key: string]: string };
  export default content;
}
