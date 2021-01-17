import * as needle from 'needle'

let baseUrl = 'https://books.google.com/ngrams/json'

interface callObjectType {
	year_start?: number,
	year_end?: number,
	corpus?: number,
	smoothing?: number,
	case_insensitive?: boolean
}

export async function getNGram(ngram: string, options?: callObjectType) {
	if (ngram === '') {
		return (new Promise(resolve => {
			resolve([])
		}));
	}

	let callOptions = {
		year_start: (options && typeof options == "object" ? (options.year_start || 1800) : 1800),
		year_end: (options && typeof options == "object" ? (options.year_end || 2019) : 2019),
		corpus: (options && typeof options == "object" ? (options.corpus || 26) : 26),
		smoothing: (options && typeof options == "object" ? (options.smoothing || 3) : 3),
		case_insensitive: (options && typeof options == "object" ? (options.case_insensitive || false) : false),
		content: ngram.toString().replace(' ', '+').replace('*', '%2A')
	};

	return new Promise(resolve => {

		needle.get(constructURL(callOptions.content, callOptions), function (error, response) {
			resolve(response.body)
		})
	})
}

function constructURL(ngram: string, options: callObjectType): string {
	let url: string = `https://books.google.com/ngrams/json?content=${ngram}&year_start=${options.year_start}&year_end=${options.year_end}&corpus=${options.corpus}&smoothing=${options.smoothing}${options.case_insensitive ? "&case_insensitive=true" : null}`;
	return url;
}
