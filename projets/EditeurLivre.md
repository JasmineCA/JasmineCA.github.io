---
layout: projet
title: Editeur de Livre dont vous êtres le héros
permalink: /projets/EditeurLivre/
tags: Projet en groupe - Python3 - Premier projet
dateProjet: Janvier 2017-Mai 2017
---


L'éditeur de Livre dont vous êtes le héros est le premier projet qui nous a été demandé de mener durant notre première année de licence. La seule connaissance que nous avions de la programmation était le langage Python, langage du projet. Ce projet nous aura permis de découvrir la conception de logiciel, le système de version (SVN, puis Git), la programmation objet (très sommairement) et de mettre en pratique nos acquis. 

Le but du logiciel était de permettre la création d'un "livre dont vous êtes le héros": des livres dont l'histoire et la fin changent en fonction des choix du lecteur. Dans un second temps, un lecteur de livre devait être développé pour permettre de lire le livre.

### Description du projet

La conception principale s'est focalisée sur la représentation d'un livre, ramenée à son histoire. Puis ensuite, nous avons découpé l'histoire en paragraphes, choix et liens. Un paragraphe est tout naturellement une partie de l'histoire, le texte. Il peut constituer un début d'histoire, un milieu (position quelconque) ou encore mettre un terme à l'histoire, de manière positive ou négative. Un choix est un texte avec une fonction, qui indique l'action que nous allons effectuer, par exemple "Rentrer dans la maison" ou "Continuer son chemin". Enfin, un lien permet de lier un choix au paragraphe qui suit. C'est l'équivalent de "Allez à la page xx" sur un support papier. Par la suite, nous avons listé les fonctionnalités principales pour chaque objet, appliquant sans le savoir le concept CRUD: create, read, update, delete.

Pour l'interface graphique, nous avions le choix entre la bibliothèque *Tkinter* ou *PyGame*. Avec peu de temps pour choisir entre l'un ou l'autre, nous avons choisi Tkinter car PyGame était orienté pour créer des jeux, et Tkinter paraissait plus général. Toute la manipulation du logiciel se fait à partir de l'interface graphique, avec notamment le choix assez audacieux de représenter notre livre sous forme de graphe visuel. C'est ce qui a fixé la limite de création de paragraphes, car au début du projet, créer une fenêtre "illimitée" avec des glissières pour naviguer, c'était assez compliqué.

Le choix des structures de données a été mal réalisé, faute de connaissances. Nous n'avions le choix qu'entre les listes et les dictionnaires, pour "ranger" nos objets, alors qu'au vu de notre utilisation, les set auraient été très adaptés. Cette différence vient du fait que nous n'avons jamais utilisé l'indice d'une liste pour retrouver un objet, l'ordre avait peu d'importance. 

Pour sauvegarder notre livre en dehors du logiciel, nous avons utilisé la bibliothèque *Pickles*. Elle permet de sauvegarder de façon binaire les objets python, puis de les réinstancier en lisant le fichier. La seule contrainte étant que la sauvegarde doit être réinjectée dans un objet de même classe que celle de la sauvegarde, en sachant que la classe est sauvegardée avec un chemin relatif. Il fallait faire attention au niveau de l'arborescence du projet, lors de la lecture de la sauvegarde. Avec un peu plus de connaissance, nous aurions pu utiliser des formats comme le JSON.

Le développement du mode lecture a été plus rapide. Nous avons essayé de reproduire un livre, avec le texte d'un coté, et les choix possibles de l'autre coté. Les algorithmes utilisés pour parcourir "l'histoire" sont peu recherchés. 

### Ce que le projet m'a apporté

Ce projet faisait office de découverte en quasiment tout. De la réflexion du logiciel à l'organisation du projet, nous avons dû trouver des solutions à des problèmes courants dans la gestion de projet logiciel, sans avoir été formé. Nous avons commis beaucoup d'erreurs, autant technique que d'organisation. 

Même si les cours m'ont formé à l'amélioration de la conception, des algorithmes utilisés, de l'abstraction, j'estime que ce sont les projets qui m'ont formé à la gestion de ces derniers. Si il ressort très peu d'aspects positifs du projet final, il restera pour moi en revanche, une expérience sur laquelle se sont basées toutes les autres. 