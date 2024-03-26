// declare module '*.scss' {
//   const content: { [className: string]: string };
//   export default content;
// }
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classnames: IClassNames;
  export = classnames;
}