/* ============================================================
   SONG DATA — this is the ONLY file you edit to add songs.
   ------------------------------------------------------------
   To add a song, copy one { ... } block below, paste it,
   and change the values. Keep the comma after each block.

   Fields:
     id      : a unique code, no spaces (used in the page link)
     title   : the song name (usually the first line)
     author  : the poet's name
     raga    : the raga / সুর   (optional, leave "" if none)
     tala    : the tala / তাল   (optional, leave "" if none)
     lyrics  : the full lyrics. Use \n for a line break,
               and a blank line (\n\n) between stanzas.

   The sample lyrics below are placeholders / partial —
   paste the real text from your source.
   ============================================================ */

const SONGS = [
  {
    id: "102_232",
    title: "সে কি এমনি মেয়ের মেয়ে",
    author: "রামপ্রসাদ সেন",
    raga: "জংলা",
    tala: "একতালা",
    lyrics: "এখানে গানের সম্পূর্ণ কথা বসান।\nপ্রতিটি লাইনের শেষে \\n দিন।\n\nনতুন স্তবকের জন্য একটি ফাঁকা লাইন রাখুন।"
  },
  {
    id: "102_069",
    title: "ওহে প্রাণনাথ গিরিবর হে",
    author: "রামপ্রসাদ সেন",
    raga: "ললিত",
    tala: "আড়া",
    lyrics: "এখানে গানের কথা বসান…"
  },
  {
    id: "102_156",
    title: "ভেবে দেখ মন কেউ কার নয়",
    author: "রামপ্রসাদ সেন",
    raga: "গাড়া-ভৈরবী",
    tala: "যৎ",
    lyrics: "এখানে গানের কথা বসান…"
  },
  {
    // This entry shows how a real song with line breaks looks.
    // (Partial text — paste the complete lyrics from your source.)
    id: "047_003",
    title: "গা তোল, গা তোল, বাঁধ মা কুন্তল",
    author: "দাশরথি রায়",
    raga: "",
    tala: "",
    lyrics: "গা তোল, গা তোল, বাঁধ মা কুন্তল,\nঐ এলো পাষাণী, তোর ঈশানী।\nল'য়ে যুগল শিশু কোলে,\n\"মা কৈ\" \"মা কৈ\" ব'লে,\nডাকছে মা তোর শশধরবদনী॥\n\nমা গো ত্রিভুবনে মান্যে, ত্রিভুবনে ধন্যে,\nতোর মেয়ে সামান্যে নয় গো রাণি!\n\n(বাকি অংশ আপনার উৎস থেকে বসান…)"
  }
];
