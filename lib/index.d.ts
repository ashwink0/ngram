interface callObjectType {
    startYear?: number;
    endYear?: number;
    corpus?: number;
    smoothing?: number;
}
export declare function getNGram(ngram: string, options: callObjectType): Promise<unknown>;
export {};
