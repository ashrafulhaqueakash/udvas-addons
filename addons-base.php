<?php

function udvas_widget_assets() {
    wp_enqueue_script(
        'udvas-progress-bar-block',
        UDVAS_PLUGIN_URL . 'udvas-progress-bar-block.js',
        array('wp-blocks', 'wp-components', 'wp-element', 'wp-editor'),
        filemtime(UDVAS_PLUGIN_URL . 'udvas-progress-bar-block.js'),
        true
    );
}

add_action('enqueue_block_editor_assets', 'udvas_widget_assets');
