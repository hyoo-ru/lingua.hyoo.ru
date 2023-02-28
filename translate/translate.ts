namespace $ {
	
	export function $hyoo_lingua_translate( this: $, lang: string, text: string ) {
		return this.$mol_huggingface_run( 'hyoo-translate', 0, lang, text )[0]
	}
	
}
