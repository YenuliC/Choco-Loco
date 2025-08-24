# Cake Bakery Website

A responsive, SEO-friendly portfolio website for a cake shop built with HTML, CSS, and JavaScript.

## 🎂 Features

- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop devices
- **SEO Optimized** - Meta tags, semantic HTML, and structured content
- **Modern UI/UX** - Clean design with smooth animations and transitions
- **Interactive Elements** - Category tabs, testimonials carousel, contact form
- **Performance Optimized** - Lazy loading, optimized images, smooth scrolling
- **Accessibility** - ARIA labels, focus management, keyboard navigation

## 🚀 Quick Start

1. **Download the files** to your local machine
2. **Open `index.html`** in your web browser
3. **Customize** the content, images, and styling as needed
4. **Deploy** to your web hosting service

## 📁 File Structure

```
cake_02/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization:

```css
:root {
    --primary-red: #e74c3c;      /* Main brand color */
    --primary-red-dark: #c0392b; /* Darker shade for hover states */
    --white: #ffffff;            /* White background */
    --light-gray: #f8f9fa;       /* Light gray backgrounds */
    --dark-gray: #2c3e50;        /* Dark text color */
    --text-color: #333333;       /* Main text color */
}
```

### Images
Replace the placeholder images with your own:

- **Hero Section**: Update the background image in `.hero` CSS
- **Product Images**: Replace URLs in the product grid
- **Contact Section**: Update the background image in `.contacts` CSS

### Content
- **Business Information**: Update contact details, addresses, and phone numbers
- **Product Descriptions**: Modify cake names, descriptions, and categories
- **Testimonials**: Add your own customer reviews
- **About Us**: Customize your business story

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

## 🔧 Technical Features

### HTML
- Semantic HTML5 structure
- Meta tags for SEO
- Open Graph and Twitter Card support
- Proper heading hierarchy
- Accessible form labels

### CSS
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- Smooth transitions and animations
- Mobile-first responsive design
- Modern CSS features (backdrop-filter, etc.)

### JavaScript
- ES6+ syntax
- Event delegation
- Intersection Observer API
- Smooth scrolling
- Form validation and handling
- Dynamic content management

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 SEO Features

- Meta description and keywords
- Open Graph meta tags
- Twitter Card meta tags
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Structured content

## 🚀 Performance Features

- Optimized images with responsive sizes
- Lazy loading for images
- Debounced scroll events
- CSS animations with hardware acceleration
- Minimal JavaScript bundle

## 📧 Contact Form

The contact form includes:
- Name and surname fields
- Phone number input
- Email validation
- Form submission handling
- Success notifications

## 🎯 Future Enhancements

- **E-commerce Integration** - Add shopping cart and payment processing
- **Blog Section** - Share recipes and baking tips
- **Online Ordering** - Real-time order management system
- **Customer Reviews** - Integration with review platforms
- **Social Media Feed** - Instagram integration
- **Newsletter Signup** - Email marketing integration

## 🛠️ Development

### Local Development
1. Clone or download the project
2. Open `index.html` in your browser
3. Use a local server for testing (recommended)

### Using a Local Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the website.

## 📞 Support

If you need help customizing or deploying the website, please refer to the documentation or create an issue in the repository.

---

**Built with ❤️ for cake lovers everywhere!** 🎂✨
