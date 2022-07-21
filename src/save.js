import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __( 'Dojo Block – hello from the saved content!', 'dojo-block' ) }
		</p>
	);
}
