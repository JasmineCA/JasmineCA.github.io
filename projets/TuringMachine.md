---
layout: projet
title: Etude d'une machine de Turing
permalink: /projets/TuringMachine/
tags: Projet en groupe - C++ - Bash
dateProjet: 13 Janvier 2020 - 1 Mars 2020
---
<div id="carouselExampleControls" class="carousel slide mb-3" data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="{{ site.baseurl}}/assets/images/placeholder-image.png" class="d-block w-100 img-thumbnail" alt="...">
    </div>
    <div class="carousel-item">
      <img src="{{ site.baseurl}}/assets/images/placeholder-image2.png" class="d-block w-100 img-thumbnail" alt="...">
    </div>
    <div class="carousel-item">
      <img src="{{ site.baseurl}}/assets/images/placeholder-image3.png" class="d-block w-100 img-thumbnail" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

Dans le cadre de ma dernière année en licence Informatique, j'ai dû travailler en groupe sur l'étude d'une machine de Turing particulière: la SMART. La SMART, Small Minimal Aperiodic Reversible Turing Machine, a été réalisé par trois chercheurs: Julien Cassaigne, Nicolas Ollinger et Rodrigo Torres. Elle possède de nombreuses propriétés intéressantes, comme en témoigne son nom. Leur publication fait état de démonstration pour chacune de ses propriétés. Notre but était de mettre en évidence ces propriétés par l'expérience.

Dans un premier temps, nous avons pris connaissance de ce qu'était une machine de Turing, ses différentes représentations (en table, sous forme d'un graphique, en programmation) mais également prendre en main la SMART. Nous avons dû lire et analyser la publication afin de sélectionner les propriétés que nous voulions mettre en évidence au sein de notre projet, tout en restant dans le temps imparti. Nous avons également reproduit la SMART sur le logiciel JFLAP afin de tester des entrées, ainsi que constater son fonctionnement.

Cependant, JFLAP restait un outil beaucoup trop limité pour notre usage. Il n'était pas possible d'engager des expériences répétées de manière automatique par exemple, ou de paramétrer la sortie. Nous avons donc conçu notre propre implémentation de la SMART, avec plusieurs affichages graphiques en console adaptés à plusieurs usages. Nous avons choisi de développer en C++ car c'est un langage fortement répandu, ayant de multiples usages et de nombreux concepts, et nous n'avions jamais utilisé ce langage, raison de plus pour l'utiliser dans ce projet.

Notre implémentation comporte de nombreuses options d'affichage et d'exécution afin de s'adapter à une utilisation isolée d'un être humain (le déroulement progressif d'une entrée par la machine), mais également une exécution immédiate avec un affichage particulièrement réduit et balisé afin d'être analysé à des fins de test.

Nous nous sommes concentrés sur deux propriétés de la SMART: la multiplicité des étapes (qui permet de montrer de façon partielle une certaine apériodicité) ainsi que la symétrie de la SMART. Pour souligner ces propriétés, nous avons conçu des scripts en bash afin d'exécuter notre programme avec des paramètres particuliers (notamment d'affichage), puis d'analyser la sortie du programme avec divers outils (grep, awk). Il nous restait à interpréter les résultats de ces scripts. Malheureusement, certaines propriétés restaient impossible à prendre en main, soit par manque de connaissance, soit par impossibilité d'établir une expérience intéressante (cas de l'apériodicité).

Malgré un projet très court, nous avons réussi à répondre à l'énoncé du problème via des outils réutilisables, et nous avons acquis des compétences nouvelles. La lecture et l'interprétation d'une publication scientifique afin d'établir une utilité pratique au sujet de la publication me semble une compétence primordiale pour mon futur métier. De plus, la découverte du C++ m'encourage à aller un peu plus loin dans sa pratique, et de découvrir les nombreux concepts que nous n'avons pas dû tout abordé lors du développement du projet.

### Extraits de code
