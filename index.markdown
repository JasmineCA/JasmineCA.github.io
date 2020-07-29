---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

# Voici mon parcours de programmeur

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Mes études

<div class="timeline">
 <div class="container left">
   <div class="content">
    <h2>2017-2020</h2>
    <p><span class="degree">Licence Informatique</span><br>Option Sécurité des données et Théorie de l'information <br>Université de Caen</p>
   </div>
 </div>
 <div class="container right">
   <div class="content">
     <h2>2016-2017</h2>
     <p><span class="degree">Classe préparatoire MPSI</span> <br> Lycée Malherbe, Caen</p>
   </div>
 </div>
 <div class="container left">
   <div class="content">
     <h2>2016</h2>
     <p><span class="degree">Baccalauréat Scientifique Spécialité Maths</span> <br> Mention Très Bien <br> Lycée Charles de Gaulle, Caen</p>
   </div>
 </div>
</div>

## Mes Langages

<div id="LanguagesPanes"> <!-- Not responsive, go see css --> <!-- Add TutorialPoints snippets and remove hljs-->
</div>

<script src="{{ site.baseurl}}/assets/js/tabbed_pane.js"></script>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Mes Projets

<div class="row row-cols-1 row-cols-md-2" id="Projets">
<div class="col mb-4">
<div class="card h-100">
  <img src="{{ site.baseurl}}/assets/images/projets/Cryptopals/main.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Challenges de Cryptopals!</h5>
    <p class="card-text">Première approche de la cryptographie à travers des challenges guidés et abordables, menant à des attaques réalisables en pratique. Utilisation de l'outil Jupyter Notebook pour séparer le code et son exécution de manière logique.</p>
    <a href="{{ site.url }}/projets/Cryptopals/" class="btn btn-primary mybuttoncolor mybuttonstyle mx-auto stretched-link">En savoir plus</a>
  </div>
</div>
</div>
<div class="col mb-4">
<div class="card h-100">
  <img src="{{ site.baseurl}}/assets/images/placeholder-image.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Outil de sauvegarde d'un dossier par lecture</h5>
    <p class="card-text">Sauvegarder le nom de certains fichiers pour pouvoir les retrouver en cas de besoin? Sauvegarder l'architecture d'un dossier pour la recréer
    ultérieurement? Cet outil conçu en Rust répondra à ce besoin.</p>
    <a href="{{ site.url }}/projets/SaveTool/" class="btn btn-primary mybuttoncolor mybuttonstyle mx-auto stretched-link">En savoir plus</a>
  </div>
</div>
</div>
<div class="col mb-4">
<div class="card h-100">
  <img src="{{ site.baseurl}}/assets/images/projets/TuringMachine/SMARTTable.PNG" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Étude expérimentale d'une machine de Turing particulière</h5>
    <p class="card-text">A partir d'une publication de chercheur sur la machine de Turing SMART, nous avons tenté d'expérimenter ses propriétés théorique à partir d'une
    modélisation en C++ et de tests en script Bash.</p>
    <a href="{{ site.url }}/projets/TuringMachine/" class="btn btn-primary mybuttoncolor mybuttonstyle mx-auto stretched-link">En savoir plus</a>
  </div>
</div>
</div>
<div class="col mb-4">
<div class="card h-100">
  <img src="{{ site.baseurl}}/assets/images/placeholder-image.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Lancement du projet Symptomatic</h5>
    <p class="card-text">Dans le cadre d'un module sur la créativité logicielle, j'ai participé à la création et au développement fictif de Symptomatic, une application Android pour réguler le flux de patients aux urgences hospitalières.</p>
    <a href="{{ site.url }}/projets/Symptomatic" class="btn btn-primary mybuttoncolor mybuttonstyle mx-auto stretched-link">En savoir plus</a>
  </div>
</div>
</div>
<div class="col mb-4">
<div class="card h-100">
  <img src="{{ site.baseurl}}/assets/images/placeholder-image.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">CoreWar: Affrontement de programmes</h5>
    <p class="card-text">Modélisation en Java du jeu CoreWar, où deux programmes en Assembleur simplifié s'affrontent au sein d'une machine dotée d'une mémoire et d'un processeur. Dans le cadre de ce projet, une interface graphique simpliste ainsi qu'un algorithme générant des programmes performants ont également été développé.</p>
    <a href="#" class="btn btn-primary mybuttoncolor mybuttonstyle mx-auto">En savoir plus</a>
  </div>
</div>
</div>
<div class="col mb-4">
<div class="card h-100">
  <img src="{{ site.baseurl}}/assets/images/placeholder-image.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Créez vos "livres dont vous êtes le héros"!</h5>
    <p class="card-text">Création en Python3 d'un logiciel permettant de créer des "livres dont vous êtes le héros" avec un affichage sous forme de graphe du livre. Possibilité de lecture grâce à un second logiciel.</p>
    <a href="#" class="btn btn-primary mybuttoncolor mybuttonstyle mx-auto">En savoir plus</a>
  </div>
</div>
</div>
</div>
