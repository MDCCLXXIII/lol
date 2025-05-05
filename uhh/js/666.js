    function playSound() {
      const audio = document.getElementById('uwu');
      if (audio && audio.paused) {
        audio.play().catch(e => {
          console.log("Autoplay prevented:", e);
        });
      }
    }
    /* 0b7bed6e6630029afc407b19c22aedef */
    const contentDiv = document.querySelector('.k1773n');
    const originalText = contentDiv.innerHTML;
    let i = 0;
    contentDiv.innerHTML = "";
    setTimeout(() => {
      const typewriter = setInterval(() => {
        i++;
        contentDiv.innerHTML = originalText.slice(0, i) + "<x>|</x>";
        if (i === originalText.length) {
          clearInterval(typewriter);
          contentDiv.innerHTML = originalText;
        }
      }, 13);
    }, 0);
