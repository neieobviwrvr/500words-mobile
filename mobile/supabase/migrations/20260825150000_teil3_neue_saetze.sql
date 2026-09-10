-- Neue chinesisch_phrasebook-Saetze fuer 30 Woerter ohne jede
-- Situations-Aufgabe (2026-08-25, Teil 3 der Graduierungs-Leiter, siehe
-- CLAUDE.md/Plan). Deckt genau die Woerter, die weder als 'required'-Konzept
-- in einem bestehenden Phrasebook-Satz stehen noch als Slot-Wort in einem
-- Kurs-Satzrahmen vorkommen. Bewusst NICHT dabei: 17 reine Grammatik-/
-- Pronomen-Woerter (我,他,她,是,这,的,吗,个,了,在,比,更,因为,所以,正在,吧,得-
-- die sind FEST TEIL der Kurs-Rahmentexte selbst, nie ein Slot-Wort, und
-- kommen deshalb ueber diesen Mechanismus nicht rein) und 安娜 (explizit als
-- Namens-BEISPIEL im Wortschatz vermerkt, keine echte Vokabel zum Abfragen).

select setval('chinesisch_phrasebook_id_seq', (select max(id) from chinesisch_phrasebook));

insert into chinesisch_phrasebook (target_text, pinyin, german, category, scenario, accepted_concepts, difficulty, lookup_only) values
  ('请叫警察！', 'qǐng jiào jǐngchá!', 'Bitte rufen Sie die Polizei!', 'health_emergency', 'health_notfall', '{"required": [{"concept": "polizei", "synonyms": ["警察"]}], "optional": []}'::jsonb, 'A1', false),
  ('我要报警。', 'wǒ yào bàojǐng.', 'Ich möchte die Polizei rufen.', 'health_emergency', 'health_notfall', '{"required": [{"concept": "polizei_rufen", "synonyms": ["报警"]}], "optional": []}'::jsonb, 'A1', false),
  ('你们是学生吗？', 'nǐmen shì xuésheng ma?', 'Seid ihr Studenten?', 'grundwortschatz', 'vorstellung', '{"required": [{"concept": "ihr", "synonyms": ["你们"]}], "optional": []}'::jsonb, 'A1', false),
  ('你有男女朋友吗？', 'nǐ yǒu nánnǚpéngyou ma?', 'Hast du einen festen Freund oder eine feste Freundin?', 'dating_romance', 'dating_klaeren', '{"required": [{"concept": "fester_partner", "synonyms": ["男女朋友"]}], "optional": []}'::jsonb, 'A1', false),
  ('书放在桌子上。', 'shū fàng zài zhuōzi shàng.', 'Das Buch liegt auf dem Tisch.', 'moving_settling', 'wohnen_alltag', '{"required": [{"concept": "hinlegen", "synonyms": ["放"]}], "optional": []}'::jsonb, 'A1', false),
  ('你喝咖啡或者茶？', 'nǐ hē kāfēi huòzhě chá?', 'Trinkst du Kaffee oder Tee?', 'drinking_dining', 'essen_getraenke', '{"required": [{"concept": "oder", "synonyms": ["或者"]}], "optional": []}'::jsonb, 'A1', false),
  ('柏林很漂亮。', 'Bólín hěn piàoliang.', 'Berlin ist sehr schön.', 'culture_immersion', 'kultur_freizeit', '{"required": [{"concept": "berlin", "synonyms": ["柏林"]}], "optional": []}'::jsonb, 'A1', false),
  ('我们踢足球。', 'wǒmen tī zúqiú.', 'Wir spielen Fußball.', 'culture_immersion', 'kultur_freizeit', '{"required": [{"concept": "kicken", "synonyms": ["踢"]}], "optional": []}'::jsonb, 'A1', false),
  ('这个饭馆很好。', 'zhè ge fànguǎn hěn hǎo.', 'Dieses Restaurant ist sehr gut.', 'drinking_dining', 'essen_geschmack', '{"required": [{"concept": "restaurant", "synonyms": ["饭馆"]}], "optional": []}'::jsonb, 'A1', false),
  ('这个不算贵。', 'zhè ge bú suàn guì.', 'Das gilt nicht als teuer.', 'shopping_haggling', 'shop_handeln', '{"required": [{"concept": "gelten_als", "synonyms": ["算"]}], "optional": []}'::jsonb, 'A1', false),
  ('房间很干净。', 'fángjiān hěn gānjìng.', 'Das Zimmer ist sehr sauber.', 'hotel_accommodation', 'hotel_zimmer', '{"required": [{"concept": "sauber", "synonyms": ["干净"]}], "optional": []}'::jsonb, 'A1', false),
  ('我只有一个。', 'wǒ zhǐ yǒu yí ge.', 'Ich habe nur eins.', 'grundwortschatz', 'zahlen', '{"required": [{"concept": "nur", "synonyms": ["只"]}], "optional": []}'::jsonb, 'A1', false),
  ('我要一张票。', 'wǒ yào yì zhāng piào.', 'Ich möchte ein Ticket.', 'travel_transportation', 'reise_ticket', '{"required": [{"concept": "zaehlwort_flach", "synonyms": ["张"]}], "optional": []}'::jsonb, 'A1', false),
  ('公交车站在哪里？', 'gōngjiāochēzhàn zài nǎli?', 'Wo ist die Bushaltestelle?', 'travel_transportation', 'reise_bus', '{"required": [{"concept": "bushaltestelle", "synonyms": ["公交车站"]}], "optional": []}'::jsonb, 'A1', false),
  ('这个我可以办。', 'zhè ge wǒ kěyǐ bàn.', 'Das kann ich erledigen.', 'moving_settling', 'wohnen_behoerden', '{"required": [{"concept": "erledigen", "synonyms": ["办"]}], "optional": []}'::jsonb, 'A1', false),
  ('我们赶上了公共汽车。', 'wǒmen gǎnshàng le gōnggòngqìchē.', 'Wir haben den Bus erwischt.', 'travel_transportation', 'reise_bus', '{"required": [{"concept": "erwischen", "synonyms": ["赶上"]}], "optional": []}'::jsonb, 'A1', false),
  ('请问，洗手间在哪里？', 'qǐngwèn, xǐshǒujiān zài nǎli?', 'Entschuldigung, wo ist die Toilette?', 'grundwortschatz', 'notlage', '{"required": [{"concept": "hoefliche_frage", "synonyms": ["请问"]}], "optional": []}'::jsonb, 'A1', false),
  ('在路口等我。', 'zài lùkǒu děng wǒ.', 'Warte an der Kreuzung auf mich.', 'travel_transportation', 'reise_probleme', '{"required": [{"concept": "kreuzung", "synonyms": ["路口"]}], "optional": []}'::jsonb, 'A1', false),
  ('教堂在哪里？', 'jiàotáng zài nǎli?', 'Wo ist die Kirche?', 'culture_immersion', 'kultur_freizeit', '{"required": [{"concept": "kirche", "synonyms": ["教堂"]}], "optional": []}'::jsonb, 'A1', false),
  ('我教汉语。', 'wǒ jiāo Hànyǔ.', 'Ich unterrichte Chinesisch.', 'university_studying', 'uni_kurswahl', '{"required": [{"concept": "unterrichten", "synonyms": ["教"]}], "optional": []}'::jsonb, 'A1', false),
  ('我有三本书。', 'wǒ yǒu sān běn shū.', 'Ich habe drei Bücher.', 'university_studying', 'uni_bibliothek', '{"required": [{"concept": "zaehlwort_buch", "synonyms": ["本"]}], "optional": []}'::jsonb, 'A1', false),
  ('你们要去哪里？', 'nǐmen yào qù nǎli?', 'Wo wollt ihr hin?', 'travel_transportation', 'reise_plaene', '{"required": [{"concept": "ihr", "synonyms": ["你们"]}, {"concept": "pluralpartikel", "synonyms": ["们"]}], "optional": []}'::jsonb, 'A1', false),
  ('我们待五分钟。', 'wǒmen dāi wǔ fēnzhōng.', 'Wir bleiben fünf Minuten.', 'grundwortschatz', 'uhrzeit', '{"required": [{"concept": "bleiben", "synonyms": ["待"]}], "optional": []}'::jsonb, 'A1', false),
  ('请再说一遍。', 'qǐng zài shuō yí biàn.', 'Bitte sag es noch einmal.', 'grundwortschatz', 'verstaendigen', '{"required": [{"concept": "nochmal", "synonyms": ["遍"]}], "optional": []}'::jsonb, 'A1', false),
  ('我用手机支付。', 'wǒ yòng shǒujī zhīfù.', 'Ich bezahle mit dem Handy.', 'moving_settling', 'wohnen_bezahlapp', '{"required": [{"concept": "bezahlen", "synonyms": ["支付"]}], "optional": []}'::jsonb, 'A1', false),
  ('我们在谈恋爱。', 'wǒmen zài tán liàn''ài.', 'Wir sind gerade zusammen.', 'dating_romance', 'dating_klaeren', '{"required": [{"concept": "daten", "synonyms": ["谈恋爱"]}], "optional": []}'::jsonb, 'A1', false),
  ('你的发型很漂亮。', 'nǐ de fàxíng hěn piàoliang.', 'Deine Frisur ist sehr schön.', 'club_nightlife', 'club_komplimente', '{"required": [{"concept": "frisur", "synonyms": ["发型"]}], "optional": []}'::jsonb, 'A1', false),
  ('他跳了。', 'tā tiào le.', 'Er ist gesprungen.', 'culture_immersion', 'kultur_freizeit', '{"required": [{"concept": "springen", "synonyms": ["跳"]}], "optional": []}'::jsonb, 'A1', false),
  ('我要退房。', 'wǒ yào tuìfáng.', 'Ich möchte auschecken.', 'hotel_accommodation', 'hotel_abreise', '{"required": [{"concept": "auschecken", "synonyms": ["退房"]}], "optional": []}'::jsonb, 'A1', false),
  ('这里很方便。', 'zhèlǐ hěn fāngbiàn.', 'Hier ist es sehr praktisch.', 'moving_settling', 'wohnen_alltag', '{"required": [{"concept": "praktisch", "synonyms": ["方便"]}], "optional": []}'::jsonb, 'A1', false);
