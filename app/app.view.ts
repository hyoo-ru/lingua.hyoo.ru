namespace $.$$ {
	export class $hyoo_lingua_app extends $.$hyoo_lingua_app {
		
		langs() {
			return this.$.$hyoo_lingua_langs
		}
		
		@ $mol_mem
		native_lang( next?: string ) {
			const local = this.$.$mol_state_local.value( 'native_lang', next )
			return this.$.$mol_state_arg.value( 'native_lang', next ) ?? local ?? $mol_locale.lang()
		}
		
		@ $mol_mem
		foreign_lang( next?: string ) {
			const local = this.$.$mol_state_local.value( 'foreign_lang', next )
			return this.$.$mol_state_arg.value( 'foreign_lang', next ) ?? local ?? 'en'
		}
		
		@ $mol_mem
		native_text( next?: string ) {
			return this.$.$mol_state_arg.value( 'native_text', next ) ?? ''
		}
		
		@ $mol_mem
		foreign_text( next?: string ) {
			return this.$.$mol_state_arg.value( 'foreign_text', next ) ?? ''
		}
		
		@ $mol_action
		native_translate() {
			const res = this.$.$hyoo_lingua_translate( this.foreign_lang(), this.native_text() )
			this.foreign_text( res )
			this.$.$mol_state_arg.commit()
			this.Foreign_pane().dom_node().scrollIntoView({ behavior: 'smooth' })
		}
		
		@ $mol_action
		foreign_translate() {
			const res = this.$.$hyoo_lingua_translate( this.native_lang(), this.foreign_text() )
			this.native_text( res )
			this.$.$mol_state_arg.commit()
			this.Native_pane().dom_node().scrollIntoView({ behavior: 'smooth' })
		}

		@ $mol_mem
		native_alt_list() {
			return this.alt_uris().map( ( _, index )=> this.Native_alt_link( index ) )
		}
		
		@ $mol_mem
		foreign_alt_list() {
			return this.alt_uris().map( ( _, index )=> this.Foreign_alt_link( index ) )
		}
		
		@ $mol_mem_key
		native_alt_link( index: number ) {
			return this.alt_uris()[ index ]
				.replace( '{lang}', this.native_lang() )
				.replace( '{text}', this.foreign_text() )
		}
		
		@ $mol_mem_key
		foreign_alt_link( index: number ) {
			return this.alt_uris()[ index ]
				.replace( '{lang}', this.foreign_lang() )
				.replace( '{text}', this.native_text() )
		}
		
	}
}
