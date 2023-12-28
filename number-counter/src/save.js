import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
export default function save({ attributes }) {
	const {
		startNumber,
		endNumber,
		additionalText,
		numberPrefix,
		numberSuffix,
		alignment,
	} = attributes;
	const classes = classnames(`count-up-block-align-${alignment}
	`);
	return (
		<div
			{...useBlockProps.save({
				className: classes,
			})}
		>
			<div>
				<span>{numberPrefix}</span>
				<span className='counter'>{endNumber}</span>
				<span>{numberSuffix}</span>
			</div>
			{additionalText && (
				<RichText.Content tagName="h4" value={additionalText} />
			)}
		</div>
	);
}
