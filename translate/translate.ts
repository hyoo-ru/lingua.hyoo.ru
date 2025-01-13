namespace $ {
	
	const Response = $mol_data_array(
		$mol_data_record({
			"result": $mol_data_record({
				"response": $mol_data_array(
					$mol_data_array(
						$mol_data_string
					)
				)
			})
		})
	)
	
	export function $hyoo_lingua_translate( this: $, lang: string, text: string ) {
		
		if( !text.trim() ) return ''
		
		const res = this.$mol_fetch.json(
			`https://quick-translate.p.rapidapi.com/translate-single`,
			{
				method: 'POST',
				headers: {
					'x-rapidapi-key': 'ac9e15b3ffmsh0ca1100d872cde4p10d0a6jsn6d36584cc6c9',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					target: lang,
					text,
				}),
			},
		)
		
		return Response( res as any )[0].result.response[0][0]
	}
	
}
