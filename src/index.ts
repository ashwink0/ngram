import * as needle from 'needle'
let baseUrl='https://books.google.com/ngrams/json'

interface callObjectType{
	startYear ?: number,
	endYear ?: number,
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
		year_start: options.startYear || 1800,
		year_end: options.endYear || 2019,
		corpus: options.corpus ||  26,
		smoothing: options.smoothing ||  3,
		content: ngram
	};

	return new Promise(resolve => {
		needle.request('get', baseUrl, callOptions, (err, resp) => {
			if (!err && resp.statusCode === 200){
				resolve(resp.body)
			}
			else{
				resolve({
					error: "Connection Failed"
				})
			}
		});
	})
}


