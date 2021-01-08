const ngram=require('./lib/index')


test('Empty Content', () => {
	return ngram.getNGram('', {}).then(data => {
		expect(data.length===0).toBe(true);
	});
});

test('Test Content', () => {
	return ngram.getNGram('the', {}).then(data => {
		expect(data[0].timeseries.length>0).toBe(true);
	});
});

test('Fixed Year', () => {
	return ngram.getNGram('the', {startYear: 1980, endYear: 1983}).then(data => {
		expect(data[0].timeseries.length).toBe(4);
	});
});
