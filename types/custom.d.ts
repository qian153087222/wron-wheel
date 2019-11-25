//自定义的各种类型
/**
 * 给所有svg加了个默认导出
 */
declare module '*.svg' {
    const content:any;
    export default content;
}