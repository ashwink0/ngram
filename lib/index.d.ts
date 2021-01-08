declare var needle: any;
declare let baseUrl: string;
interface callObjectType {
    startYear?: number;
    endYear?: number;
    corpus?: number;
    smoothing?: number;
}
declare function getNGram(ngram: string, options: callObjectType): Promise<unknown>;
