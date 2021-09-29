<?php
/**
 * Theme functions and definitions
 *
 * @package mik_foodie
 */ 


if ( ! function_exists( 'mik_foodie_enqueue_styles' ) ) :
	/**
	 * Load assets.
	 *
	 * @since 1.0.0
	 */
	function mik_foodie_enqueue_styles() {
		wp_enqueue_style( 'mik-style-parent', get_template_directory_uri() . '/style.css' );
		wp_enqueue_style( 'mik-foodie-style', get_stylesheet_directory_uri() . '/style.css', array( 'mik-style-parent' ), '1.0.0' );

		// Add custom fonts, used in the main stylesheet.
        wp_enqueue_style( 'mik-foodie-fonts', mik_foodie_fonts_url(), array(), null );
	}
endif;
add_action( 'wp_enqueue_scripts', 'mik_foodie_enqueue_styles', 99 );

function mik_foodie_customize_register( $wp_customize ) {
    // alignment control and setting
	$wp_customize->remove_control('mik_theme_options[blog_layout]');
	$wp_customize->add_control( 'mik_theme_options[blog_layout]', array(
		'label'             => esc_html__( 'Layout', 'mik-foodie' ),
		'section'           => 'mik_latest_blog_section',
		'type'				=> 'radio',
		'choices'			=> array( 
			'left-align' 			=> esc_html__( 'Left Align', 'mik-foodie' ),
			'center-align' 			=> esc_html__( 'Center Align', 'mik-foodie' ),
			'image-focus-outline' 	=> esc_html__( 'Image Focus Outline', 'mik-foodie' ),
		),
	) );
}

function mik_foodie_remove_action() {
	add_action( 'customize_register', 'mik_foodie_customize_register' );
}
add_action( 'init', 'mik_foodie_remove_action');

/**
 * Enqueue editor styles for Gutenberg
 */
function mik_foodie_block_editor_styles() {
    // Add custom fonts.
    wp_enqueue_style( 'mik-foodie-fonts', mik_foodie_fonts_url(), array(), null );
}
add_action( 'enqueue_block_editor_assets', 'mik_foodie_block_editor_styles' );

if ( ! function_exists( 'mik_foodie_fonts_url' ) ) :
/**
 * Register Google fonts
 *
 * @return string Google fonts URL for the theme.
 */
function mik_foodie_fonts_url() {
    $fonts_url = '';
    $fonts     = array();
    $subsets   = 'latin,latin-ext';

    /* translators: If there are characters in your language that are not supported by Jost, translate this to 'off'. Do not translate into your own language. */
    if ( 'off' !== _x( 'on', 'Jost font: on or off', 'mik-foodie' ) ) {
        $fonts[] = 'Jost:300,400,500,600,700';
    }

    $query_args = array(
        'family' => urlencode( implode( '|', $fonts ) ),
        'subset' => urlencode( $subsets ),
    );

    if ( $fonts ) {
        $fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
    }

    return esc_url_raw( $fonts_url );
}
endif;

if ( ! function_exists( 'mik_foodie_theme_defaults' ) ) :
    /**
     * Customize theme defaults.
     *
     * @since 1.0.0
     *
     * @param array $defaults Theme defaults.
     * @param array Custom theme defaults.
     */
    function mik_foodie_theme_defaults( $defaults ) {
        $defaults['enable_slider'] = false;
        $defaults['site_layout'] = 'boxed';
        $defaults['blog_layout'] = 'image-focus-outline';
        $defaults['blog_column_type'] = 'column-3';

        return $defaults;
    }
endif;
add_filter( 'mik_default_theme_options', 'mik_foodie_theme_defaults', 99 );

// Add class to body.
add_filter( 'body_class', 'mik_foodie_add_body_class' );
function mik_foodie_add_body_class( $classes ) {
    return array_merge( $classes, array( 'header-font-11' ) );
}

if ( ! function_exists( 'mik_render_slider_section' ) ) :
  /**
   * Start slider section
   *
   * @return string slider content
   * @since Mik 1.0.0
   *
   */
   function mik_render_slider_section( $content_details = array() ) {
        if ( empty( $content_details ) )
            return;

        $slider_control = mik_theme_option( 'slider_arrow' );
        $auto_slide = mik_theme_option('slider_auto_slide', false );
        $readmore = mik_theme_option( 'slider_btn_label', '' );
        ?>
    	<div id="custom-header" class="homepage-section">
            <div class="section-content banner-slider center-align column-3 slider-gap wrapper" data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "infinite": true, "speed": 1200, "dots": false, "arrows":<?php echo $slider_control ? 'true' : 'false'; ?>, "autoplay": <?php echo $auto_slide ? 'true' : 'false'; ?>, "fade": false, "draggable": true }'>
                <?php foreach ( $content_details as $content ) : ?>
                    <div class="custom-header-content-wrapper slide-item">
                        <div class="overlay"></div>
                        <?php if ( ! empty( $content['image'] ) ) : ?>
                            <img src="<?php echo esc_url( $content['image'] ); ?>" alt="<?php echo esc_attr( $content['title'] ); ?>">
                        <?php endif; ?>

                        <div class="wrapper">
                            <div class="custom-header-content">
                                <span class="cat-links">
                                    <?php the_category( ', ', '', $content['id'] ); ?>
                                </span>

                                <?php if ( ! empty( $content['title'] ) ) : ?>
                                    <h2><a href="<?php echo esc_url( $content['url'] ); ?>"><?php echo esc_html( $content['title'] ); ?></a></h2>
                                <?php endif; 

                                if ( ! empty( $content['url'] ) && ! empty( $readmore ) ) : ?>
                                    <a href="<?php echo esc_url( $content['url'] ); ?>" class="btn btn-transparent"><?php echo esc_html( $readmore ); ?></a>
                                <?php endif; ?>
                            </div><!-- .custom-header-content -->
                        </div><!-- .wrapper -->
                    </div><!-- .custom-header-content-wrapper -->
                <?php endforeach; ?>
            </div><!-- .banner-slider -->
        </div><!-- #custom-header -->
    <?php 
    }
endif;


if ( ! function_exists( 'mik_render_introduction_section' ) ) :
  /**
   * Start introduction section
   *
   * @return string introduction content
   * @since Mik 1.0.0
   *
   */
   function mik_render_introduction_section( $content_details = array() ) {
        if ( empty( $content_details ) )
            return;

        $readmore = mik_theme_option('introduction_readmore_label');

        foreach ( $content_details as $content ) : ?>

            <div id="introduction" class="relative homepage-section">
                <div class="wrapper page-section center-align">
                    <article class="hentry">
                        <div class="post-wrapper">
                            <div class="entry-container">
                                <header class="entry-header">
                                    <h2 class="entry-title"><a href="<?php echo esc_url( $content['url'] ); ?>"><?php echo esc_html( $content['title'] ); ?></a></h2>
                                </header>

                                <div class="entry-content">
                                    <p><?php echo wp_kses_post( $content['excerpt'] ); ?></p>                                  
                                </div><!-- .entry-content -->

                                <?php if ( ! empty( $readmore ) ) : ?>
                                    <div class="read-more">
                                        <a href="<?php echo esc_url( $content['url'] ); ?>" class="btn btn-transparent"><?php echo esc_html( $readmore ); ?></a>
                                    </div>
                                <?php endif; ?>
                            </div><!-- .entry-container -->

                            <?php if ( ! empty( $content['image'] ) ) : ?>
                                <div class="featured-image">
                                    <a href="<?php echo esc_url( $content['url'] ); ?>"><img src="<?php echo esc_url( $content['image'] ); ?>" alt="<?php echo esc_attr( $content['title'] ); ?>"></a>
                                </div><!-- .featured-image -->
                            <?php endif; ?>
                        </div><!-- .post-wrapper -->
                    </article>
                </div><!-- .wrapper -->
            </div><!-- #introduction -->

        <?php endforeach;
    }
endif;