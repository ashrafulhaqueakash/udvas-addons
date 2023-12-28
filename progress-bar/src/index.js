import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('coderlift-block/progress-bar', {
	edit: Edit,
	save,
});
