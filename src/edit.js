import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import './editor.scss';
import {
	PanelBody,
	RangeControl,
	TextControl,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const {
		startNumber,
		endNumber,
		additionalText,
		numberPrefix,
		numberSuffix,
	} = attributes;
	const onChangeStartNumber = (newStartNumber) => {
		setAttributes({ startNumber: newStartNumber });
	};
	const onChangeEndNumber = (newEndNumber) => {
		setAttributes({ endNumber: newEndNumber });
	};
	const onChangeAdditionalText = (newAdditionalText) => {
		setAttributes({ additionalText: newAdditionalText });
	};
	const onChangePrefixNumberText = (newNumberPrefix) => {
		setAttributes({ numberPrefix: newNumberPrefix });
	};
	const onChangeSuffixNumberText = (newNumberSuffix) => {
		setAttributes({ numberSuffix: newNumberSuffix });
	};
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__('Start Number', 'coderlift')}
						min={0}
						max={1000}
						onChange={onChangeStartNumber}
						value={startNumber}
					/>
					{/* <RangeControl
						label={__('End Number', 'coderlift')}
						min={0}
						max={1000}
						onChange={onChangeEndNumber}
						value={endNumber}
					/> */}
					<NumberControl
						label={__('End Number', 'coderlift')}
						isShiftStepEnabled={true}
						onChange={onChangeEndNumber}
						shiftStep={10}
						value={endNumber}
					/>
					<TextControl
						label={__('Aditional Text', 'coderlift')}
						onChange={onChangeAdditionalText}
						value={additionalText}
						placeholder={__('Your Text', 'coderlift')}
					/>
					<TextControl
						label={__('Prefix Number', 'coderlift')}
						onChange={onChangePrefixNumberText}
						placeholder={__('Please Type +', 'coderlift')}
					/>
					<TextControl
						label={__('Suffix Number', 'coderlift')}
						onChange={onChangeSuffixNumberText}
						placeholder={__('Please Type +', 'coderlift')}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<span>{numberPrefix}</span>
				<span>{endNumber}</span>
				<span>{numberSuffix}</span>
				<RichText
					placeholder={__('Replace Me', 'coderlift')}
					tagName="h4"
					onChange={onChangeAdditionalText}
					value={additionalText}
					// allowedFormats={[]}
				/>
			</div>
		</>
	);
}
