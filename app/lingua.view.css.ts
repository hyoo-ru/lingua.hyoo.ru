namespace $.$$ {
	
	const {rem} = $mol_style_unit
	
	$mol_style_define( $hyoo_lingua_app, {
		
		Native_translate: {
			flex: {
				basis: rem(2),
				grow: 1,
			},
			justifyContent: 'flex-end',
		},
		
		Foreign_translate: {
			flex: {
				basis: rem(2),
				grow: 1,
			},
		},
		
		Foreign_pane: {
			padding: $mol_gap.block,
			flex: {
				basis: rem(25),
				grow: 1,
			},
		},
		
		Native_pane: {
			padding: $mol_gap.block,
			flex: {
				basis: rem(25),
				grow: 1,
			},
		},
		
	} )
	
}
