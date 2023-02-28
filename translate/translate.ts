namespace $ {
	
	export let $hyoo_lingua_translate_api = 'https://hyoo-translate.hf.space/run/translate'
	
	const Response = $mol_data_record({
		data: $mol_data_array( $mol_data_string )
	})
	
	export function $hyoo_lingua_translate( lang: string, text: string ) {
			
		const response = $mol_fetch.json( $hyoo_lingua_translate_api, {
			method: 'post',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: [ lang, text ]
			})
		} )
		
		return Response( response as any ).data[0]
	}
	
}
