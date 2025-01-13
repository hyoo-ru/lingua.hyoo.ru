namespace $ {
	
	const Response = $mol_data_record({
		trans: $mol_data_string,
		source_language: $mol_data_string,
		source_language_code: $mol_data_string,
		trust_level: $mol_data_number,
	})
	
	export function $hyoo_lingua_translate( this: $, lang: string, text: string ) {
		
		if( !text.trim() ) return ''
		
		const res = this.$mol_fetch.json(
			`https://google-translate113.p.rapidapi.com/api/v1/translator/text`,
			{
				method: 'POST',
				headers: {
					'x-rapidapi-key': 'ac9e15b3ffmsh0ca1100d872cde4p10d0a6jsn6d36584cc6c9',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					from: 'auto',
					to: lang,
					text,
				}),
			},
		)
		
		return Response( res as any ).trans
	}
	
}
