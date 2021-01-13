interface callObjectType {
    year_start?: number;
    year_end?: number;
    corpus?: number;
    smoothing?: number;
    case_insensitive?: boolean;
}
export declare function getNGram(ngram: string, options?: callObjectType): Promise<unknown>;
export {};
