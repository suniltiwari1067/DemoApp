import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import PMovieList from './pMovieList'
import { movieStyle } from './styles';

const mockData = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
            "genre_ids": [
                16,
                12,
                35,
                10751,
                14
            ],
            "id": 315162,
            "original_language": "en",
            "original_title": "Puss in Boots: The Last Wish",
            "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
            "popularity": 4239.37,
            "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
            "release_date": "2022-12-07",
            "title": "Puss in Boots: The Last Wish",
            "video": false,
            "vote_average": 8.6,
            "vote_count": 3130
        },
        {
            "adult": false,
            "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 505642,
            "original_language": "en",
            "original_title": "Black Panther: Wakanda Forever",
            "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
            "popularity": 3907.516,
            "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
            "release_date": "2022-11-09",
            "title": "Black Panther: Wakanda Forever",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 2159
        },
        {
            "adult": false,
            "backdrop_path": "/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg",
            "genre_ids": [
                878,
                27,
                35
            ],
            "id": 536554,
            "original_language": "en",
            "original_title": "M3GAN",
            "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
            "popularity": 3138.271,
            "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
            "release_date": "2022-12-28",
            "title": "M3GAN",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 1180
        },
        {
            "adult": false,
            "backdrop_path": "/qHdPNd1cUaSNYLLNgt1Pv3LVd0T.jpg",
            "genre_ids": [
                878,
                28,
                12
            ],
            "id": 843794,
            "original_language": "ko",
            "original_title": "정이",
            "overview": "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
            "popularity": 2250.255,
            "poster_path": "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
            "release_date": "2023-01-20",
            "title": "JUNG_E",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 204
        },
        {
            "adult": false,
            "backdrop_path": "/96SADhPnkXnVN3KaRKsDeBovLcm.jpg",
            "genre_ids": [
                28,
                14,
                10770
            ],
            "id": 877703,
            "original_language": "en",
            "original_title": "Teen Wolf: The Movie",
            "overview": "The wolves are howling once again, as a terrifying ancient evil emerges in Beacon Hills. Scott McCall, no longer a teenager yet still an Alpha, must gather new allies and reunite trusted friends to fight back against this powerful and deadly enemy.",
            "popularity": 2040.292,
            "poster_path": "/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg",
            "release_date": "2023-01-18",
            "title": "Teen Wolf: The Movie",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 266
        },
        {
            "adult": false,
            "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 76600,
            "original_language": "en",
            "original_title": "Avatar: The Way of Water",
            "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
            "popularity": 1751.144,
            "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            "release_date": "2022-12-14",
            "title": "Avatar: The Way of Water",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 4933
        },
        {
            "adult": false,
            "backdrop_path": "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
            "genre_ids": [
                10752,
                36,
                18
            ],
            "id": 653851,
            "original_language": "en",
            "original_title": "Devotion",
            "overview": "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
            "popularity": 1348.962,
            "poster_path": "/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",
            "release_date": "2022-11-23",
            "title": "Devotion",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 209
        },
        {
            "adult": false,
            "backdrop_path": "/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg",
            "genre_ids": [
                28,
                53,
                18
            ],
            "id": 846433,
            "original_language": "es",
            "original_title": "The Enforcer",
            "overview": "A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.",
            "popularity": 1283.112,
            "poster_path": "/72V1r1G8S87ELagVxjqAUdChMCt.jpg",
            "release_date": "2022-09-22",
            "title": "The Enforcer",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 126
        },
        {
            "adult": false,
            "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            "genre_ids": [
                14,
                28,
                878
            ],
            "id": 436270,
            "original_language": "en",
            "original_title": "Black Adam",
            "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
            "popularity": 1154.673,
            "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
            "release_date": "2022-10-19",
            "title": "Black Adam",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 4001
        },
        {
            "adult": false,
            "backdrop_path": "/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg",
            "genre_ids": [
                28,
                35,
                80,
                53
            ],
            "id": 899112,
            "original_language": "en",
            "original_title": "Violent Night",
            "overview": "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
            "popularity": 1119.075,
            "poster_path": "/1XSYOP0JjjyMz1irihvWywro82r.jpg",
            "release_date": "2022-11-30",
            "title": "Violent Night",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 1086
        },
        {
            "adult": false,
            "backdrop_path": "/vLPSvAt1CnfmDCeqG3zkFh0s6S4.jpg",
            "genre_ids": [
                10752,
                28
            ],
            "id": 542196,
            "original_language": "en",
            "original_title": "Wolf Hound",
            "overview": "Inspired by the real-life German special operations unit KG 200 that shot down, repaired, and flew Allied aircraft as Trojan horses, \"Wolf Hound\" takes place in 1944 German-occupied France and follows the daring exploits of Jewish-American fighter pilot Captain David Holden. Ambushed behind enemy lines, Holden must rescue a captured B-17 Flying Fortress crew, evade a ruthless enemy stalking him at every turn, and foil a plot that could completely alter the outcome of World War II.",
            "popularity": 1039.456,
            "poster_path": "/6sMnY4fEVAfdadhANhGnNckxsmx.jpg",
            "release_date": "2022-06-03",
            "title": "Wolf Hound",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 26
        },
        {
            "adult": false,
            "backdrop_path": "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
            "genre_ids": [
                14,
                28,
                12,
                53
            ],
            "id": 736526,
            "original_language": "no",
            "original_title": "Troll",
            "overview": "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
            "popularity": 1001.016,
            "poster_path": "/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
            "release_date": "2022-12-01",
            "title": "Troll",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 1125
        },
        {
            "adult": false,
            "backdrop_path": "/o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg",
            "genre_ids": [
                28,
                12,
                14,
                878
            ],
            "id": 19995,
            "original_language": "en",
            "original_title": "Avatar",
            "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
            "popularity": 972.361,
            "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
            "release_date": "2009-12-15",
            "title": "Avatar",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 28152
        },
        {
            "adult": false,
            "backdrop_path": "/tCpMRsHlfR6CcqJYA3kJMS3YApt.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 1035806,
            "original_language": "en",
            "original_title": "Detective Knight: Independence",
            "overview": "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
            "popularity": 899.08,
            "poster_path": "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
            "release_date": "2023-01-20",
            "title": "Detective Knight: Independence",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 12
        },
        {
            "adult": false,
            "backdrop_path": "/1RZlwRdVbKav9O153vWbYCn54Nk.jpg",
            "genre_ids": [
                18,
                35
            ],
            "id": 615777,
            "original_language": "en",
            "original_title": "Babylon",
            "overview": "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",
            "popularity": 898.717,
            "poster_path": "/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
            "release_date": "2022-12-22",
            "title": "Babylon",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 669
        },
        {
            "adult": false,
            "backdrop_path": "/94kQGMiFbs5MUTlt7kj9dewsMDi.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 676547,
            "original_language": "en",
            "original_title": "Prey for the Devil",
            "overview": "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
            "popularity": 908.765,
            "poster_path": "/iCvgemXf2Kpr2LvpDmt5J9NhjKM.jpg",
            "release_date": "2022-10-23",
            "title": "Prey for the Devil",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 463
        },
        {
            "adult": false,
            "backdrop_path": "/tsjXBo4LmzV0Bb9hdrz25tzX5GD.jpg",
            "genre_ids": [
                10402
            ],
            "id": 1041513,
            "original_language": "en",
            "original_title": "Encanto at the Hollywood Bowl",
            "overview": "A taped performance of the Encanto Live-to-Film Concert Experience at the Hollywood Bowl. The original cast puts on a miracle of a concert as they sing the favorite songs, accompanied by a full orchestra and 50 person ensemble, and the Hollywood Bowl transforms into Casita!",
            "popularity": 759.773,
            "poster_path": "/sa3Ku5yNVjp8NloWxJoI9dQjvOi.jpg",
            "release_date": "2022-12-28",
            "title": "Encanto at the Hollywood Bowl",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 74
        },
        {
            "adult": false,
            "backdrop_path": "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
            "genre_ids": [
                28,
                10749,
                35
            ],
            "id": 758009,
            "original_language": "en",
            "original_title": "Shotgun Wedding",
            "overview": "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
            "popularity": 1199.551,
            "poster_path": "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
            "release_date": "2022-12-28",
            "title": "Shotgun Wedding",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 177
        },
        {
            "adult": false,
            "backdrop_path": "/7GmQKKAB3q3xkpxt1VFt2DrfviW.jpg",
            "genre_ids": [
                53,
                80
            ],
            "id": 934287,
            "original_language": "da",
            "original_title": "Klienten",
            "overview": "Renowned psychologist Susanne (Signe Egholm Olsen) is caught in a living nightmare when her new client (Anton Hjejle) turns out to be a wanted serial killer.",
            "popularity": 786.787,
            "poster_path": "/oUhZzMpHAMgdRgLbsvBIqhY7fKe.jpg",
            "release_date": "2022-06-20",
            "title": "The Last Client",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 60
        },
        {
            "adult": false,
            "backdrop_path": "/sKK5bbQm15jzbMRwCJmPBbv9trN.jpg",
            "genre_ids": [
                12,
                10751,
                14
            ],
            "id": 411,
            "original_language": "en",
            "original_title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            "overview": "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
            "popularity": 843.264,
            "poster_path": "/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
            "release_date": "2005-12-07",
            "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 9251
        },


    ],
    "total_pages": 36925,
    "total_results": 738484
}

const mockData1 = {
    "page": 2,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/chLZrgbUomn48GDYaq7HzVYLZbg.jpg",
            "genre_ids": [
                28,
                18
            ],
            "id": 39456,
            "original_language": "it",
            "original_title": "Femmine in fuga",
            "overview": "The young, pretty and shy Angela Duvall is jailed for murder in some Latin American country. In the prison she gets brutally \"initiated\" by the other inmates. The nice, honest and handsome prison doctor believe she's innocent and tries to help her out.",
            "popularity": 815.175,
            "poster_path": "/bpQ5YAg9IwXpnlkjTZxWSj1P8Jj.jpg",
            "release_date": "1984-05-10",
            "title": "Women in Fury",
            "video": false,
            "vote_average": 6,
            "vote_count": 25
        },
        {
            "adult": false,
            "backdrop_path": "/7GmQKKAB3q3xkpxt1VFt2DrfviW.jpg",
            "genre_ids": [
                53,
                80
            ],
            "id": 934287,
            "original_language": "da",
            "original_title": "Klienten",
            "overview": "Renowned psychologist Susanne (Signe Egholm Olsen) is caught in a living nightmare when her new client (Anton Hjejle) turns out to be a wanted serial killer.",
            "popularity": 786.787,
            "poster_path": "/oUhZzMpHAMgdRgLbsvBIqhY7fKe.jpg",
            "release_date": "2022-06-20",
            "title": "The Last Client",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 60
        },
        {
            "adult": false,
            "backdrop_path": "/nWs0auTqn2UaFGfTKtUE5tlTeBu.jpg",
            "genre_ids": [
                10751,
                35,
                14
            ],
            "id": 668482,
            "original_language": "en",
            "original_title": "Roald Dahl's Matilda the Musical",
            "overview": "An extraordinary young girl discovers her superpower and summons the remarkable courage, against all odds, to help others change their stories, whilst also taking charge of her own destiny. Standing up for what's right, she's met with miraculous results.",
            "popularity": 769.792,
            "poster_path": "/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg",
            "release_date": "2022-11-25",
            "title": "Roald Dahl's Matilda the Musical",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 449
        },
        {
            "adult": false,
            "backdrop_path": "/tsjXBo4LmzV0Bb9hdrz25tzX5GD.jpg",
            "genre_ids": [
                10402
            ],
            "id": 1041513,
            "original_language": "en",
            "original_title": "Encanto at the Hollywood Bowl",
            "overview": "A taped performance of the Encanto Live-to-Film Concert Experience at the Hollywood Bowl. The original cast puts on a miracle of a concert as they sing the favorite songs, accompanied by a full orchestra and 50 person ensemble, and the Hollywood Bowl transforms into Casita!",
            "popularity": 759.773,
            "poster_path": "/sa3Ku5yNVjp8NloWxJoI9dQjvOi.jpg",
            "release_date": "2022-12-28",
            "title": "Encanto at the Hollywood Bowl",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 74
        },
        {
            "adult": false,
            "backdrop_path": "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
            "genre_ids": [
                35,
                80,
                9648
            ],
            "id": 661374,
            "original_language": "en",
            "original_title": "Glass Onion: A Knives Out Mystery",
            "overview": "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
            "popularity": 712.876,
            "poster_path": "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
            "release_date": "2022-11-23",
            "title": "Glass Onion: A Knives Out Mystery",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 3144
        },
        {
            "adult": false,
            "backdrop_path": "/cU7itLM8qmwMiaNnWsJPQLKe79j.jpg",
            "genre_ids": [
                878,
                27,
                12,
                28
            ],
            "id": 1013870,
            "original_language": "en",
            "original_title": "Kids vs. Aliens",
            "overview": "All Gary wants is to make awesome home movies with his best buds. All his older sister Samantha wants is to hang with the cool kids. When their parents head out of town one Halloween weekend, an all-time rager of a teen house party turns to terror when aliens attack, forcing the siblings to band together to survive the night.",
            "popularity": 706.212,
            "poster_path": "/wQ53sO5n9LCFbssV3oQ4CuajL1L.jpg",
            "release_date": "2023-01-20",
            "title": "Kids vs. Aliens",
            "video": false,
            "vote_average": 2,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/ub3BAIzgGnkHqUBtUAf3hpG9xMF.jpg",
            "genre_ids": [
                12,
                16,
                10751
            ],
            "id": 297270,
            "original_language": "en",
            "original_title": "Tinker Bell and the Legend of the NeverBeast",
            "overview": "An ancient myth of a massive creature sparks the curiosity of Tinker Bell and her good friend Fawn, an animal fairy who’s not afraid to break the rules to help an animal in need. But this creature is not welcome in Pixie Hollow — and the scout fairies are determined to capture the mysterious beast, who they fear will destroy their home. Fawn must convince her fairy friends to risk everything to rescue the NeverBeast.",
            "popularity": 693.335,
            "poster_path": "/3S0mmmpYStB3GqodRghcfOt81wQ.jpg",
            "release_date": "2014-12-12",
            "title": "Tinker Bell and the Legend of the NeverBeast",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 833
        },
        {
            "adult": false,
            "backdrop_path": "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
            "genre_ids": [
                16,
                14,
                18
            ],
            "id": 555604,
            "original_language": "en",
            "original_title": "Guillermo del Toro's Pinocchio",
            "overview": "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
            "popularity": 681.093,
            "poster_path": "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
            "release_date": "2022-11-18",
            "title": "Guillermo del Toro's Pinocchio",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 1747
        },
        {
            "adult": false,
            "backdrop_path": "/ofteFQqIntae7wqVAYYyXOCmkF1.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 980078,
            "original_language": "en",
            "original_title": "Winnie the Pooh: Blood and Honey",
            "overview": "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
            "popularity": 679.476,
            "poster_path": "/wtFwgFFk1ze789ghcadWGEVjj3N.jpg",
            "release_date": "2023-01-27",
            "title": "Winnie the Pooh: Blood and Honey",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 8
        },
        {
            "adult": false,
            "backdrop_path": "/ecaB1LUoQE1ylZJVF5KLRTkewt8.jpg",
            "genre_ids": [
                28,
                35,
                80
            ],
            "id": 683328,
            "original_language": "id",
            "original_title": "The Big 4",
            "overview": "A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
            "popularity": 661.903,
            "poster_path": "/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg",
            "release_date": "2022-12-19",
            "title": "The Big 4",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 118
        },
        {
            "adult": false,
            "backdrop_path": "/xTsERrOCW15OIYl5aPX7Jbj38wu.jpg",
            "genre_ids": [
                28,
                18,
                36
            ],
            "id": 724495,
            "original_language": "en",
            "original_title": "The Woman King",
            "overview": "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
            "popularity": 654.249,
            "poster_path": "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
            "release_date": "2022-09-16",
            "title": "The Woman King",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 1172
        },
        {
            "adult": false,
            "backdrop_path": "/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg",
            "genre_ids": [
                28,
                9648,
                53,
                80
            ],
            "id": 740952,
            "original_language": "en",
            "original_title": "Savage Salvation",
            "overview": "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
            "popularity": 620.608,
            "poster_path": "/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
            "release_date": "2022-12-02",
            "title": "Savage Salvation",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 88
        },
        {
            "adult": false,
            "backdrop_path": "/xOcwcyLM2lqXCrZG8AIHC8DXElF.jpg",
            "genre_ids": [
                27
            ],
            "id": 943221,
            "original_language": "es",
            "original_title": "Mal de ojo",
            "overview": "Nala, a thirteen-year-old girl from the city, travels with her family to her grandmother's home in the countryside, to try to find a cure for her little sister's mysterious illness - But she'll soon find her granny is not exactly what she seems...",
            "popularity": 614.767,
            "poster_path": "/sChhX2wWgVbTd6j38ADrAfHd4mE.jpg",
            "release_date": "2022-09-22",
            "title": "Mal de ojo",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 161
        },
        {
            "adult": false,
            "backdrop_path": "/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
            "genre_ids": [
                27
            ],
            "id": 663712,
            "original_language": "en",
            "original_title": "Terrifier 2",
            "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
            "popularity": 583.378,
            "poster_path": "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
            "release_date": "2022-10-06",
            "title": "Terrifier 2",
            "video": false,
            "vote_average": 7,
            "vote_count": 976
        },
        {
            "adult": false,
            "backdrop_path": "/mYQSbZdGX0JJb49NLO04UA0iFEU.jpg",
            "genre_ids": [
                28,
                35,
                80
            ],
            "id": 1015963,
            "original_language": "en",
            "original_title": "High Heat",
            "overview": "When the local mafia shows up to burn down her restaurant, Ana, a chef with a meticulous past, defends her turf and proves her knife skills both in and out of the kitchen.",
            "popularity": 551.503,
            "poster_path": "/mmD0NVdhiRiCu64YKem5GK5PSfy.jpg",
            "release_date": "2022-12-16",
            "title": "High Heat",
            "video": false,
            "vote_average": 5.7,
            "vote_count": 40
        },
        {
            "adult": false,
            "backdrop_path": "/6YRQ8l93ZEs6x4rZojWoHIWdguK.jpg",
            "genre_ids": [
                28,
                80
            ],
            "id": 1024546,
            "original_language": "en",
            "original_title": "Detective Knight: Rogue",
            "overview": "As Los Angeles prepares for Halloween, mask-wearing armed robbers critically wound detective James Knight’s partner in a shootout following a heist. With Knight in hot pursuit, the bandits flee L.A. for New York, where the detective’s dark past collides with his present case and threatens to tear his world apart…unless redemption can claim Knight first.",
            "popularity": 533.517,
            "poster_path": "/2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg",
            "release_date": "2022-10-21",
            "title": "Detective Knight: Rogue",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 67
        },
        {
            "adult": false,
            "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
            "genre_ids": [
                53
            ],
            "id": 985939,
            "original_language": "en",
            "original_title": "Fall",
            "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
            "popularity": 527.31,
            "poster_path": "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
            "release_date": "2022-08-11",
            "title": "Fall",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 2369
        },
        {
            "adult": false,
            "backdrop_path": "/8oj1pbizI6RS5xlyETmlWh9mVqN.jpg",
            "genre_ids": [
                27
            ],
            "id": 955991,
            "original_language": "en",
            "original_title": "The Offering",
            "overview": "In the wake of a young Jewish girl’s disappearance, the son of a Hasidic funeral director returns home with his pregnant wife in hopes of reconciling with his father. Little do they know that directly beneath them in the family morgue, an ancient evil with sinister plans for the unborn child lurks inside a mysterious corpse.",
            "popularity": 518.71,
            "poster_path": "/tbaTFgGIaTL1Uhd0SMob6Dhi5cK.jpg",
            "release_date": "2023-01-11",
            "title": "The Offering",
            "video": false,
            "vote_average": 5.2,
            "vote_count": 24
        },
        {
            "adult": false,
            "backdrop_path": "/qdFrqXYH6PtyAVlegub7bpoSgro.jpg",
            "genre_ids": [
                16,
                12,
                35,
                10751
            ],
            "id": 573171,
            "original_language": "es",
            "original_title": "Huevitos Congelados",
            "overview": "The rooster Toto has a new enemy: a pirate who plans to turn him into a cryogenically frozen rooster.",
            "popularity": 517.783,
            "poster_path": "/gBBCBMXKzWRADtliUYfV69aVIcz.jpg",
            "release_date": "2022-12-14",
            "title": "A Frozen Rooster",
            "video": false,
            "vote_average": 8.2,
            "vote_count": 204
        },
        {
            "adult": false,
            "backdrop_path": "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
            "genre_ids": [
                14,
                28,
                35,
                80
            ],
            "id": 1013860,
            "original_language": "en",
            "original_title": "R.I.P.D. 2: Rise of the Damned",
            "overview": "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
            "popularity": 486.235,
            "poster_path": "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
            "release_date": "2022-11-15",
            "title": "R.I.P.D. 2: Rise of the Damned",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 358
        }
    ],
    "total_pages": 36925,
    "total_results": 738484
}

const MovieList = () => {
    const [loading, setLoading] = useState(false);
    const [loadMore, setloadMore] = useState(true);

    const [PMovieDataList, setPMovieDataList] = useState([]);
    const [offset, setOffset] = useState(1);
    const [isListEnd, setIsListEnd] = useState(false);

    //call API
    useEffect(() => {
        resetPriviousData();
        getData();
    }, [])

    resetPriviousData = () => {
        setPMovieDataList([]);
        setOffset(1);
        setIsListEnd(false);
        setLoading(false);
    }

    const getData = () => {
        console.log("get data called", loading, isListEnd);
        if (!loading && !isListEnd && loadMore) {
            console.log('getData inside');
            setLoading(true);
            // console.log("UURL >>>>>", `https://api.themoviedb.org/3/movie/popular?api_key=243554b2e4d28a562d1a603d655270bd&language=en-US&page=${offset+1}`)
            // Service to get the data from the server to render
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=243554b2e4d28a562d1a603d655270bd&language=en-US&page=${offset}`)
                // Sending the currect offset with get request
                .then((response) => response.json())
                .then((responseJson) => {
                    // Successful response from the API Call
                    console.log(responseJson);
                    if (responseJson && responseJson?.results.length > 0) {
                        setOffset(offset + 1);//increase page count
                        setPMovieDataList([...PMovieDataList, ...responseJson.results]);
                        setLoading(false);
                        setloadMore(false)
                    } else {
                        setIsListEnd(true);
                        setLoading(false);
                        setloadMore(false)
                    }
                })
                .catch((error) => {
                    console.error("error >>>>>>>>>>>>>>>", error);
                });



            // setTimeout(() => {

            //     let responseJson = mockData;
            //     console.log("timeout called ", responseJson.length)
            //     if (responseJson && responseJson?.results.length > 0) {
            //         setOffset(offset + 1);//increase page count
            //         setPMovieDataList([...PMovieDataList, ...responseJson.results]);
            //         setLoading(false);
            //         setloadMore(false)
            //     } else {
            //         setIsListEnd(true);
            //         setLoading(false);
            //         setloadMore(false)
            //     }
            // }, 1000)

            // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=243554b2e4d28a562d1a603d655270bd&language=en-US&page=${offset}`)
            // // Sending the currect offset with get request
            // .then((response) => response.json())
            // .then((responseJson) => {
            //     // Successful response from the API Call
            //     console.log(responseJson);
            //     if (responseJson.length > 0) {
            //         setOffset(offset + 1);//increase page count
            //         setDataSource([...PMovieDataList, ...responseJson.results]);
            //         setLoading(false);
            //     } else {
            //         setIsListEnd(true);
            //         setLoading(false);
            //     }
            // })
            // .catch((error) => {
            //     console.error("error >>>>>>>>>>>>>>>", error);
            // });

        }
    };

    const renderFooter = () => {
        return (
            // Footer View with Loader
            <View style={styles.footer}>
                {loadMore ? (
                    <ActivityIndicator
                        color="#2f3363"
                        style={{ margin: 15 }}
                        size={20}
                    />
                ) : null}
            </View>
        );
    };

    // const getItem = (item) => {
    //     // Function for click on an item
    //     alert('Id : ' + item.id + ' Title : ' + item.title);
    // };

    const onLoadMoreData = () => {
        setloadMore(true);
    }

    useEffect(() => {
        if (loadMore) {
            getData()
        }
    }, [loadMore])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.subContainer}>
                <FlatList
                    style={movieStyle.flatlistContainer}
                    data={PMovieDataList}
                    renderItem={({ item }) => (
                        <PMovieList
                            item={item}
                        />
                    )}
                    numColumns={2}
                    onEndReached={onLoadMoreData}
                    onEndReachedThreshold={.5}
                    keyExtractor={item => item.id}
                    scrollsToTop={true}
                    ListFooterComponent={renderFooter}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    footer: {
        marginBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default MovieList;