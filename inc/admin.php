<?php

function my_custom_block_category($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'coderlift',
                'title' => 'Coder Lift',
                'icon'  => 'wordpress',
            ),
        )
    );
}

add_filter('block_categories', 'my_custom_block_category', 10, 2);