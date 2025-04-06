    function playSound() {
      const audio = document.getElementById('uwu');
      if (audio && audio.paused) {
        audio.play().catch(e => {
          console.log("Autoplay prevented:", e);
        });
      }
    }
    function updateClock() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      document.getElementById('lol').textContent = `${h}:${m}:${s}`;
    }
    setInterval(updateClock, 1000);
    updateClock();
