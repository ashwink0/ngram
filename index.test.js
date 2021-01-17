const ngram=require('./lib/index')


test('Empty Content', () => {
	return ngram.getNGram('', {}).then(data => {
		expect(data).toEqual([]);
	});
});

test('Test Content', () => {
	return ngram.getNGram('the', {}).then(data => {
		expect(data.length===1).toBe(true);
	});
});

test('Fixed Year', () => {
	return ngram.getNGram('the', {year_start: 1980, year_end: 1983}).then(data => {
		expect(data[0].timeseries.length).toBe(4);
	});
});

test('Wildcard', () => {
	return ngram.getNGram('and *').then(data => {
		expect(data.length>1).toBe(true);
	});
});

test('No Options', () => {
	return ngram.getNGram('the').then(data => {
		expect(data.length===1).toBe(true);
	});
});

test('Case Sensitive', () => {
	return ngram.getNGram('the', {case_insensitive: true}).then(data => {
		expect(data.length>1).toBe(true);
	});
});

test('Test Error', () => {
	return ngram.getNGram(true, []).then(data => {
		expect(data.length===1).toBe(true);
	});
});
