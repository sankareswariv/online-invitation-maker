  <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
  <script>
    const form = document.getElementById('invitationForm');
    const card = document.getElementById('invitationCard');
    const cardEmoji = document.getElementById('cardEmoji');
    const cardTitle = document.getElementById('cardTitle');
    const cardHost = document.getElementById('cardHost');
    const cardDate = document.getElementById('cardDate');
    const cardTime = document.getElementById('cardTime');
    const cardVenue = document.getElementById('cardVenue');
    const cardMessage = document.getElementById('cardMessage');
    const bgUpload = document.getElementById('bgUpload');
    const downloadBtn = document.getElementById('downloadBtn');

    form.addEventListener('submit', function(e){
      e.preventDefault();

      let host = document.getElementById('hostName').value;
      let title = document.getElementById('eventTitle').value;
      let date = document.getElementById('eventDate').value;
      let time = document.getElementById('eventTime').value;
      let venue = document.getElementById('eventVenue').value;
      let message = document.getElementById('eventMessage').value;
      let type = document.getElementById('eventType').value;

      // Fill card
      cardTitle.innerText = title;
      cardHost.innerText = "👤 Hosted by: " + host;
      cardDate.innerText = "📅 Date: " + date;
      cardTime.innerText = "⏰ Time: " + time;
      cardVenue.innerText = "📍 Venue: " + venue;
      cardMessage.innerText = message;

      // Emoji
      let emoji = "🎉";
      if(type === "birthday") emoji = "🎂 Increseing life spane 🎂";
      else if(type === "wedding") emoji = "💍 Hands on belive Hand 💍";
      else if(type === "party") emoji = "🎉 vibee 🎉";
      else if(type === "corporate") emoji = "💼 ";
      cardEmoji.innerText = emoji;

      // Background
      card.style.backgroundImage = "";
      card.style.backgroundColor = "rgba(0,0,0,0.5)";
      if(bgUpload.files && bgUpload.files[0]){
        let reader = new FileReader();
        reader.onload = function(e){
          card.style.backgroundImage = `url(${e.target.result})`;
          card.style.backgroundColor = "transparent";
        }
        reader.readAsDataURL(bgUpload.files[0]);
      }

      card.style.display = "flex";
      downloadBtn.style.display = "inline-block";
    });

    // Download card as PNG
    downloadBtn.addEventListener('click', () => {
      html2canvas(card).then(canvas => {
        let link = document.createElement('a');
        link.download = 'invitation.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  </script>
