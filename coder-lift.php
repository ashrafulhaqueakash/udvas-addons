<?php
/**
 * Plugin Name:       Coderlift Block
 * Description:       A Coderlift Block with Udvas Addons.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            CoderLift
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       coderlift
 *
 * @package           blocks-course
 */

 require_once __DIR__ . '/inc/admin.php';
function coderlift_block_plugin_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'coderlift_block_plugin_init' );