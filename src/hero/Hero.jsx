import boom from "../sounds/boom.wav";
import clap from "../sounds/clap.wav";
import hihat from "../sounds/hihat.wav";
import kick from "../sounds/kick.wav";
import openhat from "../sounds/openhat.wav";
import ride from "../sounds/ride.wav";
import snare from "../sounds/snare.wav";
import tink from "../sounds/tink.wav";
import tom from "../sounds/tom.wav";
import React from "react";
import styled from "styled-components";

export const Hero = () => {
  const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    color: white;
  `;

  const ContainerKeys = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  font-size: 4rem;
  text-align: center;
  color: white;
`;

const Key = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 4rem;
text-align: center;
color: white;
`;

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  };

  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playSound);

  return (
    <div>
      <Title>Drummy</Title>s
      <ContainerKeys>
        <Key data-key={65} className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </Key>
        <Key data-key={83} className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </Key>
        <Key data-key={68} className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </Key>
        <Key data-key={70} className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </Key>
        <Key data-key={71} className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </Key>
        <Key data-key={72} className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </Key>
        <Key data-key={74} className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </Key>
        <Key data-key={75} className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </Key>
        <Key data-key={76} className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </Key>
      </ContainerKeys>

      <div>
        <audio data-key={65} src={clap} />
        <audio data-key={83} src={hihat} />
        <audio data-key={68} src={kick} />
        <audio data-key={70} src={openhat} />
        <audio data-key={71} src={boom} />
        <audio data-key={72} src={ride} />
        <audio data-key={74} src={snare} />
        <audio data-key={75} src={tom} />
        <audio data-key={76} src={tink} />
      </div>
    </div>
  );
};
