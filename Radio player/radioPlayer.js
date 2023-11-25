const containerEl = document.getElementById("channels");
async function getRadioChanels() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
  console.log(data);
  data.channels.forEach((channel) => {
    const radioChannels = document.createElement("div");
    radioChannels.setAttribute("class", "channel");
    radioChannels.style.backgroundColor = `#${channel.color}`;

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = channel.name;

    const radioImg = document.createElement("img");
    radioImg.src = channel.image;

    const right = document.createElement("div");
    right.className = "right";

    const audioPlayerEl = document.createElement("audio");
    audioPlayerEl.controls = true;
    const audioPlayerSrc = document.createElement("source");
    audioPlayerSrc.src = channel.liveaudio.url;

    radioChannels.appendChild(radioImg);

    right.appendChild(name);
    right.appendChild(audioPlayerEl);
    radioChannels.appendChild(right);

    audioPlayerEl.appendChild(audioPlayerSrc);
    console.log(containerEl);
    containerEl.appendChild(radioChannels);
  });
}
getRadioChanels();
