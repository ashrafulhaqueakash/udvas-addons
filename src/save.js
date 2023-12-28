import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		startNumber,
		endNumber,
		additionalText,
		numberPrefix,
		numberSuffix,
	} = attributes;
	console.log(additionalText);
	return (
		<div {...useBlockProps.save()}>
			<div>
				<span>{numberPrefix}</span>
				<span>{endNumber}</span>
				<span>{numberSuffix}</span>
			</div>
			{additionalText && (
				<RichText.Content tagName="h4" value={additionalText} />
			)}
		</div>
	);
}
