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
import {
  Title,
  ContainerKey,
  KeyUno,
  KeyDos,
  CircleRed,
  CircleGreen,
  CircleBlue,
} from "./StyledHero";

export const Hero = () => {
  // const [active, setActive] = useState(false);

  const playSound = (e) => {
    // if (e.keyCode === 65) {
    //   console.log("Cambia de color");
    //   // setActive(true);
    //   // clearInterval(second);
    // }
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    audio.currentTime = 0;
    audio.play();
    console.log(e.keyCode);
  };

  window.addEventListener("keydown", playSound);
  return (
    <div>
      <Title>Drummy</Title>
      <ContainerKey>
        <KeyUno>
          <CircleRed>
            <p>A</p>
            <span>clap</span>
          </CircleRed>
          <CircleGreen>
            <p>S</p>
            <span>hihat</span>
          </CircleGreen>
          <CircleBlue>
            <p>D</p>
            <span>kick</span>
          </CircleBlue>
          <CircleRed>
            <p>F</p>
            <span>openhat</span>
          </CircleRed>
          <CircleGreen>
            <p>G</p>
            <span>boom</span>
          </CircleGreen>
        </KeyUno>

        <KeyDos>
          <CircleBlue>
            <p>H</p>
            <span>ride</span>
          </CircleBlue>
          <CircleRed>
            <p>J</p>
            <span>snare</span>
          </CircleRed>
          <CircleGreen>
            <p>K</p>
            <span>tom</span>
          </CircleGreen>
          <CircleBlue>
            <p>L</p>
            <span>tink</span>
          </CircleBlue>
        </KeyDos>
      </ContainerKey>

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
