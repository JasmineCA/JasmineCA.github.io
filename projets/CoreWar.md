---
layout: projet
title: CoreWar
permalink: /projets/CoreWar/
tags: Projet en groupe - Java - Algorithme génétique - R&D
dateProjet: Janvier 2019 - Avril 2019
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

Le CoreWar est un jeu consistant à écrire deux programmes dans un langage se rapprochant de l'assembleur (le RedCode) dans le but de les faire s'affronter dans une machine simplifiée, qui peut exécuter les instructions des programmes. Le gagnant est celui qui écrase le programme adverse et qui prends le contrôle de la mémoire de la machine.

L'énoncé de ce deuxième projet de licence est découpé en deux parties. Dans un premier temps, après un temps de documentation, nous devions implémenter notre version du RedCode et de la machine, nommée Mars, afin de pouvoir exécuter des programmes. Dans un second temps, il fallait réfléchir à un moyen de générer des programmes performants pour notre implémentation.

Le CoreWar est devenu assez populaire pour que des standards du RedCode soient publiés. Nous nous sommes basés sur le standard de 1984, le premier. Ce choix nous a permis de disposer rapidement d'une machine fonctionnelle. Profitant de l'utilisation d'un langage de programmation orienté objet puissant, nous avons pris le parti d'utiliser l'héritage et les classes abstraites afin de représenter les instructions. L'ajout de nouvelles instructions devient ainsi plus aisée. La machine d'exécution est assez classique dans son implémentation.

La deuxième partie de l'énoncé a commencé par la formalisation d'un programme RedCode. Nous avons défini une classe spécifique pour relier instructions et scores de manière très simple, et logique. Ensuite, après une période de recherche, nous avons décidé de développer un algorithme génétique en partant d'une population aléatoire, car cette stratégie est souvent utilisée dans les "evolvers", les programmes permettant de générer des "guerriers" Redcode performants.

Toujours en prenant parti de notre langage de programmation, nous avons séparé les différentes étapes d'un algorithme génétique:

* La partie "Combat": comment les programmes doivent s'affronter

* La partie "Sélection": comment sélectionner les programmes qui ont le mieux réussi la partie "Combat"

* La partie "Évolution": comment faire évoluer les programmes, notamment les faire muter et les croiser pour en obtenir des nouveaux

Chaque partie est représentée par une interface Java, et n'importe qui peut implémenter une ou des classes concrètes pour chacune de ces interfaces. Par manque de temps, nous n'avons fait que le strict minimum en terme d'implémentation concrète, car l'intérêt était de générer des programmes puis d'analyser les résultats obtenus.

L'analyse des programmes obtenus fait ressortir les choix implicites que nous avons fait pour déterminer un gagnant lors des combats. Au bout d'un certain nombre de cycles, pour éviter que le combat soit infini, nous déterminons le gagnant en fonction des cases possédées par chaque guerrier. Un guerrier possède une case si l'instruction dans la case provient de son programme original, ou si elle provient d'une action de son programme (un déplacement d'instruction par exemple). L'algorithme génétique se portait donc sur la longueur des programmes originaux, et la capacité à ne pas s'éliminer soit même (en faisant une action invalide), pour gagner.

Ce projet m'a fait beaucoup gagné en expérience, notamment sur les décisions à prendre lors d'un projet, pour choisir une direction, la période de documentation et de recherche indispensable avant de se lancer, mais également innover pour utiliser au maximum les outils que j'avais à disposition. Beaucoup d'implémentation du CoreWar ont été réalisé en langage C, mais j'ai eu l'idée de représenter les instructions comme des classes au lieu de simples fonctions, ce qui permettait de profiter des avantages de Java. Cela demande une adaptation, une modélisation et donc une vision différente sur le sujet.
