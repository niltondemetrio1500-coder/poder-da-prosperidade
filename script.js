(() => {
  const video = document.querySelector('#vslVideo');
  const frame = document.querySelector('#videoFrame');
  const fill = document.querySelector('#progressFill');
  const status = document.querySelector('#videoStatus');

  if (!video || !frame || !fill || !status) return;

  const updateProgress = () => {
    const percent = video.duration > 0 ? (video.currentTime / video.duration) * 100 : 0;
    fill.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  };

  video.addEventListener('loadedmetadata', updateProgress);
  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('play', () => {
    frame.classList.add('is-playing');
    frame.classList.remove('is-ended');
    status.textContent = 'Reproduzindo';
  });
  video.addEventListener('pause', () => {
    if (!video.ended) status.textContent = 'Pausado';
  });
  video.addEventListener('ended', () => {
    frame.classList.add('is-ended');
    status.textContent = 'Vídeo finalizado';
    fill.style.width = '100%';
  });
  video.addEventListener('error', () => {
    status.textContent = 'Não foi possível carregar o vídeo';
    status.style.opacity = '1';
  });
})();
