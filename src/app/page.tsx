"use client";

import { ReadingPanel } from "react-reading-panel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main} style={{ display: "flex" }}>
      <h1>React Reading Panel Demo</h1>
      <ReadingPanel targetId="sample"></ReadingPanel>
      <div className={styles.sampleText} id="sample" style={{ marginTop: 20 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget nunc
        scelerisque viverra mauris in aliquam. Sit amet commodo nulla facilisi.
        Id eu nisl nunc mi ipsum faucibus. Arcu non odio euismod lacinia at. Sed
        arcu non odio euismod lacinia at. Non tellus orci ac auctor augue. Id
        porta nibh venenatis cras. Cras tincidunt lobortis feugiat vivamus at.
        Nulla pellentesque dignissim enim sit amet venenatis urna. Faucibus
        scelerisque eleifend donec pretium vulputate. Potenti nullam ac tortor
        vitae purus. Tristique sollicitudin nibh sit amet commodo nulla facilisi
        nullam. Volutpat consequat mauris nunc congue nisi vitae suscipit
        tellus. Tellus molestie nunc non blandit massa enim nec. Sed turpis
        tincidunt id aliquet. Non arcu risus quis varius. Placerat duis
        ultricies lacus sed turpis tincidunt id. Bibendum arcu vitae elementum
        curabitur. Blandit turpis cursus in hac habitasse platea dictumst
        quisque sagittis. Urna id volutpat lacus laoreet non curabitur gravida
        arcu. Eget nullam non nisi est sit. Mi eget mauris pharetra et.
        Consequat semper viverra nam libero. Sed faucibus turpis in eu mi. Quam
        quisque id diam vel quam elementum. Egestas maecenas pharetra convallis
        posuere morbi leo urna molestie at. Massa sed elementum tempus egestas
        sed sed risus. Dictum varius duis at consectetur lorem. Risus ultricies
        tristique nulla aliquet enim tortor. Volutpat commodo sed egestas
        egestas fringilla phasellus. Non diam phasellus vestibulum lorem sed
        risus ultricies. Leo vel fringilla est ullamcorper. Est sit amet
        facilisis magna etiam tempor.
      </div>
    </main>
  );
}
