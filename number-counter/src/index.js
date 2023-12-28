import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('coderlift-block/coderlift-countdown', {
	edit: Edit,
	save,
});
