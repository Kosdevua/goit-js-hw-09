// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// ініціализація
const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  CaptionDelay: 250,
});
