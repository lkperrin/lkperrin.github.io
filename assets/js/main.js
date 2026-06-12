document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.25s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });

  // ===== ART GALLERY =====
  const artCardTrigger = document.getElementById('art-card-trigger');
  const artGallery = document.getElementById('art-gallery');
  const artLightbox = document.getElementById('art-lightbox');

  if (!artGallery) return;

  const galleryClose = artGallery.querySelector('.art-gallery__close');
  const galleryBackdrop = artGallery.querySelector('.art-gallery__backdrop');
  const lightboxClose = artLightbox?.querySelector('.art-lightbox__close');
  const lightboxImg = artLightbox?.querySelector('.art-lightbox__img');

  function openGallery() {
    artGallery.classList.add('is-open');
    artGallery.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    galleryClose?.focus();
  }

  function closeGallery() {
    artGallery.classList.remove('is-open');
    artGallery.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    artCardTrigger?.focus();
  }

  function openLightbox(src, alt) {
    if (!artLightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    artLightbox.classList.add('is-open');
    artLightbox.setAttribute('aria-hidden', 'false');
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!artLightbox || !lightboxImg) return;
    artLightbox.classList.remove('is-open');
    artLightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  }

  artCardTrigger?.addEventListener('click', openGallery);
  galleryClose?.addEventListener('click', closeGallery);
  galleryBackdrop?.addEventListener('click', closeGallery);

  artGallery.querySelectorAll('.art-gallery__cell').forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      if (img?.src) openLightbox(img.src, img.alt);
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);

  artLightbox?.addEventListener('click', e => {
    if (e.target === artLightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (artLightbox?.classList.contains('is-open')) {
      closeLightbox();
    } else if (artGallery.classList.contains('is-open')) {
      closeGallery();
    }
  });
});
