document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('menu-open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
        });
    });

    // 2. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. Gallery Thumbnail Logic
    const mainGalleryImage = document.getElementById('main-gallery-image'); // Sửa ID cho đúng HTML
    const thumbnails = document.querySelectorAll('.thumbnail');

    const setActiveThumbnail = (thumb) => {
        thumbnails.forEach(t => {
            t.classList.remove('active-thumb');
            t.classList.add('border-transparent');
            t.style.opacity = '0.7';
        });
        thumb.classList.add('active-thumb');
        thumb.classList.remove('border-transparent');
        thumb.style.opacity = '1';
    };

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const fullSrc = thumb.getAttribute('data-full'); // Sửa lấy data-full đúng với HTML
            if (fullSrc && mainGalleryImage) {
                mainGalleryImage.src = fullSrc;
                setActiveThumbnail(thumb);
            }
        });
    });

    // Trigger click thumbnail đầu tiên khi tải trang
    if (thumbnails.length > 0 && mainGalleryImage) {
        thumbnails[0].click();
    }
});
