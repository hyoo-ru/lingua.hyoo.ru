namespace $ {
	
	const Response = $mol_data_record({
		translatedText: $mol_data_string,
	})
	
	export function $hyoo_lingua_translate( this: $, lang: string, text: string ) {
		
		if( !text.trim() ) return ''
		
		const res = this.$mol_fetch.json(
			`https://openl-translate.p.rapidapi.com/translate`,
			{
				method: 'POST',
				headers: {
					'x-rapidapi-key': 'ac9e15b3ffmsh0ca1100d872cde4p10d0a6jsn6d36584cc6c9',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					target_lang: lang,
					text,
				}),
			},
		)
		
		return Response( res as any ).translatedText
	}
	
}
