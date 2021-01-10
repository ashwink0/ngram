import * as needle from 'needle'
let baseUrl='https://books.google.com/ngrams/json'
interface callObjectType{
	year_start ?: number,
	year_end ?: number,
	corpus ?: number,
	smoothing ?: number,
}

export async function getNGram(ngram: string, options: callObjectType){
	if(ngram===''){
		return(new Promise(resolve => {
			resolve([])
		}));
	}

	let callOptions={
		year_start: options.year_start || 1800,
		year_end: options.year_end || 2019,
		corpus: options.corpus ||  26,
		smoothing: options.smoothing ||  3,
		content: ngram.replace(' ', '+').replace('*', '%2A')
	};

	return new Promise(resolve => {
		needle.get(constructURL(callOptions.content, callOptions), function(error, response) {
			resolve(response.body)
		})
	})
}


function constructURL(ngram: string, options: callObjectType): string{
	let url:string=`https://books.google.com/ngrams/json?content=${ngram}&year_start=${options.year_start}&year_end=${options.year_end}&corpus=${options.corpus}&smoothing=${options.smoothing}`;
	return url;
}
