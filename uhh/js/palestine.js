    function playSound() {
      document.querySelector("audio").play();
     }
    const canvas = document.getElementById('lxrdk1773n');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const chars = '0b7bed6e6630029afc407b19c22aedef';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    function drawx() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ff0000';
      ctx.font = fontSize + 'px Inconsolata';
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    setInterval(drawx, 50);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
        async function fetchIP() {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                document.getElementById('ipContainer').innerText = "IP: " + data.ip;
            } catch (error) {
                document.getElementById('ipContainer').innerText = 'Error fetching IP';
            }
        }
        
        function fetchUserAgent() {
            const userAgent = navigator.userAgent;
            document.getElementById('userAgentContainer').innerText = "" + userAgent;
        }
        
        fetchIP();
        fetchUserAgent();
    document.addEventListener('keydown', function(e) {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && ['W', 'U'].includes(e.key.toUpperCase()))
      ) {
        e.preventDefault();
        alert('#STOPGENOCIDE');
      }
    });
    window.onbeforeunload = function () {
      return "#FREEPALESTINE";
    };
    setInterval(() => {
      window.focus();
    }, 1000);
