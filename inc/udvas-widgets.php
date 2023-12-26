<?php
// Register Udvas Sidebar
function udvas_register_sidebar() {
    register_sidebar(array(
        'name'          => 'Udvas Blog Sidebar',
        'id'            => 'udvas_blog_sidebar',
        'description'   => 'Sidebar for Udvas theme',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}

add_action('init', 'udvas_register_sidebar');
