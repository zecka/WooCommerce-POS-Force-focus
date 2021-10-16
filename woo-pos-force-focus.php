<?php
/*
Plugin Name: WooCommerce POS Force Focus
Description: Force focus on POS Search field
Author: Robin Ferrari
Version: 0.0.1
Author URI: http://robinferrari.ch
*/
add_filter('woocommerce_pos_enqueue_footer_js', 'woo_patch_pos_force_focus', 10);
function woo_patch_pos_force_focus($js) {
   $js[] =plugin_dir_url(__FILE__) . 'woo-pos-force-focus.js';
   return $js;
}

