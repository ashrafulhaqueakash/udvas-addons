<?php
/*
Plugin Name: Udvas Addons
Description: Custom addons for Udvas theme.
Version: 1.0
Author: Coderlift
*/


// Define plugin directory constants
define('UDVAS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('UDVAS_PLUGIN_URL', plugin_dir_url(__FILE__));

// Define specific directories within the plugin
define('UDVAS_ASSETS_DIR', UDVAS_PLUGIN_DIR . 'assets/');
define('UDVAS_ASSETS_URL', UDVAS_PLUGIN_URL . 'assets/');

define('UDVAS_INC_DIR', UDVAS_PLUGIN_DIR . 'inc/');
define('UDVAS_INC_URL', UDVAS_PLUGIN_URL . 'inc/');


// Include Udvas Data
require_once( UDVAS_INC_DIR . 'udvas-widgets.php');
require_once( UDVAS_PLUGIN_DIR . 'addons-base.php');


// Gutenberg Category

function udvas_enqueue_block_editor_assets() {
    wp_enqueue_script(
        'udvas-addons-block',
        UDVAS_PLUGIN_URL . 'udvas-addons-block.js',
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(UDVAS_PLUGIN_URL . 'udvas-addons-block.js'),
        true
    );
}

add_action('enqueue_block_editor_assets', 'udvas_enqueue_block_editor_assets');
