import AnimeListAll from '../../src/screen/AnimeListAll.jsx'
import { GET_ANIME_LIST } from '../../src/screen/AnimeListAll.jsx'
import { MockedProvider } from "@apollo/client/testing";

let dummyData = {
  "data": {
    "Page": {
      "mediaList": [
        {
          "media": {
            "id": 1,
            "title": {
              "english": "Cowboy Bebop",
              "native": "\u30ab\u30a6\u30dc\u30fc\u30a4\u30d3\u30d0\u30c3\u30d7",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx1-CXtrrkMpJ8Zq.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 30,
            "title": {
              "english": "Neon Genesis Evangelion",
              "native": "\u65b0\u4e16\u7d00\u30a8\u30f4\u30a1\u30f3\u30b2\u30ea\u30aa\u30f3",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "In the year 2015, the Angels, huge, tremendously powerful, alien war machines, appear in Tokyo for the second time. The only hope for Mankind's survival lies in the Evangelion, a humanoid fighting machine developed by NERV, a special United Nations agency. Capable of withstanding anything the Angels can dish out, the Evangelion's one drawback lies in the limited number of people able to pilot them. Only a handful of teenagers, all born fourteen years ago, nine months after the Angels first appeared, are able to interface with the Evangelion. One such teenager is Shinji Ikari, whose father heads the NERV team that developed and maintains the Evangelion. Thrust into a maelstrom of battle and events that he does not understand, Shinji is forced to plumb the depths of his own inner resources for the courage and strength to not only fight, but to survive, or risk losing everything. <br><br>\n(Source: AniDB)<br>\n<br>\n <i>Note: Later releases include edited versions of Episodes 21-24 called the \"Director's Cut\" with some visual editing and adding extra scenes that appeared in the theatrical recap 'Death'.<\/i>",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx30-wmNoX3m2qTzz.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 32,
            "title": {
              "english": "Neon Genesis Evangelion: The End of Evangelion",
              "native": "\u65b0\u4e16\u7d00\u30a8\u30f4\u30a1\u30f3\u30b2\u30ea\u30aa\u30f3\u5287\u5834\u7248 Air\/\u307e\u3054\u3053\u308d\u3092\u3001\u541b\u306b",
              "__typename": "MediaTitle"
            },
            "duration": 87,
            "description": "NERV faces a brutal attack from SEELE, but with Asuka in a coma, and Shinji in a nervous breakdown, things soon turn into the surreal. This movie provides a concurrent ending to the final two episodes of the show <b>Neon Genesis Evangelion<\/b>.<br>\n<br>\n(Source: IMDb)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx32-PMmJBerdDSma.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 79,
            "title": {
              "english": null,
              "native": "SHUFFLE!",
              "__typename": "MediaTitle"
            },
            "duration": 23,
            "description": "In present times, Gods and Demons coexist together with Humans after the door between each of these worlds had opened. Tsuchimi Rin is a normal young high school student attending Verbena Academy, spending his days living peacefully with his childhood friend Kaede. Unexpectedly, one day the King of Gods, the King of Demons and their families move into be Rin's next door neighbors. Apparently the daughter of the Gods, Sia, and the daughter of the demons, Nerine, are both deeply in love with Rin after having met him the past. Along with his playful friendship with upperclassmen Asa and his encounter with the silent but cute Primula, Rin has much on his hands dealing with the affections of each of these girls. Based on the eroge by Navel.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/nx79-I1ODM0WcMlsn.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 226,
            "title": {
              "english": "Elfen Lied",
              "native": "\u30a8\u30eb\u30d5\u30a7\u30f3\u30ea\u30fc\u30c8",
              "__typename": "MediaTitle"
            },
            "duration": 25,
            "description": "The Diclonius, a mutated homosapien that is said to be selected by God and will eventually become the destruction of mankind, possess two horns on their heads and have a \"sixth sense\" which gives them telekinetic abilities. Due to this dangerous power, they have been captured and isolated in laboratories by the government. Lucy, a young and psychotic Diclonius, manages to break free of her confines and brutally murders most of the guards in the laboratory where she is being held, only to be shot in the head as she makes her escape. She survives, falling off a cliff into the ocean and manages to drift along to a beach where two teenagers, Kouta and Yuka, discover her. Having lost her memories, she was named after the only thing that she can now say, \"Nyuu,\" and the two allow her to stay at Kouta's home. However, it appears that the psychotic side of Lucy is not dead just yet... <br><br>\r\n(Source: ANN - Revised)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx226-vqteB2impeYH.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 227,
            "title": {
              "english": "FLCL",
              "native": "\u30d5\u30ea\u30af\u30ea",
              "__typename": "MediaTitle"
            },
            "duration": 25,
            "description": "Naota is a detached sixth grader afflicted by the pangs of puberty. He's fooling around with his brother's ex-girlfriend when a crazed girl on a motor scooter runs him over, brains him with a bass guitar, and moves into his house. This pink-haired girl, Haruko - who claims she's an alien - hurls Naota into the middle of a mega-corporation's secret agenda. Oh, and now giant battling robots shoot from his skull. Mix in mind-bending animation and tunes that echo through your cerebellum to top off the trip that will have you falling hard for <i>FLCL<\/i>.<br>\n<br>\n(Source: Funimation)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx227-kxQ3PDHrrqp5.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 239,
            "title": {
              "english": "Gankutsuou: The Count of Monte Cristo",
              "native": "\u5dcc\u7a9f\u738b",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Gankutsuou is an anime loosely based on the novel The Count of Monte Cristo by Alexandre Dumas. It tells the story of Albert Morcerf, a young aristocrat who happens to befriend a wealthy nobleman, The Count of Monte Cristo, through a series of bizarre events. Fascinated by the Count's charm, Albert invites him to meet his friends and family, all of whom happen to be part of the upper class society of Paris, France. Unfortunately, little does Albert realize that the Count has ulterior motives in mind.<br><br>\n(Source: MAL Rewrite)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx239-j65nzbXxC3oA.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 323,
            "title": {
              "english": "Paranoia Agent",
              "native": "\u5984\u60f3\u4ee3\u7406\u4eba",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "An elementary school kid dubbed with the title \"shounen bat\" or \"lil slugger\" has been going around attacking people with his bent, golden bat. Now, two detectives are investigating so they can stop this kid from making any more attacks, but they will find out soon enough... that this case is much more than they expected. <br><br>\n(Source: Anime News Network)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx323-VQ3r4CbYxRIo.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 339,
            "title": {
              "english": "Serial Experiments Lain",
              "native": "serial experiments lain",
              "__typename": "MediaTitle"
            },
            "duration": 23,
            "description": "We're all connected... There is the world around us, a world of people, tactile sensation, and culture. There is the wired world, inside the computer, of images, personalities, virtual experiences, and a culture all of its own. The day after a classmate commits suicide, Lain, a 14-year-old girl, discovers how closely the two worlds are linked when she receives an e-mail from the dead girl: I just abandoned my body. I still live here...<br>\n<br>\nHas the line between the real world and the wired world begun to blur?<br>\n<br>\n(Source: Geneon Entertainment)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx339-4438BQupScYO.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 356,
            "title": {
              "english": "Fate\/stay night",
              "native": "Fate\/stay night",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Raised by a mysterious sorcerer after the death of his parents in a catastrophic fire, Shirou Emiya has only just begun to learn small tidbits of magic. When he is caught in a battle between two powerful Magi, however, he ends up performing a spell above his expected ability, accidentally summoning a beautiful woman knight to protect him. \n<br><br>\nShirou is thus unwillingly thrust into the competition known as the Holy Grail War where Seven Magi called Masters, together with their spirit partners called Servants, fight to acquire a powerful artifact said to grant every wish. \n",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx356-mTpMvtillumS.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 387,
            "title": {
              "english": "Haibane Renmei",
              "native": "\u7070\u7fbd\u9023\u76df",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "A dream of falling from the sky... and then birth. Rakka is born from a large cocoon into the Old Home, greeted by a group of girls with small wings on their backs and shining halos above their heads. Soon Rakka&rsquo;s own wings grow, a halo is placed on her head and she is told that she must work in the nearby town of Grie. She soon realizes that the town and the entire world they live in are confined behind the Wall, a tall, impenetrable wall that none except the mysterious Toga are allowed to exit. <br><br>\n(Source: Anime News Network) ",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx387-eewftYhOOFVP.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 433,
            "title": {
              "english": "The Place Promised in Our Early Days",
              "native": "\u96f2\u306e\u3080\u3053\u3046\u3001\u7d04\u675f\u306e\u5834\u6240",
              "__typename": "MediaTitle"
            },
            "duration": 90,
            "description": "In an alternate timeline, Japan was divided after losing World War II: Hokkaido was annexed by \"Union\" while Honshu and other southern islands were under US sovereignty. A gigantic yet mysterious tower was constructed at Hokkaido and could be seen clearly from Aomori (the northernmost prefecture of Honshu) across Tsugaru Strait. In the summer of 1996, three 9th-graders had made a promise that one day they'll build an aircraft and unravel the tower's mystery, but their project was abandoned after the girl, Sayuri Sawatari, began experiencing sleeping sickness and transferred to Tokyo for better treatment. Three years later, Hiroki Fujisawa accidentally found out that Sayuri had been in a coma since then, and he asked Takuya Shirakawa to help him finding a way to revive her. What they don't know yet is that Sayuri's unconsciousness is somehow linked with secrets of the tower and the world.\n<br><br>\n(Source: Anime News Network)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx433-bU0c8iHxoL2G.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 467,
            "title": {
              "english": "Ghost in the Shell: Stand Alone Complex",
              "native": "\u653b\u6bbb\u6a5f\u52d5\u968a STAND ALONE COMPLEX",
              "__typename": "MediaTitle"
            },
            "duration": 25,
            "description": "In the not so distant future, mankind has advanced to a state where complete body transplants from flesh to machine is possible. This allows for great increases in both physical and cybernetic prowess and blurring the lines between the two worlds. However, criminals can also make full use of such technology, leading to new and sometimes, very dangerous crimes. In response to such innovative new methods, the Japanese Government has established Section 9, an independently operating police unit which deals with such highly sensitive crimes.<br><br>\nLed by Daisuke Aramaki and Motoko Kusanagi, Section 9 deals with such crimes over the entire social spectrum, usually with success. However, when faced with a new A level hacker nicknamed \u201cThe Laughing Man\u201d, the team is thrown into a dangerous cat and mouse game, following the hacker\u2019s trail as it leaves its mark on Japan.<br><br>\n(Source: MyAnimeList)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx467-mBTtIoR13qs2.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 477,
            "title": {
              "english": "ARIA The ANIMATION",
              "native": "ARIA The ANIMATION",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Drift peacefully into Neo Venezia, a city on the planet Aqua (formerly known as Mars). By the 24th century, humans have found a way to colonize the previously uninhabitable planet. As futuristic as that sounds, Neo Venezia is still teeming with rustic beauty; gondolas on wide canals and waterways are the main mode of transportation. The city itself is a faithful replication of Manhome's (the planet formerly known as Earth) Venice.<br>\n<br>\nTo make sure that residents and tourists alike get the most from Neo Venezia's many wonders, companies offering guided tours via gondola were formed, one of which is named Aria Company.<br>\n<br>\nThis is the workplace of Akari Mizunashi, a free spirited teenager from Manhome who is now a novice Undine (the title given to tour guides). Join Akari as she becomes intimately acquainted with other Undine, tourists, Neo Venezia's residents, and even the city itself, learning many valuable life lessons along the way, such as the wonderful truth that there are such things as manmade miracles.\n",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx477-IhmzyyzROh27.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 759,
            "title": {
              "english": "Tokyo Godfathers",
              "native": "\u6771\u4eac\u30b4\u30c3\u30c9\u30d5\u30a1\u30fc\u30b6\u30fc\u30ba",
              "__typename": "MediaTitle"
            },
            "duration": 92,
            "description": "In modern-day Tokyo, three homeless people\u2019s lives are changed forever when they discover a baby girl at a garbage dump on Christmas Eve. As the New Year fast approaches, these three forgotten members of society band together to solve the mystery of the abandoned child and the fate of her parents. Along the way, encounters with seemingly unrelated events and people force them to confront their own haunted pasts, as they learn to face their future, together.<br>\n<br>\n(Source: Shout! Factory)<br>\n<br>\n<i>Note: The film received an early premiere at the Big Apple Anime Fest on August 30, 2003.<\/i>",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx759-vaiRxznGCi9T.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 770,
            "title": {
              "english": null,
              "native": "\u30da\u30a4\u30eb\u30fb\u30b3\u30af\u30fc\u30f3",
              "__typename": "MediaTitle"
            },
            "duration": 23,
            "description": "A future where the continuity of history has broken off, a world of enormous ruins that continues endlessly. Oceans and continents have vanished, existing only within the archives brought up from the remains. Ura works in the Archive Excavation Department, which restores and analyzes the data left behind. One day, he finds a disturbing visual record...\n<br><br>\n(Source: Anime News Network)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/770.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 889,
            "title": {
              "english": "Black Lagoon",
              "native": "BLACK LAGOON",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Okajima Rokuro is a Japanese businessman in a town full of Japanese businessmen. His normal day consists of social drinking with clients and being kicked around by his bosses. He finally gets a break though, as he's sent by his company to the tropical seas of Eastern China to deliver a disc. But his boat gets hijacked by a band of mercenaries hired to retrieve the disc. Rock (as he is newly dubbed by his captors) catches the interest of the only female merc Revy as she thinks he's worth a ransom, taking him hostage. However, the disc that was stolen has a terrible secret that's unknown to Rock, which causes massive confusion and chaos for both him and his kidnappers.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx889-Wf4GZRnHv6Dp.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 918,
            "title": {
              "english": "Gintama",
              "native": "\u9280\u9b42",
              "__typename": "MediaTitle"
            },
            "duration": 25,
            "description": "Life isn't easy in feudal Japan... especially since the aliens landed and conquered everything! Oh sure, the new health care is great, but the public ban on the use of swords has left a lot of defeated samurai with a difficult decision to make concerning their future career paths! This is especially true if, as in the case of Gintoki Sakata, they're not particularly inclined towards holding a day job, which is why Gintoki's opted for the freelance route, taking any job that's offered to him as long as the financial remuneration sounds right. Unfortunately, in a brave new world filled with stray bug-eyed monsters, upwardly mobile Yakuza and overly ambitious E.T. entrepreneurs, those jobs usually don't pay as well as they should for the pain, suffering and indignities endured!<br><br>\n(Source: Sentai Filmworks)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx918-hRbQHIkRUebX.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 1195,
            "title": {
              "english": "The Familiar of Zero",
              "native": "\u30bc\u30ed\u306e\u4f7f\u3044\u9b54",
              "__typename": "MediaTitle"
            },
            "duration": 23,
            "description": "Louise is a magician at the Tristein Academy, dubbed with the nickname \"Zero Louise\" due to her inability to effectively use her magic properly, resulting in zero successes. An upcoming test at her academy requires her to summon a familiar, a servant and partner to support her as a magician. Despite desiring a familiar that would be superior to her constantly mocking classmates, Louise ends up summoning Hiraga Saito, your average Japanese boy. Even with Louise and Saito both unwilling to accept each other, they have no choice. Louise cannot attempt another summoning and Saito cannot return to Japan, and so their life together begins. Based on the novel by Noboru Yamaguchi.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx1195-7BOXEWYAv1WN.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 1535,
            "title": {
              "english": "Death Note",
              "native": "DEATH NOTE",
              "__typename": "MediaTitle"
            },
            "duration": 23,
            "description": "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a <i>Death Note<\/i>, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil\u2026 namely, the people he believes to be evil. Should anyone hold such power?<br>\n<br>\nThe consequences of Light\u2019s actions will set the world ablaze.<br>\n<br>\n(Source: Viz Media)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx1535-4r88a1tsBEIz.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 1575,
            "title": {
              "english": "Code Geass: Lelouch of the Rebellion",
              "native": "\u30b3\u30fc\u30c9\u30ae\u30a2\u30b9 \u53cd\u9006\u306e\u30eb\u30eb\u30fc\u30b7\u30e5",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "On August 10th of the year 2010 the Holy Empire of Britannia began a campaign of conquest, its sights set on Japan. Operations were completed in one month thanks to Britannia's deployment of new mobile humanoid armor vehicles dubbed Knightmare Frames. Japan's rights and identity were stripped away, the once proud nation now referred to as Area 11. Its citizens, Elevens, are forced to scratch out a living while the Britannian aristocracy lives comfortably within their settlements. Pockets of resistance appear throughout Area 11, working towards independence for Japan.<br><br>\n Lelouch, an exiled Imperial Prince of Britannia posing as a student, finds himself in the heart of the ongoing conflict for the island nation. Through a chance meeting with a mysterious girl named C.C., Lelouch gains his Geass, the power of the king. Now endowed with absolute dominance over any person, Lelouch may finally realize his goal of bringing down Britannia from within!<br><br>\n(Source: Bandai Entertainment)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx1575-dG7vMMZMF3wk.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 1689,
            "title": {
              "english": "5 Centimeters per Second",
              "native": "\u79d2\u901f\uff15\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb",
              "__typename": "MediaTitle"
            },
            "duration": 22,
            "description": "Tohno Takaki and Shinohara Akari, two very close friends and classmates, are torn apart when Akari's family is transferred to another region of Japan due to her family's job. Despite separation, they continue to keep in touch through mail. When Takaki finds out that his family is also moving, he decides to meet with Akari one last time.<br><br>\nAs years pass by, they continue down their own paths, their distance slowly growing wider and their contact with one another fades. Yet, they keep remembering one another and the times they have shared together, wondering if they will have the chance to meet once again.\n",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx1689-k9lxlCgPU4Zb.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 1840,
            "title": {
              "english": "The Familiar of Zero: Knight of the Twin Moons",
              "native": "\u30bc\u30ed\u306e\u4f7f\u3044\u9b54 \uff5e\u53cc\u6708\u306e\u9a0e\u58eb\uff5e",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "This sequel is a continuation of the previous season, not long after the war. Louise and Saito seemingly getting along now since she knows that he had given up his only chance to return to Tokyo for her. The story continues as Louise begins to use Void Magic from a mysterious secret book she had recieved from her majesty Henrietta, while a new villain has appeared in town causing trouble.\n<br><br>\n(Source: Anime News Network)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx1840-AYZXdXUCpqpR.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 1943,
            "title": {
              "english": "Paprika",
              "native": "\u30d1\u30d7\u30ea\u30ab",
              "__typename": "MediaTitle"
            },
            "duration": 90,
            "description": "Prepare to enter the realm of fantasy and imagination where reality and dreams collide in a kaleidoscopic mindscape of sheer visual genius. The magical tale centers on a revolutionary machine that allows scientists to enter and record a subject's dream. After being stolen, a fearless detective and brilliant therapist join forces to recover the device before it falls into the hands of a dream terrorist.<br>\n<br>\n(Source: Sony Pictures Home Entertainment)<br>\n<br>\n<i>Note: The film received an early premiere at the 63rd Venice International Film Festival on September 2, 2006.<\/i>",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/b1943-TBNhMVA9VwdI.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2001,
            "title": {
              "english": "Gurren Lagann",
              "native": "\u5929\u5143\u7a81\u7834\u30b0\u30ec\u30f3\u30e9\u30ac\u30f3",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "In a far away future, mankind lives underground in huge caves, unknowing of a world above with a sky and stars.<br><br>\nIn the small village of Jiha, Simon, a shy boy who works as a digger discovers a strange glowing object during excavation. The enterprising Kamina, a young man with a pair of rakish sunglasses and the passion of a firey sun, befriends Simon and forms a small band of brothers, the Gurren Brigade, to escape the village and break through the ceiling of the cave to reach the surface, which few believe exist.<br><br>\nThe village elder won't hear of such foolishness and punishes the Brigade. However, when disaster strikes from the world above and the entire village is in jeopardy, it's up to Simon, Kamina, a girl with a big gun named Yoko, and the small yet sturdy robot, Lagann, to save the day.<br><br>\nThe new friends journey to the world above and find that the surface is a harsh battlefield, and it's up to them to fight back against the rampaging Beastmen to turn the tide in the humans' favor! Pierce the heavens, Gurren Lagann!",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2001-7cvz7Jf8viMT.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2167,
            "title": {
              "english": "Clannad",
              "native": "\uff23\uff2c\uff21\uff2e\uff2e\uff21\uff24 -\u30af\u30e9\u30ca\u30c9-",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Tomoya is a bitter, third year high school student. His mother passed away, causing his father to resort to alcohol and gambling. Tomoya is distant with his father and has become a delinquent in the years since his mother's death. Walking to school, he meets Nagisa Furukawa who is a year older but is repeating the grade due to illness. She is alone, as most of her friends have moved on. The two begin hanging out, and as time goes by, Tomoya finds his life shifting in a new direction.<br>\n<br>\n(Source: Sentai Filmworks)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2167-ubU2875AFRTH.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2236,
            "title": {
              "english": "The Girl Who Leapt Through Time",
              "native": "\u6642\u3092\u304b\u3051\u308b\u5c11\u5973",
              "__typename": "MediaTitle"
            },
            "duration": 97,
            "description": "The power to travel through time... It can be used for the good of humanity, or just selfishly abused. While many may fantasize about obtaining such a power, it has become nothing less than reality for otherwise-normal schoolgirl Konno Makoto.<br><br>\nAfter a fated event, her life takes a turn for the extraordinary. Though she initially uses her power to literally \"leap\" into the past and change little things in order to make her life easier, she soon has to face the fact that changing the past can have drastic consequences.\n",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2236-SZf9JYAQ3pyc.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2246,
            "title": {
              "english": "Mononoke",
              "native": "\u30e2\u30ce\u30ce\u602a",
              "__typename": "MediaTitle"
            },
            "duration": 22,
            "description": "Mononoke is a spin-off of the Bakeneko story arc of Ayakashi: Japanese Classic Horror. It follows the Medicine Seller as he deals with various spirits or \"Mononoke\" in feudal Japan. Just like in the Bakeneko story, he combats with a series of tools and his vast knowledge of the supernatural on his side, but can only slay the Mononoke when he uncovers its form (Katachi), the truth behind its appearance (Makoto) and the reason for its unusual behavior (Kotowari).<br><br>\n(Source: Wikipedia)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2246-WHkSkgyuxfgD.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2251,
            "title": {
              "english": "Baccano!",
              "native": "\u30d0\u30c3\u30ab\u30fc\u30ce\uff01",
              "__typename": "MediaTitle"
            },
            "duration": 25,
            "description": "During the early 1930s in Chicago, the transcontinental train, Flying Pussyfoot, is starting its legendary journey that will leave a trail of blood all over the country. At the same time in New York, the ambitious scientist Szilard and his unwilling aide Ennis, are looking for missing bottles of the immortality elixir. In addition, a war between the mafia groups is getting worse. On board the Advena Avis, in 1711, alchemists are about to learn the price of immortality.<br><br>\nBased on the award winning light novels of the same name, this anime adaptation follows several events that initially seem unrelated, both in time and place, but are part of a much bigger story&mdash;one of alchemy, survival and immortality. Merging these events together are the kindhearted would-be thieves, Isaac and Miria, connecting various people, all of them with their own hidden ambitions and agendas, and creating lifelong bonds and consequences for everyone involved.<br><br>\n(Source: MAL Rewrite)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2251-Wa30L0Abk50O.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2593,
            "title": {
              "english": "the Garden of sinners Chapter 1: Thanatos. (Overlooking View)",
              "native": "\u7a7a\u306e\u5883\u754c \u4fef\u77b0\u98a8\u666f",
              "__typename": "MediaTitle"
            },
            "duration": 50,
            "description": "September, 1998: In the city where Shiki lives, something triggers a spate of mysterious schoolgirl suicides. The connection between the girls who've leapt to their deaths is unclear, although all of them have jumped from the Fujou Building, a skyscraper scheduled to be demolished.\r\n<br><br>\r\n(Source: Aniplex USA)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2593-irF8xIuAOKUc.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2605,
            "title": {
              "english": "Sayonara, Zetsubou-Sensei",
              "native": "\u3055\u3088\u306a\u3089\u7d76\u671b\u5148\u751f",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Itoshiki Nozomu is always in despair! Even simple things like paying for the toll on the subway can send him to a despair so deep only attempted suicide is the answer. How Strange is it then, that he should be the teacher of a High School Class filled with students with even more emotional problems than his. This great Comedy will leave you in anything but 'Despair' as you meet each of his students and watch their wacky adventures.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2605-euXOWMmXtZMe.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2759,
            "title": {
              "english": "Evangelion: 1.0 You Are (Not) Alone",
              "native": "\u30f1\u30f4\u30a1\u30f3\u30b2\u30ea\u30f2\u30f3\u65b0\u5287\u5834\u7248:\u5e8f",
              "__typename": "MediaTitle"
            },
            "duration": 100,
            "description": "After the second impact, all that remains of Japan is Tokyo-3, a city that's being attacked by giant creatures that seek to eradicate the human kind, called Angels. After not seeing his father for more than eight years, Shinji Ikari receives a phone call in which he is told to urgently come to the NERV Headquarters, an organization that deals with the destruction of the Angels through the use of giant mechs called Evas. Shinji's objective is to pilot the Eva Unit 01 while teaming up with the Eva Unit 00 pilot, Ayanami Rei.<br><br>\n<i>Note: Exists in several versions, as denoted by the version number:<br>\n\u2022 <b>1.0<\/b>: Sep 1, 2007 - Original theatrical release<br>\n\u2022 <b>1.01<\/b>: Apr 25, 2008 - DVD release containing minor adjustments and fine tunings in picture, editing, and sound quality.<br>\n&#8195;\u2022 <b>Explanation of Evangelion 1.01<\/b> - Included with the special edition DVD release of 1.01, overlays large captions to provide the \"official designations\" of people, locations, weapons, technology, and so forth.<br>\n\u2022 <b>1.11<\/b>: May 27, 2009 - Blu-ray\/DVD re-release with 3 minutes of new animation added to the first 15 minutes and fixing video issues present in the previous release.<\/i>",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2759-z07kq8Pnw5B1.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2904,
            "title": {
              "english": "Code Geass: Lelouch of the Rebellion R2",
              "native": "\u30b3\u30fc\u30c9\u30ae\u30a2\u30b9 \u53cd\u9006\u306e\u30eb\u30eb\u30fc\u30b7\u30e5 R2",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "A year has passed since \"The Black Rebellion\" and the remaining Black Knights have vanished into the shadows, their leader and figurehead, Zero, executed by the Britannian Empire. Area 11 is once more squirming under the Emperor's oppressive heel as the Britannian armies concentrate their attacks on the European front. But for the Britannians living in Area 11, life is back to normal. On one such normal day, a Britannian student, skipping his classes in the Ashford Academy, sneaks out to gamble on his chess play. But unknown to this young man, several forces are eying him from the shadows, for soon, he will experience a shocking encounter with his own obscured past, and the masked rebel mastermind Zero will return.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2904-Z6DhLHr1XWEH.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 2966,
            "title": {
              "english": "Spice and Wolf",
              "native": "\u72fc\u3068\u9999\u8f9b\u6599",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "The peddler Kraft Lawrence travels through the world selling all kinds of things. After visiting a village, he discovers a sleeping girl under the pelts in his cart. She has wolf ears and a tail. The wolf girl explains that she has been called a \"god\", but that her name is Holo and nothing more. Lawrence teases the girl a little, but after hearing more of her story, he is moved and decides to accompany her further north. On their travels the two have many adventures, often getting into trouble, but the bond between them grows stronger. ",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx2966-BDusgFy0UzDy.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 3087,
            "title": {
              "english": null,
              "native": "\u30bb\u30f3\u30b3\u30ed\u30fc\u30eb",
              "__typename": "MediaTitle"
            },
            "duration": 27,
            "description": "When a gigantic, unearthly monster suddenly looms on the skyline of a Japanese city, the expected occurs&mdash;the Japan Self-Defense Forces roll out the tanks while the public panics. Nobody knows what it is or where it came from, but Yuki, a bold and inquisitive teenage girl, has a secret but might be a useful clue. Her friend Tetsu has been clandestinely caring for a bizarre creature called Cenco, which will soon prove itself to have some remarkable, even impossible characteristics. Another teenage boy, a stranger with some mysterious link to the monstrosity attacking the city, shows up, and his unwelcome interest in Tetsu's pet snuffs out any doubt of a connection&mdash;and lights the fuse for the coming battle.<br><br>\n(Source: Rupert Bottenberg, Fantasia Genre Film Festival)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx3087-zGi4QFy359uY.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 3588,
            "title": {
              "english": "Soul Eater",
              "native": "\u30bd\u30a6\u30eb\u30a4\u30fc\u30bf\u30fc",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Set in the Shinigami technical school for weapon meisters, the series revolves around 3 groups of each a weapon meister and a human weapon. Trying to make the latter a \"Death Scythe\" which is the highest title for a weapon and thus fit for use by the Shinigami, they must collect the souls of 99 evil humans and 1 witch.<br><br>\nMaka &amp; Soul Eater, Black Star &amp; Tsubaki, and Death the Kid with Patty and Liz Thompson are the characters Soul Eater revolves around. Besides taking the time to gather souls, these students of Shibusen defend Death City from some of the most powerful of creatures while still attending school and trying to become stronger.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx3588-CA8LE5gjm9Qx.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 3782,
            "title": {
              "english": "the Garden of sinners Chapter 2: \u2026and nothing heart. (Murder Speculation Part A)",
              "native": "\u7a7a\u306e\u5883\u754c \u6bba\u4eba\u8003\u5bdf(\u524d)",
              "__typename": "MediaTitle"
            },
            "duration": 61,
            "description": "March, 1995: Mikiya Kokutou meets a girl who has a mysterious gaze and falls in love with her. That April, he's reunited with her at his high school entrance ceremony. The girl's name is Shiki Ryougi. Meanwhile, the city has been rattled by a series of bizarre murders. There are no known links between victims, and the motive is unclear. An astonishing secret awaits Mikiya, but he doesn't find out until three years later...\r\n<br><br>\r\n(Source: Aniplex USA)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx3782-b8NzFcoYs9vc.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 3783,
            "title": {
              "english": "the Garden of sinners Chapter 3: ever cry, never life. (Remaining Sense of Pain)",
              "native": "\u7a7a\u306e\u5883\u754c \u75db\u899a\u6b8b\u7559",
              "__typename": "MediaTitle"
            },
            "duration": 58,
            "description": "July, 1998: One night, Mikiya helps a girl lying doubled over with stomach pains. Around that time, a number of dismembered bodies are found throughout the city. The murder victims are torn apart so badly that they don't seem like the work of a human.\r\n<br><br>\r\n(Source: Aniplex USA)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx3783-NziqsWetU1LK.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 3784,
            "title": {
              "english": "Evangelion: 2.0 You Can (Not) Advance",
              "native": "\u30f1\u30f4\u30a1\u30f3\u30b2\u30ea\u30f2\u30f3\u65b0\u5287\u5834\u7248:\u7834",
              "__typename": "MediaTitle"
            },
            "duration": 112,
            "description": "In the earliest battles against the monstrous Angels, young Eva pilots Shinji and Rei were forced to carry humanity's hopes on their shoulders. Now, with the deadly onslaught of the Angels escalating and the apocalyptic Third Impact looming, Shinji and Rei find their burden shared by two new Eva pilots, the fiery Asuka and the mysterious Mari. Maneuvering their enormous Eva machines into combat, the four young souls fight desperately to save mankind from the heavens\u2014but will they be able to save themselves?<br><br>\n(Source: FUNimation)<br><br>\n<i>Note: Exists in several versions, as denoted by the version number:<br>\n\u2022 <b>2.0<\/b>: Jun 27, 2009 - Original theatrical release<br>\n\u2022 <b>2.22<\/b>: May 26, 2010 - Blu-ray\/DVD release with new scenes and 'readjustments'.<\/i>",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx3784-TGCsqLryKJ2R.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 3785,
            "title": {
              "english": "Evangelion: 3.0 You Can (Not) Redo",
              "native": "\u30f1\u30f4\u30a1\u30f3\u30b2\u30ea\u30f2\u30f3\u65b0\u5287\u5834\u7248:Q",
              "__typename": "MediaTitle"
            },
            "duration": 96,
            "description": "14 years after third impact, Ikari Shinji awakens to a world he does not remember. He hasn't aged. Much of Earth is laid in ruins, Nerv has been dismantled, and people who he once protected have turned against him. Befriending the enigmatic Nagisa Kaworu, Shinji continues the fight against the angels and realizes the fighting is far from over, even when it could be against his former allies. The characters' struggles continue amidst the battles against the angels and each other, spiraling down to what could inevitably be the end of the world.<br><br>\n(Source: Anime News Network)<br><br>\n<i>Note: Exists in several versions, as denoted by the version number:<br>\n\u2022 <b>3.0<\/b>: Nov 17, 2012 - Original theatrical release<br>\n\u2022 <b>3.33<\/b>: Apr 24, 2013 - Blu-ray\/DVD release with minor visual changes.<br>\n\u2022 <b>3.333<\/b>: Jan 8, 2021 - Theatrical IMAX screenings mastered in 2K with numerous small adjustments to lighting and color, as well as a new preview at the end of the film.<br>\n&#8195;\u2022  Aug 25, 2021 - 4K Blu-ray release of 3.333<\/i>",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx3785-OG857YhQalvS.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 3786,
            "title": {
              "english": "Evangelion: 3.0+1.0 Thrice Upon a Time",
              "native": "\u30b7\u30f3\u30fb\u30a8\u30f4\u30a1\u30f3\u30b2\u30ea\u30aa\u30f3\u5287\u5834\u7248:||",
              "__typename": "MediaTitle"
            },
            "duration": 155,
            "description": "In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei find refuge in one of the rare pockets of humanity that still exist on the ruined planet Earth. There, each of them live a life far different from their days as an Evangelion pilot. However, the danger to the world is far from over. A new impact is looming on the horizon\u2014one that will prove to be the true end of Evangelion. Finally, the Human Instrumentality Project is set in motion, and WILLE makes one last grueling stand to prevent the Final Impact.\n<br><br>\n<i>Note: Exists in multiple versions, as denoted by the version number:<\/i>\n<br><br>\n- <b>3.0+1.0<\/b>: March 8, 2021 - Original theatrical release<br>\n- <b>3.0+1.01<\/b>: June 12, 2021 - A second theatrical release which features updated cuts of various scenes while not changing the overall story of the film.<br>\n- <b>3.0+1.11<\/b>: March 8, 2023 - A home media release scheduled for the film's two-year anniversary.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx3786-FPo09WTuoTCV.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 3901,
            "title": {
              "english": null,
              "native": "\u30d0\u30c3\u30ab\u30fc\u30ce!",
              "__typename": "MediaTitle"
            },
            "duration": 29,
            "description": "Three DVD-only episodes made from the light novels, which flesh out characters and plot events from the original series and establish closure to the story as Carol and the Vice President return to New York.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx3901-uUj3GeGsebmj.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 4224,
            "title": {
              "english": "Toradora!",
              "native": "\u3068\u3089\u30c9\u30e9\uff01",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "Ryuuji Takasu is a gentle high school student with a love for housework; but in contrast to his kind nature, he has an intimidating face that often gets him labeled as a delinquent. On the other hand is Taiga Aisaka, a small, doll-like student, who is anything but a cute and fragile girl. Equipped with a wooden katana and feisty personality, Taiga is known throughout the school as the \"Palmtop Tiger.\"\n<br><br>\nOne day, an embarrassing mistake causes the two students to cross paths. Ryuuji discovers that Taiga actually has a sweet side: she has a crush on the popular vice president, Yuusaku Kitamura, who happens to be his best friend. But things only get crazier when Ryuuji reveals that he has a crush on Minori Kushieda\u2014Taiga's best friend!\n<br><br>\n<i>Toradora!<\/i> is a romantic comedy that follows this odd duo as they embark on a quest to help each other with their respective crushes, forming an unlikely alliance in the process.\n",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx4224-3Bh0rm99N6Vl.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 4280,
            "title": {
              "english": "the Garden of sinners Chapter 4: garan-no-dou. (The Hollow Shrine)",
              "native": "\u7a7a\u306e\u5883\u754c\u4f3d\u85cd\u306e\u6d1e",
              "__typename": "MediaTitle"
            },
            "duration": 46,
            "description": "June, 1998: After spending two years in a coma caused by a traffic accident, Shiki Ryougi awakens with amnesia. She is visited by Touko Aozaki, a wizard and proprietor of a studio called Garan no Dou. Shiki has lost not only the memory of her accident, but also any real sense that she's even alive. Strangely, enigmatic beings begin to attack her...\r\n<br><br>\r\n(Source: Aniplex USA)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx4280-GKUNVjzu5sUO.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 4282,
            "title": {
              "english": "the Garden of sinners Chapter 5: Paradox Paradigm",
              "native": "\u7a7a\u306e\u5883\u754c \u77db\u76fe\u87ba\u65cb",
              "__typename": "MediaTitle"
            },
            "duration": 114,
            "description": "November, 1998: Shiki meets a boy named Tomoe Enjou, a runaway who claims to be a murderer. Shiki allows Tomoe to use her apartment as his hideout, but one day, Tomoe sees his mother whom he's sure he's killed.\r\n<br><br>\r\n(Source: Aniplex USA)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx4282-R19YmET0glSZ.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 4654,
            "title": {
              "english": "A Certain Magical Index",
              "native": "\u3068\u3042\u308b\u9b54\u8853\u306e\u7981\u66f8\u76ee\u9332",
              "__typename": "MediaTitle"
            },
            "duration": 23,
            "description": "Set in a city of scientifically advanced superhuman students, but in a world where magic is also real. Touma Kamijou&rsquo;s right hand, the Imagine Breaker, will negate all magic, psychic, or divine powers, but not his own bad luck. One day he finds a young girl hanging on his balcony railing. She turns out to be a nun from the Church of England, and her mind has been implanted with the Index-Librorum-Prohibitorum - all the magical texts the Church has removed from circulation.",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx4654-HX1Y1R1EfYJr.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 4672,
            "title": {
              "english": "Ghost in the Shell 2.0",
              "native": "GHOST IN THE SHELL \/ \u653b\u6bbb\u6a5f\u52d5\u968a2.0",
              "__typename": "MediaTitle"
            },
            "duration": 85,
            "description": "In the year 2029, the world is made borderless by the net; augmented humans live in virtual environments, watched over by law enforcement that is able to download themselves into super-powered, crime busting mecha. The ultimate secret agent of the future is not human, has no physical body, and can freely travel the information highways of the world, hacking and manipulating whatever and whenever required.<br>\n<br>\n<i>Note: Ghost in the Shell 2.0 is a renewed version of the 1995 film produced as part of celebration for the release of The Sky Crawlers in 2008. For the Version 2.0, all the animation was re-produced using the latest technology such as 3D-CGI, and the soundtrack was also remastered. All the voices were re-recorded. Notably, the voice actor of the \"Puppet Master\" was changed from Kayumi Iemasa to that of Sakakibara Yoshiko, and some dialogues were changed from the original. Kawai Kenji remixed the music with 6.1 channel surround, and Randy Thom of Skywalker Sound joined as Sound Designer to improve the sound.<\/i><br>\n<br>\n(Source: AniDB)\n",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx4672-NFXxVPGXSZQB.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 5081,
            "title": {
              "english": "Bakemonogatari",
              "native": "\u5316\u7269\u8a9e",
              "__typename": "MediaTitle"
            },
            "duration": 24,
            "description": "First season of the Monogatari Series, part 1\/6. Contains the arcs Hitagi Crab, Mayoi Snail, Suruga Monkey, Nadeko Snake, and Tsubasa Cat from the Bakemonogatari light novels.<br><br>\nThanks to Meme Oshino, Koyomi Araragi, a high school student, is able to remain a human after coming across a female vampire... However, since the incident, Koyomi seems to meet girls who have an apparition-related issue. Hitagi Senjougahara doesn\u2019t weigh anything, Suruga Kanbaru\u2019s right arm becomes like that of a monkey\u2019s, and a young girl, Mayoi, cannot find her way home no matter how many times she tries. Koyomi, a Mr. Nice Guy, ends up helping each and every girl solve her problem with the help of Meme Oshino.\n<br><br>\n(Source: Aniplex)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx5081-WNUrgxsHoE4V.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 5114,
            "title": {
              "english": "Fullmetal Alchemist: Brotherhood",
              "native": "\u92fc\u306e\u932c\u91d1\u8853\u5e2b FULLMETAL ALCHEMIST",
              "__typename": "MediaTitle"
            },
            "duration": 25,
            "description": "\"In order for something to be obtained, something of equal value must be lost.\"\n<br><br>\nAlchemy is bound by this Law of Equivalent Exchange\u2014something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression\u2014Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist.\n<br><br>\nThree years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.\n<br><br>\n(Source: MAL Rewrite)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx5114-Dilr312jctdJ.jpg",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        },
        {
          "media": {
            "id": 5204,
            "title": {
              "english": "the Garden of sinners Chapter 6: Fairy Tale. (Oblivion Recording)",
              "native": "\u7a7a\u306e\u5883\u754c \u5fd8\u5374\u9332\u97f3",
              "__typename": "MediaTitle"
            },
            "duration": 59,
            "description": "January, 1999: Apprentice mage Azaka Kokutou, Mikiya's younger sister, has been ordered by her mentor, Touko Aozaki, to investigate a certain incident in which fairies steal the memories of students at Azaka's school, Reien Academy. Azaka launches an investigation with the help of Shiki.\r\n<br><br>\r\n(Source: Aniplex USA)",
            "coverImage": {
              "large": "https:\/\/s4.anilist.co\/file\/anilistcdn\/media\/anime\/cover\/medium\/bx5204-6PdYdIXswcEo.png",
              "__typename": "MediaCoverImage"
            },
            "__typename": "Media"
          },
          "__typename": "MediaList"
        }
      ],
      "__typename": "Page"
    }
  }
};

const mock = {
  delay: 30,
  request: {
    query: GET_ANIME_LIST,
    variables: { "MediaType": "ANIME" }
  },
  result: dummyData


}

describe('AnimeListAll.cy.jsx', () => {
  it('playground', () => {
    cy.mount(
      <MockedProvider mocks={[mock]}>
        <AnimeListAll />
      </MockedProvider>
    )

    cy.contains("Loading...")
    cy.contains("Anime")
    cy.contains("Cowboy Bebop")

  })
})