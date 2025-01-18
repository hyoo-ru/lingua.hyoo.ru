namespace $.$$ {
	export class $hyoo_lingua_app extends $.$hyoo_lingua_app {
		
		langs() {
			return this.$.$hyoo_lingua_langs
		}
		
		@ $mol_mem
		native_lang( next?: string ) {
			return this.$.$mol_state_arg.value( 'native_lang', next ) ?? $mol_locale.lang()
		}
		
		@ $mol_mem
		foreign_lang( next?: string ) {
			return this.$.$mol_state_arg.value( 'foreign_lang', next ) ?? 'en'
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
			this.$.$mol_state_arg.go({})
			this.foreign_text( this.$.$hyoo_lingua_translate( this.foreign_lang(), this.native_text() ) )
			this.Foreign_pane().dom_node().scrollIntoView({ behavior: 'smooth' })
		}
		
		@ $mol_action
		foreign_translate() {
			this.$.$mol_state_arg.go({})
			this.native_text( this.$.$hyoo_lingua_translate( this.native_lang(), this.foreign_text() ) )
			this.Native_pane().dom_node().scrollIntoView({ behavior: 'smooth' })
		}
		
	}
}
