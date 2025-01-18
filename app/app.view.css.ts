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
				basis: rem(21),
				grow: 1,
			},
		},
		
		Native_pane: {
			padding: $mol_gap.block,
			flex: {
				basis: rem(21),
				grow: 1,
			},
		},

		Foot: {
			flex: {
				wrap: 'wrap',
			},
		},
		
		Native_alt_list: {
			direction: 'rtl',
		},

		Native_bar: {
			flex: {
				wrap: 'wrap',
				basis: '50%',
				direction: 'row-reverse',
			},
			justify: {
				content: 'flex-end',
			},
		},
		
		Foreign_bar: {
			flex: {
				wrap: 'wrap',
				basis: '50%',
			},
			justify: {
				content: 'flex-end',
			},
		},
		
		Native_tools: {
			flex: {
				grow: 1,
				basis: '12rem',
			},
			justify: {
				content: 'flex-end',
			},
		},
		
		Foreign_tools: {
			flex: {
				grow: 1,
				basis: '12rem',
			},
		},
		
	} )
	
}
