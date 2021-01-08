var needle = require('needle');

let baseUrl='https://books.google.com/ngrams/json'

interface callObjectType{
	startYear ?: number,
	endYear ?: number,
	corpus ?: number,
	smoothing ?: number,
}

export async function getNGram(ngram: string, options: callObjectType){
	if(ngram===''){
		Error("'ngram' option cannot be empty.")
	}

	let callOptions={
		year_start: options.startYear || 1800,
		year_end: options.endYear || 2019,
		corpus: options.corpus ||  26,
		smoothing: options.smoothing ||  3,
		content: ngram
	};

	return new Promise(resolve => {
		needle.request('get', baseUrl, callOptions, function(err: any, resp: { statusCode: number; body: unknown; }) {
			if (!err && resp.statusCode === 200){
				console.log(resp.body)
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


