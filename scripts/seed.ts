import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Polish",
        imageSrc: "/PL.svg",
      },
      // {
      //   id: 2,
      //   title: "Russian",
      //   imageSrc: "/RU.svg",
      // },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Polish
        title: "Unit 1",
        description: "Form basic sentences",
        order: 1,
      },
      {
        id: 2,
        courseId: 1, // Polish
        title: "Unit 2",
        description: "Use the plural",
        order: 2,
      },
      {
        id: 3,
        courseId: 1, // Polish
        title: "Unit 3",
        description: "Use basic phrases",
        order: 3,
      },
      {
        id: 4,
        courseId: 1, // Polish
        title: "Unit 4",
        description: "Describe animals",
        order: 4,
      },
      {
        id: 5,
        courseId: 1, // Polish
        title: "Unit 5",
        description: "Talk about food",
        order: 5,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1, // Unit 1
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1, // Unit 1
        order: 3,
        title: "Adjectives",
      },
      {
        id: 4,
        unitId: 1, // Unit 1
        order: 4,
        title: "Phrases",
      },
      {
        id: 5,
        unitId: 1, // Unit 1
        order: 5,
        title: "Sentences",
      },
      {
        id: 6,
        unitId: 2, // Unit 2
        order: 1,
        title: "Nouns",
      },
      {
        id: 7,
        unitId: 2, // Unit 2
        order: 2,
        title: "Verbs",
      },
      {
        id: 8,
        unitId: 2, // Unit 2
        order: 3,
        title: "Adjectives",
      },
      {
        id: 9,
        unitId: 2, // Unit 2
        order: 4,
        title: "Phrases",
      },
      {
        id: 10,
        unitId: 2, // Unit 2
        order: 5,
        title: "Sentences",
      },
      {
        id: 11,
        unitId: 3, // Unit 3
        order: 1,
        title: "Nouns",
      },
      {
        id: 12,
        unitId: 3, // Unit 3
        order: 2,
        title: "Verbs",
      },
      {
        id: 13,
        unitId: 3, // Unit 3
        order: 3,
        title: "Adjectives",
      },
      {
        id: 14,
        unitId: 3, // Unit 3
        order: 4,
        title: "Phrases",
      },
      {
        id: 15,
        unitId: 3, // Unit 3
        order: 5,
        title: "Sentences",
      },
      {
        id: 16,
        unitId: 4, // Unit 4
        order: 1,
        title: "Nouns",
      },
      {
        id: 17,
        unitId: 4, // Unit 4
        order: 2,
        title: "Verbs",
      },
      {
        id: 18,
        unitId: 4, // Unit 4
        order: 3,
        title: "Adjectives",
      },
      {
        id: 19,
        unitId: 4, // Unit 4
        order: 4,
        title: "Phrases",
      },
      {
        id: 20,
        unitId: 4, // Unit 4
        order: 5,
        title: "Sentences",
      },
      {
        id: 21,
        unitId: 5, // Unit 5
        order: 1,
        title: "Nouns",
      },
      {
        id: 22,
        unitId: 5, // Unit 5
        order: 2,
        title: "Verbs",
      },
      {
        id: 23,
        unitId: 5, // Unit 5
        order: 3,
        title: "Adjectives",
      },
      {
        id: 24,
        unitId: 5, // Unit 5
        order: 4,
        title: "Phrases",
      },
      {
        id: 25,
        unitId: 5, // Unit 5
        order: 5,
        title: "Sentences",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1, // Уникальный ID
        lessonId: 1, // Урок "Sentences"
        type: "WORDBANK",
        order: 1,
        question: "Translate to Polish: 'Every day brings new opportunities'",
        correctSentence: "Każdy dzień przynosi nowe możliwości" // Новое поле
      },
      {
        id: 2,
        lessonId: 1, // Lesson 1 "Nouns"
        type: "ASSIST",
        order: 2,
        question: 'man',
      },
      {
        id: 3,
        lessonId: 1, // Lesson 1 "Nouns"
        type: "SELECT",
        order: 3,
        question: 'Which one of them is a woman?',
      },
      {
        id: 4,
        lessonId: 2, // Lesson 2 "Verbs"
        type: "SELECT",
        order: 1,
        question: 'Which one of them means to eat?',
      },
      {
        id: 5,
        lessonId: 2, // Lesson 2 "Verbs"
        type: "ASSIST",
        order: 2,
        question: '"to eat"',
      },
      {
        id: 6,
        lessonId: 2, // Lesson 2 "Verbs"
        type: "SELECT",
        order: 3,
        question: 'Which one of them means to be?',
      },
      {
        id: 7,
        lessonId: 3, // Lesson 3 "Adjectives"
        type: "SELECT",
        order: 1,
        question: 'Which one of them means big?',
      },
      {
        id: 8,
        lessonId: 3, // Lesson 3 "Adjectives"
        type: "ASSIST",
        order: 2,
        question: 'small',
      },
      {
        id: 9,
        lessonId: 3, // Lesson 3 "Adjectives"
        type: "SELECT",
        order: 3,
        question: 'Which one of them means tall?',
      },
      {
        id: 10,
        lessonId: 4, // Lesson 4 "Phrases"
        type: "SELECT",
        order: 1,
        question: 'Which phrase means "Good morning"?',
      },
      {
        id: 11,
        lessonId: 4, // Lesson 4 "Phrases"
        type: "ASSIST",
        order: 2,
        question: 'Complete the phrase: "Thank you" in Polish is ___',
      },
      {
        id: 12,
        lessonId: 4, // Lesson 4 "Phrases"
        type: "SELECT",
        order: 3,
        question: 'Which phrase is used to say "See you later"?',
      },
      {
        id: 13,
        lessonId: 5, // Lesson 5 "Sentences"
        type: "SELECT",
        order: 1,
        question: 'Which sentence means “I am learning Polish”?',
      },
      {
        id: 14,
        lessonId: 5, // Lesson 5 "Sentences"
        type: "ASSIST",
        order: 2,
        question: 'Complete the sentence: “He lives in Poland” in Polish is ___.',
      },
      {
        id: 15,
        lessonId: 5, // Lesson 5 "Sentences"
        type: "SELECT",
        order: 3,
        question: 'Which sentence means “She is a teacher”?',
      },
      {
        id: 16,
        lessonId: 6, // Lesson 6 "Nouns"
        type: "SELECT",
        order: 1,
        question: 'Which is the plural of “apple”?',
      },
      {
        id: 17,
        lessonId: 6, // Lesson 6 "Nouns"
        type: "ASSIST",
        order: 2,
        question: 'The plural of “book” is ___',
      },
      {
        id: 18,
        lessonId: 6, // Lesson 6 "Nouns"
        type: "ASSIST",
        order: 3,
        question: 'Which sentence uses plural?',
      },
      {
        id: 19,
        lessonId: 7, // Lesson 7 "Verbs"
        type: "ASSIST",
        order: 1,
        question: 'The plural form of “he eats” is ___',
      },
      {
        id: 20,
        lessonId: 7, // Lesson 7 "Verbs"
        type: "ASSIST",
        order: 2,
        question: 'Complete: “They speak Polish” is ___',
      },
      {
        id: 21,
        lessonId: 7, // Lesson 7 "Verbs"
        type: "ASSIST",
        order: 3,
        question: 'Which verb is in the plural form?',
      },
      {
        id: 22,
        lessonId: 8, // Lesson 8 "Adjectives"
        type: "SELECT",
        order: 1,
        question: 'Which is the plural form of “tall”?',
      },
      {
        id: 23,
        lessonId: 8, // Lesson 8 "Adjectives"
        type: "ASSIST",
        order: 2,
        question: 'Complete: The plural of “happy” is ___',
      },
      {
        id: 24,
        lessonId: 8, // Lesson 8 "Adjectives"
        type: "ASSIST",
        order: 3,
        question: 'Which adjective is in the plural form?',
      },
      {
        id: 25,
        lessonId: 9, // Lesson 9 "Phrases"
        type: "ASSIST",
        order: 1,
        question: '“Good boys”',
      },
      {
        id: 26,
        lessonId: 9, // Lesson 9 "Phrases"
        type: "ASSIST",
        order: 2,
        question: '“These are beautiful houses”',
      },
      {
        id: 27,
        lessonId: 9, // Lesson 9 "Phrases"
        type: "ASSIST",
        order: 3,
        question: '“___ dziewczynki są szybkie” (These girls are fast).”',
      },
      {
        id: 28,
        lessonId: 10, // Lesson 10 "Sentences"
        type: "ASSIST",
        order: 1,
        question: '“The cats are black”',
      },
      {
        id: 29,
        lessonId: 10, // Lesson 10 "Sentences"
        type: "ASSIST",
        order: 2,
        question: '“They have red apples”',
      },
      {
        id: 30,
        lessonId: 10, // Lesson 10 "Sentences"
        type: "ASSIST",
        order: 3,
        question: '"The children are eating"',
      },
      {
        id: 31,
        lessonId: 11, // Lesson 11 "Nouns"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 32,
        lessonId: 11, // Lesson 11 "Nouns"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 33,
        lessonId: 11, // Lesson 11 "Nouns"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 34,
        lessonId: 12, // Lesson 12 "Verbs"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 35,
        lessonId: 12, // Lesson 12 "Verbs"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 36,
        lessonId: 12, // Lesson 12 "Verbs"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 37,
        lessonId: 13, // Lesson 13 "Adjectives"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 38,
        lessonId: 13, // Lesson 13 "Adjectives"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 39,
        lessonId: 13, // Lesson 13 "Adjectives"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 40,
        lessonId: 14, // Lesson 14 "Phrases"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 41,
        lessonId: 14, // Lesson 14 "Phrases"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 42,
        lessonId: 14, // Lesson 14 "Phrases"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 43,
        lessonId: 15, // Lesson 15 "Sentences"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 44,
        lessonId: 15, // Lesson 15 "Sentences"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 45,
        lessonId: 15, // Lesson 15 "Sentences"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 46,
        lessonId: 16, // Lesson 16 "Nouns"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 47,
        lessonId: 16, // Lesson 16 "Nouns"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 48,
        lessonId: 16, // Lesson 16 "Nouns"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 49,
        lessonId: 17, // Lesson 17 "Verbs"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 50,
        lessonId: 17, // Lesson 17 "Verbs"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 51,
        lessonId: 17, // Lesson 17 "Verbs"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 52,
        lessonId: 18, // Lesson 18 "Adjectives"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 53,
        lessonId: 18, // Lesson 18 "Adjectives"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 54,
        lessonId: 18, // Lesson 18 "Adjectives"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 55,
        lessonId: 19, // Lesson 19 "Phrases"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 56,
        lessonId: 19, // Lesson 19 "Phrases"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 57,
        lessonId: 19, // Lesson 19 "Phrases"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 58,
        lessonId: 20, // Lesson 20 "Sentences"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 59,
        lessonId: 20, // Lesson 20 "Sentences"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 60,
        lessonId: 20, // Lesson 20 "Sentences"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 61,
        lessonId: 21, // Lesson 21 "Nouns"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 62,
        lessonId: 21, // Lesson 21 "Nouns"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 63,
        lessonId: 21, // Lesson 21 "Nouns"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 64,
        lessonId: 22, // Lesson 22 "Verbs"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 65,
        lessonId: 22, // Lesson 22 "Verbs"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 66,
        lessonId: 22, // Lesson 22 "Verbs"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 67,
        lessonId: 23, // Lesson 23 "Adjectives"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 68,
        lessonId: 23, // Lesson 23 "Adjectives"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 69,
        lessonId: 23, // Lesson 23 "Adjectives"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 70,
        lessonId: 24, // Lesson 24 "Phrases"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 71,
        lessonId: 24, // Lesson 24 "Phrases"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 72,
        lessonId: 24, // Lesson 24 "Phrases"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
      {
        id: 73,
        lessonId: 25, // Lesson 25 "Sentences"
        type: "SELECT",
        order: 1,
        question: 'Кто из них "мужчина"?',
      },
      {
        id: 74,
        lessonId: 25, // Lesson 25 "Sentences"
        type: "ASSIST",
        order: 2,
        question: '"мужчина"',
      },
      {
        id: 75,
        lessonId: 25, // Lesson 25 "Sentences"
        type: "SELECT",
        order: 3,
        question: 'Кто из них "женщина"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Для задания Word Bank
      {
        challengeId: 1,
        text: "Każdy",
        correct: true,
        audioSrc: "/kazdy.mp3"
      },
      {
        challengeId: 1,
        text: "dzień",
        correct: true,
        audioSrc: "/dzien.mp3"
      },
      {
        challengeId: 1,
        text: "przynosi",
        correct: true,
        audioSrc: "/przynosi.mp3"
      },
      {
        challengeId: 1,
        text: "nowe",
        correct: true,
        audioSrc: "/nowe.mp3"
      },
      {
        challengeId: 1,
        text: "możliwości",
        correct: true,
        audioSrc: "/mozliwosci.mp3"
      },
      {
        challengeId: 1,
        text: "ograniczenia",
        correct: false,
        audioSrc: "/ograniczenia.mp3"
      },
      {
        challengeId: 2, // 'man'
        correct: true,
        text: "mężczyzna",
        audioSrc: "/mezczyzna.mp3",
      },
      {
        challengeId: 2, // 'man'
        correct: false,
        text: "kobieta",
        audioSrc: "/kobieta.mp3",
      },
      {
        challengeId: 2, // 'man'
        correct: false,
        text: "pies",
        audioSrc: "/pies.mp3",
      },
      {
        challengeId: 3, // 'Which one of them is a woman?'
        imageSrc: "/mezczyzna.png",
        correct: false,
        text: "mężczyzna",
        audioSrc: "/mezczyzna.mp3",
      },
      {
        challengeId: 3, // 'Which one of them is a woman?'
        imageSrc: "/kobieta.png",
        correct: true,
        text: "kobieta",
        audioSrc: "/kobieta.mp3",
      },
      {
        challengeId: 3, // 'Which one of them is a woman?'
        imageSrc: "/pies.png",
        correct: false,
        text: "pies",
        audioSrc: "/pies.mp3",
      },
      // Lesson 2 (Verbs)
      { challengeId: 4, imageSrc: "/jesc.png", correct: true, text: "jeść", audioSrc: "/jesc.mp3" },
      { challengeId: 4, imageSrc: "/pic.png", correct: false, text: "pić", audioSrc: "/pic.mp3" },
      { challengeId: 4, imageSrc: "/biegac.png", correct: false, text: "biegać", audioSrc: "/biegac.mp3" },

      { challengeId: 5, correct: true, text: "jeść", audioSrc: "/jesc.mp3" },
      { challengeId: 5, correct: false, text: "pić", audioSrc: "/pic.mp3" },
      { challengeId: 5, correct: false, text: "biegać", audioSrc: "/biegac.mp3" },

      { challengeId: 6, imageSrc: "/byc.png", correct: true, text: "być", audioSrc: "/byc.mp3" },
      { challengeId: 6, imageSrc: "/miec.png", correct: false, text: "mieć", audioSrc: "/miec.mp3" },
      { challengeId: 6, imageSrc: "/isc.png", correct: false, text: "iść", audioSrc: "/isc.mp3" },

      // Lesson 3 (Adjectives)
      { challengeId: 7, imageSrc: "/duzy.png", correct: true, text: "duży", audioSrc: "/duzy.mp3" },
      { challengeId: 7, imageSrc: "/maly.png", correct: false, text: "mały", audioSrc: "/maly.mp3" },
      { challengeId: 7, imageSrc: "/wysoki.png", correct: false, text: "wysoki", audioSrc: "/wysoki.mp3" },

      { challengeId: 8, correct: true, text: "mały", audioSrc: "/maly.mp3" },
      { challengeId: 8, correct: false, text: "duży", audioSrc: "/duzy.mp3" },
      { challengeId: 8, correct: false, text: "krótki", audioSrc: "/krotki.mp3" },

      { challengeId: 9, imageSrc: "/wysoki.png", correct: true, text: "wysoki", audioSrc: "/wysoki.mp3" },
      { challengeId: 9, imageSrc: "/niski.png", correct: false, text: "niski", audioSrc: "/niski.mp3" },
      { challengeId: 9, imageSrc: "/duzy.png", correct: false, text: "duży", audioSrc: "/duzy.mp3" },

      // Lesson 4 (Phrases)
      { challengeId: 10, imageSrc: "/dzien-dobry.png", correct: true, text: "Dzień dobry", audioSrc: "/dzien-dobry.mp3" },
      { challengeId: 10, imageSrc: "/dobranoc.png", correct: false, text: "Dobranoc", audioSrc: "/dobranoc.mp3" },
      { challengeId: 10, imageSrc: "/do-widzenia.png", correct: false, text: "Do widzenia", audioSrc: "/do-widzenia.mp3" },

      { challengeId: 11, correct: true, text: "Dziękuję", audioSrc: "/dziekuje.mp3" },
      { challengeId: 11, correct: false, text: "Proszę", audioSrc: "/prosze.mp3" },
      { challengeId: 11, correct: false, text: "Przepraszam", audioSrc: "/przepraszam.mp3" },

      { challengeId: 12, imageSrc: "/do-zobaczenia.png", correct: true, text: "Do zobaczenia", audioSrc: "/do-zobaczenia.mp3" },
      { challengeId: 12, imageSrc: "/do-widzenia.png", correct: false, text: "Do widzenia", audioSrc: "/do-widzenia.mp3" },
      { challengeId: 12, imageSrc: "/czesc.png", correct: false, text: "Cześć", audioSrc: "/czesc.mp3" },

      // Lesson 5 (Sentences)
      { challengeId: 13, imageSrc: "/ucze-sie.png", correct: true, text: "Uczę się polskiego", audioSrc: "/ucze-sie.mp3" },
      { challengeId: 13, imageSrc: "/jestem-polakiem.png", correct: false, text: "Jestem Polakiem", audioSrc: "/jestem-polakiem.mp3" },
      { challengeId: 13, imageSrc: "/mowie-po-polsku.png", correct: false, text: "Mówię po polsku", audioSrc: "/mowie-po-polsku.mp3" },

      { challengeId: 14, correct: true, text: "On mieszka w Polsce", audioSrc: "/on-mieszka-w-polsce.mp3" },
      { challengeId: 14, correct: false, text: "Ona mieszka w Polsce", audioSrc: "/ona-mieszka-w-polsce.mp3" },
      { challengeId: 14, correct: false, text: "Mieszkam w Polsce", audioSrc: "/mieszkam-w-polsce.mp3" },

      { challengeId: 15, imageSrc: "/ona-jest-nauczycielka.png", correct: true, text: "Ona jest nauczycielką", audioSrc: "/ona-jest-nauczycielka.mp3" },
      { challengeId: 15, imageSrc: "/on-jest-nauczycielem.png", correct: false, text: "On jest nauczycielem", audioSrc: "/on-jest-nauczycielem.mp3" },
      { challengeId: 15, imageSrc: "/ona-pracuje-w-szkole.png", correct: false, text: "Ona pracuje w szkole", audioSrc: "/ona-pracuje-w-szkole.mp3" },
    ]);

    const challengeOptions = [];

    // Автоматически заполняем ответы для уроков 11–25
    for (let lessonId = 11; lessonId <= 25; lessonId++) {
      const challengeIdSelect1 = (lessonId - 1) * 3 + 1; // ID для первого SELECT
      const challengeIdAssist = (lessonId - 1) * 3 + 2; // ID для ASSIST
      const challengeIdSelect2 = (lessonId - 1) * 3 + 3; // ID для второго SELECT

      challengeOptions.push(
        // SELECT (Кто из них мужчина?)
        { challengeId: challengeIdSelect1, imageSrc: "/mezczyzna.png", correct: true, text: "mężczyzna", audioSrc: "/mezczyzna.mp3" },
        { challengeId: challengeIdSelect1, imageSrc: "/kobieta.png", correct: false, text: "kobieta", audioSrc: "/kobieta.mp3" },
        { challengeId: challengeIdSelect1, imageSrc: "/pies.png", correct: false, text: "pies", audioSrc: "/pies.mp3" },

        // ASSIST (мужчина)
        { challengeId: challengeIdAssist, correct: true, text: "mężczyzna", audioSrc: "/mezczyzna.mp3" },
        { challengeId: challengeIdAssist, correct: false, text: "kobieta", audioSrc: "/kobieta.mp3" },
        { challengeId: challengeIdAssist, correct: false, text: "pies", audioSrc: "/pies.mp3" },

        // SELECT (Кто из них женщина?)
        { challengeId: challengeIdSelect2, imageSrc: "/mezczyzna.png", correct: false, text: "mężczyzna", audioSrc: "/mezczyzna.mp3" },
        { challengeId: challengeIdSelect2, imageSrc: "/kobieta.png", correct: true, text: "kobieta", audioSrc: "/kobieta.mp3" },
        { challengeId: challengeIdSelect2, imageSrc: "/pies.png", correct: false, text: "pies", audioSrc: "/pies.mp3" }
      );
    }

    // Вставляем все challengeOptions в базу
    await db.insert(schema.challengeOptions).values(challengeOptions);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database")
  }
};

main();