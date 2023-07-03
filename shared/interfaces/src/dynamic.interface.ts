namespace NSDynamic {
  export type ImportType<T = unknown> = Promise<{
    default: T;
  }>;
}

export default NSDynamic;
