namespace $ {
	
	export function $hyoo_lingua_translate( this: $, lang: string, text: string ) {
		
		const cache_key = `$hyoo_lingua_translate(${ JSON.stringify(lang) },${ JSON.stringify(text) })`
		const cached = this.$mol_state_local.value( cache_key )
		if( cached ) return String( cached )
		
		const translated = this.$mol_huggingface_run( 'hyoo-translate', 0, lang, text )[0] as string
		return this.$mol_state_local.value( cache_key, translated )!
	}
	
}
