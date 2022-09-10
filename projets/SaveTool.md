---
layout: projet
title: Outil de sauvegarde de dossier par lecture
permalink: /projets/SaveTool/
tags: Projet Personnel - Rust
dateProjet: Mi Avril - Toujours en développement
---

<div>
  <img src="/assets/images/projets/SaveFolder/savefolder.gif" class="img-fluid img-thumbnail mb-3"/>
</div>

Affectionnant particulièrement tester des systèmes d'exploitation divers et variés, j'ai une certaine collection de fichiers iso, rangés selon une architecture précise pour facilement retrouver l'iso dont j'ai besoin. Néanmoins, chaque fichier iso pouvant peser environ 1Go, faire une sauvegarde de ce dossier risquerait de peser très lourd, alors que ces fichiers sont simplement re-téléchargeable. Je n'ai besoin que de connaître la *liste* et *l'organisation* du dossier.

Cet outil utilisable en ligne de commande a été conçu pour cet usage, enregistrant simplement dans un fichier texte l'architecture du dossier courant dans lequel il est exécuté. Pour en faire un usage avancé et palier au moindre risque d'erreur éventuel (car cet outil simule tout de même une sauvegarde), j'ai utilisé un système de Log au sein du programme pour être au courant de la moindre difficulté rencontrée durant l'opération.

Mon apprentissage du Rust étant très récent, j'en ai profité pour utiliser ce langage et mettre en pratique mes connaissances dans une application rapide et simple.

<a class="btn btn-primary mybuttoncolorDead mybuttonstyle mx-auto">Voir sur GitHub (A venir)</a>
