document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Search Toggle
    const searchBtn = document.querySelector('.search-btn');
    const searchBox = document.querySelector('.search-box');
    
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchBox.classList.toggle('active');
    });

    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    const sliderDots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (index + slideCount) % slideCount;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelector('.testimonial-dots');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    
    let currentTestimonial = 0;
    const testimonialCount = testimonialSlides.length;
    
    // Create dots
    testimonialSlides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialDots.appendChild(dot);
    });
    
    const testimonialDotElements = document.querySelectorAll('.testimonial-dot');
    
    function goToTestimonial(index) {
        testimonialSlides[currentTestimonial].classList.remove('active');
        testimonialDotElements[currentTestimonial].classList.remove('active');
        
        currentTestimonial = (index + testimonialCount) % testimonialCount;
        
        testimonialSlides[currentTestimonial].classList.add('active');
        testimonialDotElements[currentTestimonial].classList.add('active');
    }
    
    testimonialNext.addEventListener('click', () => {
        goToTestimonial(currentTestimonial + 1);
    });
    
    testimonialPrev.addEventListener('click', () => {
        goToTestimonial(currentTestimonial - 1);
    });

    // Product Data
    const products = [
        {
            id: 1,
            title: "Premium Wireless Headphones",
            price: 299.99,
            images: [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "electronics",
            rating: 4.5,
            colors: ["Black", "Silver", "Gold"],
            sizes: ["One Size"],
            description: "Experience premium sound quality with our state-of-the-art wireless headphones. Featuring noise cancellation, 30-hour battery life, and luxurious comfort.",
            badge: "Bestseller"
        },
        {
            id: 2,
            title: "Luxury Smart Watch",
            price: 499.99,
            images: [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "electronics",
            rating: 5,
            colors: ["Black", "Rose Gold"],
            sizes: ["Small", "Medium", "Large"],
            description: "Stay connected in style with our luxury smart watch. Track your fitness, receive notifications, and enjoy premium materials with this exquisite timepiece.",
            badge: "New"
        },
        {
            id: 3,
            title: "Designer Leather Jacket",
            price: 599.99,
            images: [
                "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "men",
            rating: 4,
            colors: ["Black", "Brown", "Navy"],
            sizes: ["S", "M", "L", "XL"],
            description: "Crafted from the finest leather, this designer jacket combines timeless style with modern comfort. Perfect for any occasion.",
            badge: "Limited"
        },
        {
            id: 4,
            title: "Silk Evening Gown",
            price: 799.99,
            images: [
                "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1585487000160-6ebcfceb595d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "women",
            rating: 5,
            colors: ["Black", "Red", "Navy"],
            sizes: ["S", "M", "L"],
            description: "Make a statement with this exquisite silk evening gown. Handcrafted with attention to detail for a flawless fit and luxurious feel.",
            badge: "Popular"
        },
        {
            id: 5,
            title: "Designer Sunglasses",
            price: 349.99,
            images: [
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1596704017256-d7c8e0f4bd0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "accessories",
            rating: 4.5,
            colors: ["Black", "Gold", "Silver"],
            sizes: ["One Size"],
            description: "Protect your eyes in style with these designer sunglasses. Featuring UV400 protection and premium polarized lenses.",
            badge: "Trending"
        },
        {
            id: 6,
            title: "Leather Crossbody Bag",
            price: 459.99,
            images: [
                "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "accessories",
            rating: 4,
            colors: ["Black", "Brown", "Tan"],
            sizes: ["One Size"],
            description: "This luxurious leather crossbody bag combines functionality with high fashion. Perfect for everyday use with ample space for essentials.",
            badge: ""
        },
        {
            id: 7,
            title: "Premium Running Shoes",
            price: 249.99,
            images: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "footwear",
            rating: 4.5,
            colors: ["Black", "White", "Blue"],
            sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
            description: "Engineered for performance and comfort, these premium running shoes provide superior cushioning and support for your active lifestyle.",
            badge: "Sale"
        },
        {
            id: 8,
            title: "Cashmere Sweater",
            price: 399.99,
            images: [
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "men",
            rating: 5,
            colors: ["Navy", "Gray", "Black"],
            sizes: ["S", "M", "L", "XL"],
            description: "Crafted from 100% pure cashmere, this luxurious sweater offers unparalleled softness and warmth for the colder months.",
            badge: "Premium"
        }
    ];

    // Display Products
    const productContainer = document.getElementById('product-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    function displayProducts(filter = 'all') {
        productContainer.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-id', product.id);
            productCard.setAttribute('data-category', product.category);
            
            productCard.innerHTML = `
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="product-image">
                    <img src="${product.images[0]}" alt="${product.title}">
                    <div class="product-actions">
                        <button class="action-btn quick-view-btn" aria-label="Quick view">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn wishlist-btn" aria-label="Add to wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                        ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(product.rating))}
                    </div>
                    <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                </div>
            `;
            
            productContainer.appendChild(productCard);
        });
        
        // Add event listeners to the new buttons
        addProductEventListeners();
    }
    
    // Filter Products
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayProducts(filter);
        });
    });
    
    // Cart Functionality
    let cart = [];
    const cartCountElements = document.querySelectorAll('.cart-count');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSubtotal = document.querySelector('.cart-subtotal');
    const cartTotal = document.querySelector('.cart-total');
    
    // Toggle Cart
    document.querySelectorAll('[href="#cart"], .cart-icon').forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    cartOverlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Add to Cart
    function addToCart(productId, quantity = 1, color = null, size = null) {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId && item.color === color && item.size === size);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.images[0],
                quantity: quantity,
                color: color,
                size: size
            });
        }
        
        updateCart();
        showToast(`${product.title} added to cart`);
    }
    
    // Update Cart
    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElements.forEach(el => el.textContent = totalItems);
        
        // Update cart items
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartSubtotal.textContent = '$0.00';
            cartTotal.textContent = '$0.00';
            return;
        }
        
        let subtotal = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    ${item.color ? `<div class="cart-item-option">Color: ${item.color}</div>` : ''}
                    ${item.size ? `<div class="cart-item-option">Size: ${item.size}</div>` : ''}
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn decrease">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}" data-color="${item.color || ''}" data-size="${item.size || ''}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
            subtotal += item.price * item.quantity;
        });
        
        // Update totals
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${subtotal.toFixed(2)}`;
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.closest('.cart-item').querySelector('.remove-item').getAttribute('data-id'));
                const itemColor = this.closest('.cart-item').querySelector('.remove-item').getAttribute('data-color');
                const itemSize = this.closest('.cart-item').querySelector('.remove-item').getAttribute('data-size');
                
                const item = cart.find(item => 
                    item.id === itemId && 
                    item.color === (itemColor || null) && 
                    item.size === (itemSize || null)
                );
                
                item.quantity++;
                updateCart();
            });
        });
        
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.closest('.cart-item').querySelector('.remove-item').getAttribute('data-id'));
                const itemColor = this.closest('.cart-item').querySelector('.remove-item').getAttribute('data-color');
                const itemSize = this.closest('.cart-item').querySelector('.remove-item').getAttribute('data-size');
                
                const item = cart.find(item => 
                    item.id === itemId && 
                    item.color === (itemColor || null) && 
                    item.size === (itemSize || null)
                );
                
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart = cart.filter(cartItem => 
                        !(cartItem.id === itemId && 
                        cartItem.color === (itemColor || null) && 
                        cartItem.size === (itemSize || null))
                    );
                }
                
                updateCart();
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const itemColor = this.getAttribute('data-color');
                const itemSize = this.getAttribute('data-size');
                
                cart = cart.filter(item => 
                    !(item.id === itemId && 
                    item.color === (itemColor || null) && 
                    item.size === (itemSize || null))
                );
                
                updateCart();
            });
        });
    }
    
    // Quick View Modal
    const quickViewModal = document.querySelector('.quick-view-modal');
    const quickViewContainer = document.querySelector('.quick-view-container');
    const quickViewContent = document.querySelector('.quick-view-content');
    const closeQuickView = document.querySelector('.close-quick-view');
    
    function showQuickView(productId) {
        const product = products.find(p => p.id === productId);
        
        quickViewContent.innerHTML = `
            <div class="quick-view-gallery">
                <div class="thumbnail-list">
                    ${product.images.map((img, index) => `
                        <img src="${img}" alt="${product.title} - ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}">
                    `).join('')}
                </div>
                <img src="${product.images[0]}" alt="${product.title}" class="main-image">
            </div>
            <div class="quick-view-details">
                <h1 class="quick-view-title">${product.title}</h1>
                <div class="quick-view-price">$${product.price.toFixed(2)}</div>
                <div class="quick-view-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                    ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(product.rating))}
                    <span class="rating-count">(${Math.floor(Math.random() * 100) + 10} reviews)</span>
                </div>
                <p class="quick-view-description">${product.description}</p>
                
                ${product.colors ? `
                <div class="quick-view-options">
                    <div class="option-group">
                        <div class="option-title">Color</div>
                        <div class="option-values">
                            ${product.colors.map(color => `
                                <div class="option-value color-option ${color.toLowerCase().replace(' ', '-')} ${color === product.colors[0] ? 'active' : ''}" 
                                    data-value="${color}" style="background-color: ${getColorValue(color)}">
                                    ${color === product.colors[0] ? '<i class="fas fa-check"></i>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                ` : ''}
                
                ${product.sizes ? `
                <div class="quick-view-options">
                    <div class="option-group">
                        <div class="option-title">Size</div>
                        <div class="option-values">
                            ${product.sizes.map(size => `
                                <div class="option-value size-option ${size === product.sizes[0] ? 'active' : ''}" data-value="${size}">
                                    ${size}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                ` : ''}
                
                <div class="quantity-selector">
                    <div class="option-title">Quantity</div>
                    <div class="quantity-control">
                        <button class="quantity-btn decrease">-</button>
                        <input type="number" class="quantity-input" value="1" min="1">
                        <button class="quantity-btn increase">+</button>
                    </div>
                </div>
                
                <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                <button class="btn wishlist-btn">Add to Wishlist</button>
            </div>
        `;
        
        // Add event listeners for thumbnails
        const thumbnails = quickViewContent.querySelectorAll('.thumbnail');
        const mainImage = quickViewContent.querySelector('.main-image');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                mainImage.src = this.src;
            });
        });
        
        // Add event listeners for color/size options
        quickViewContent.querySelectorAll('.option-value').forEach(option => {
            option.addEventListener('click', function() {
                const group = this.classList.contains('color-option') ? 'color-option' : 
                              this.classList.contains('size-option') ? 'size-option' : null;
                
                if (group) {
                    this.closest('.option-values').querySelectorAll(`.${group}`).forEach(opt => {
                        opt.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    if (group === 'color-option') {
                        this.innerHTML = '<i class="fas fa-check"></i>';
                    }
                }
            });
        });
        
        // Add event listeners for quantity controls
        const quantityInput = quickViewContent.querySelector('.quantity-input');
        
        quickViewContent.querySelector('.increase').addEventListener('click', function() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });
        
        quickViewContent.querySelector('.decrease').addEventListener('click', function() {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });
        
        // Add to cart from quick view
        quickViewContent.querySelector('.add-to-cart-btn').addEventListener('click', function() {
            const color = quickViewContent.querySelector('.color-option.active')?.getAttribute('data-value') || null;
            const size = quickViewContent.querySelector('.size-option.active')?.getAttribute('data-value') || null;
            const quantity = parseInt(quantityInput.value);
            
            addToCart(productId, quantity, color, size);
            quickViewModal.classList.remove('active');
        });
        
        // Show modal
        quickViewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function getColorValue(color) {
        const colors = {
            'Black': '#000000',
            'Silver': '#C0C0C0',
            'Gold': '#FFD700',
            'Rose Gold': '#E0BFB8',
            'Brown': '#A52A2A',
            'Tan': '#D2B48C',
            'Navy': '#000080',
            'Gray': '#808080',
            'White': '#FFFFFF',
            'Blue': '#0000FF',
            'Red': '#FF0000'
        };
        
        return colors[color] || '#FFFFFF';
    }
    
    closeQuickView.addEventListener('click', function() {
        quickViewModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    quickViewModal.addEventListener('click', function(e) {
        if (e.target === quickViewModal) {
            quickViewModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Toast Notification
    function showToast(message) {
        const toast = document.querySelector('.toast-notification');
        toast.querySelector('.toast-message').textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Add event listeners to product buttons
    function addProductEventListeners() {
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.closest('.product-card').getAttribute('data-id'));
                addToCart(productId);
            });
        });
        
        document.querySelectorAll('.quick-view-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.closest('.product-card').getAttribute('data-id'));
                showQuickView(productId);
            });
        });
        
        document.querySelectorAll('.wishlist-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.closest('.product-card').getAttribute('data-id'));
                const wishlistCount = document.querySelector('.wishlist-count');
                
                wishlistCount.textContent = parseInt(wishlistCount.textContent) + 1;
                showToast('Added to wishlist');
            });
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // Simulate form submission
        this.querySelector('input').value = '';
        showToast('Thanks for subscribing!');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#cart' || targetId === '#account' || targetId === '#wishlist') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                this.classList.add('active');
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 150;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
                
                document.querySelectorAll('.floating-nav-item').forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Initialize
    displayProducts();
    updateCart();
});
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Theme Toggle (moved to footer)
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Product Data with Indian Prices
    const products = [
        {
            id: 1,
            title: "Silk Banarasi Saree",
            price: 8999,
            images: [
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1585487000160-6ebcfceb595d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "women",
            rating: 4.5,
            colors: ["Red", "Gold", "Green"],
            sizes: ["Free Size"],
            description: "Authentic Banarasi silk saree with intricate zari work. Handwoven by master craftsmen in Varanasi.",
            badge: "Bestseller"
        },
        {
            id: 2,
            title: "Kundan Necklace Set",
            price: 12999,
            images: [
                "https://images.unsplash.com/photo-1583744946564-b52d01e2da64?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "jewelry",
            rating: 5,
            colors: ["Gold", "Silver"],
            sizes: ["Adjustable"],
            description: "Exquisite Kundan necklace set with precious stones and intricate meenakari work. Perfect for weddings.",
            badge: "New"
        },
        {
            id: 3,
            title: "Handcrafted Wooden Box",
            price: 3499,
            images: [
                "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "home",
            rating: 4,
            colors: ["Teak", "Rosewood", "Sheesham"],
            sizes: ["Small", "Medium", "Large"],
            description: "Handcrafted wooden jewelry box with traditional carvings. Made by artisans from Rajasthan.",
            badge: "Limited"
        },
        {
            id: 4,
            title: "Cotton Kurta Set",
            price: 2499,
            images: [
                "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "men",
            rating: 4.5,
            colors: ["White", "Blue", "Black"],
            sizes: ["S", "M", "L", "XL"],
            description: "Premium cotton kurta set with hand embroidery. Comfortable and stylish for all occasions.",
            badge: "Popular"
        },
        {
            id: 5,
            title: "Brass Pooja Thali",
            price: 1999,
            images: [
                "https://images.unsplash.com/photo-1583947581924-a6d4a7e4f0a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1583947581924-a6d4a7e4f0a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1583947581924-a6d4a7e4f0a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "home",
            rating: 4,
            colors: ["Brass", "Copper"],
            sizes: ["Small", "Medium"],
            description: "Traditional brass pooja thali with intricate engravings. Perfect for religious ceremonies.",
            badge: "Sale"
        },
        {
            id: 6,
            title: "Leather Mojari",
            price: 2999,
            images: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "men",
            rating: 4.5,
            colors: ["Brown", "Black", "Red"],
            sizes: ["6", "7", "8", "9", "10"],
            description: "Handcrafted leather mojari with traditional embroidery. Comfortable and stylish footwear.",
            badge: ""
        },
        {
            id: 7,
            title: "Silk Cushion Covers",
            price: 1799,
            images: [
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "home",
            rating: 4,
            colors: ["Red", "Blue", "Gold"],
            sizes: ["18x18"],
            description: "Premium silk cushion covers with traditional Indian motifs. Adds elegance to your home decor.",
            badge: "Premium"
        },
        {
            id: 8,
            title: "Temple Jewelry Set",
            price: 15999,
            images: [
                "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            ],
            category: "jewelry",
            rating: 5,
            colors: ["Gold", "Silver"],
            sizes: ["Adjustable"],
            description: "Authentic South Indian temple jewelry set with intricate designs. Perfect for traditional occasions.",
            badge: "Limited"
        }
    ];

    // Display Products
    const productContainer = document.getElementById('product-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    function displayProducts(filter = 'all') {
        productContainer.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card hover-glow';
            productCard.setAttribute('data-id', product.id);
            productCard.setAttribute('data-category', product.category);
            
            productCard.innerHTML = `
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="product-image hover-scale">
                    <img src="${product.images[0]}" alt="${product.title}" class="hover-3d">
                    <div class="product-actions">
                        <button class="action-btn quick-view-btn hover-scale" aria-label="Quick view">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn wishlist-btn hover-scale" aria-label="Add to wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
                    <div class="product-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                        ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(product.rating))}
                    </div>
                    <button class="btn btn-primary add-to-cart-btn hover-scale">Add to Cart</button>
                </div>
            `;
            
            productContainer.appendChild(productCard);
        });
        
        // Add event listeners to the new buttons
        addProductEventListeners();
    }
    
    // Filter Products
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayProducts(filter);
        });
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelector('.testimonial-dots');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    
    let currentTestimonial = 0;
    const testimonialCount = testimonialSlides.length;
    
    // Create dots
    testimonialSlides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialDots.appendChild(dot);
    });
    
    const testimonialDotElements = document.querySelectorAll('.testimonial-dot');
    
    function goToTestimonial(index) {
        testimonialSlides[currentTestimonial].classList.remove('active');
        testimonialDotElements[currentTestimonial].classList.remove('active');
        
        currentTestimonial = (index + testimonialCount) % testimonialCount;
        
        testimonialSlides[currentTestimonial].classList.add('active');
        testimonialDotElements[currentTestimonial].classList.add('active');
    }
    
    function nextTestimonial() {
        goToTestimonial(currentTestimonial + 1);
    }
    
    function prevTestimonial() {
        goToTestimonial(currentTestimonial - 1);
    }
    
    testimonialNext.addEventListener('click', nextTestimonial);
    testimonialPrev.addEventListener('click', prevTestimonial);
    
    // Auto slide testimonials
    let testimonialInterval = setInterval(nextTestimonial, 5000);
    
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    });

    // Initialize
    displayProducts();
});
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // Toggle body scroll when menu is open
    if (mainNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close menu when clicking on nav links
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
    });
});