interface callObjectType {
    year_start?: number;
    year_end?: number;
    corpus?: number;
    smoothing?: number;
}
export declare function getNGram(ngram: string, options: callObjectType): Promise<unknown>;
export {};
