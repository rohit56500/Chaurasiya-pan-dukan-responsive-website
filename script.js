// Document Ready
$(document).ready(function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Hide loader after page loads
    setTimeout(function() {
        $('.loader').addClass('fade-out');
    }, 1500);
    
    // Mobile Menu Toggle
    $('.mobile-menu-btn').click(function() {
        $('.mobile-menu').addClass('active');
        $('.overlay').addClass('active');
    });
    
    $('.close-menu-btn, .overlay').click(function() {
        $('.mobile-menu').removeClass('active');
        $('.overlay').removeClass('active');
    });
    
    // Scroll to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-to-top').addClass('active');
            $('.navbar').addClass('scrolled');
        } else {
            $('.scroll-to-top').removeClass('active');
            $('.navbar').removeClass('scrolled');
        }
    });
    
    $('.scroll-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });
    
    // Smooth Scrolling for Anchor Links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 80,
            },
            500,
            'linear'
        );
    });
    
    // Initialize Product Carousel
    $('.products-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    // Initialize Testimonial Carousel
    $('.testimonial-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    // Add to Cart Functionality
    let cartCount = 0;
    const cartCountElement = $('.cart-count');
    const mobileCartCountElement = $('.mobile-cart-icon .cart-count');
    
    $('.btn-add-to-cart').click(function() {
        cartCount++;
        updateCartCount();
        
        // Animation effect
        const productCard = $(this).closest('.product-card');
        productCard.addClass('added-to-cart');
        setTimeout(() => {
            productCard.removeClass('added-to-cart');
        }, 1000);
    });
    
    function updateCartCount() {
        cartCountElement.text(cartCount);
        mobileCartCountElement.text(cartCount);
        
        // Animation
        cartCountElement.addClass('pulse');
        mobileCartCountElement.addClass('pulse');
        setTimeout(() => {
            cartCountElement.removeClass('pulse');
            mobileCartCountElement.removeClass('pulse');
        }, 300);
    }
    
    // Form Submission
    $('form').submit(function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        $(this).trigger('reset');
    });
    
    // Newsletter Form Submission
    $('.newsletter-form').submit(function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
        $(this).trigger('reset');
    });
});