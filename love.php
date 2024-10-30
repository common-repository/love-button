<?php
/*
Plugin Name: Love Button
Description: Add a Twitter style love/like/upvote button to your content.
Version: 0.1
Requires at least: 5.0
Author: Bryan Hadaway
Author URI: https://calmestghost.com/
License: Public Domain
License URI: https://wikipedia.org/wiki/Public_domain
Text Domain: love-button
*/

if ( !defined( 'ABSPATH' ) ) {
	http_response_code( 404 );
	die();
}

add_action( 'wp_enqueue_scripts', 'love_enqueue' );
function love_enqueue() {
	wp_enqueue_style( 'love-style', plugin_dir_url( __FILE__ ) . 'love.css' );
	wp_register_script( 'love-script', plugin_dir_url( __FILE__ ) . 'love.js' );
	wp_enqueue_script( 'love-script' );
}

add_filter( 'the_content', 'love_default_placement' );
function love_default_placement( $content ) {
	if ( is_single() && !is_preview() ) {
		$aftercontent = do_shortcode( '[love]' );
		$fullcontent  = $content . $aftercontent;
	} else {
		$fullcontent = $content;
	}
	return $fullcontent;
}

add_shortcode( 'love', 'love_shortcode' );
function love_shortcode( $atts ) {
	$atts = shortcode_atts( array(
		'url' => esc_url( get_the_permalink() ),
	), $atts );
	ob_start();
	echo '<div class="love"><applause-button url="' . esc_url( $atts['url'] ) . '" color="red" /></div>';
	echo '<style>.love{max-width:48px !important;text-align:center;margin:30px auto}applause-button{width:48px;height:48px}applause-button .count-container .count{font-size:14px;color:red;margin:5px}</style>';
	$output = ob_get_clean();
	return $output;
}