'use client'
import styles from './page.module.css'
import { useRef } from 'react';

const phrase = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

export default function Home() {
  let refs = useRef([]);
  const container = useRef(null);
  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }
  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }
  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {
          splitWords(phrase)
        }
      </div>
    </main>
  )
}