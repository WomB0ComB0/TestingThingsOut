    const startBtn = document.getElementById('startBtn');
    const resultDiv = document.getElementById('result');

    let recognition;

    // Check if the browser supports the Web Speech API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();

      recognition.continuous = true;

      // Event fired when speech recognition starts
      recognition.onstart = () => {
        startBtn.disabled = true;
        startBtn.textContent = 'Listening...';
      };

      // Event fired when speech recognition stops
      recognition.onend = () => {
        startBtn.disabled = false;
        startBtn.textContent = 'Start Listening';
      };

      // Event fired when speech recognition results are available
      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        resultDiv.textContent = transcript;

        // Check if the recognized speech contains the word "stop"
        if (transcript.includes('stop')) {
          recognition.stop();
        }
      };

      // Event fired when an error occurs in speech recognition
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      startBtn.addEventListener('click', () => {
        recognition.start();
      });
    } else {
      resultDiv.textContent = 'Speech recognition is not supported in this browser.';
      startBtn.disabled = true;
    }