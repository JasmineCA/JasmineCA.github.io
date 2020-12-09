---
layout: projet
title: Etude d'une machine de Turing
permalink: /projets/TuringMachine/
tags: Projet en groupe - C++ - Bash
dateProjet: 13 Janvier 2020 - 1 Mars 2020
---
<div id="carouselTuringMachine" class="carousel slide mb-3" data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselTuringMachine" data-slide-to="0" class="active"></li>
    <li data-target="#carouselTuringMachine" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="{{ site.baseurl}}/assets/images/projets/TuringMachine/SMARTTable.PNG" class="d-block w-100 img-thumbnail" alt="...">
    </div>
    <div class="carousel-item" data-interval="23000">
      <img src="{{ site.baseurl}}/assets/images/projets/TuringMachine/turingmachine.gif" class="d-block w-100 img-thumbnail" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselTuringMachine" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselTuringMachine" role="button" data-slide="next">
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

#### Extrait d'un script de test

{% highlight bash %}
touch $name;

input="";
for ((i=0;i<$lengthMax;i++))
do
  for ((c=0;c<=$i;c++))
  do
    input=$input$(($RANDOM%3));
  done
  echo "Input actuel: "$input;
  for ((j=0;j<4;j++))
  do
    parcours=$(../Turing -I -T 4 -E ${states[j]} $input 2>/dev/null |tr -d '\0'|awk -e 'BEGIN {printable=false;} /Exec/ {printable=!printable;next;} /(Inv$)/ {printable=!printable;print(":");next;}{if(printable) printf("%s ",$0);}');

    isInverse=$(echo $parcours|awk -e 'BEGIN { RS=":";taileNormal = 0;tailleInverse=0;} NR==1{for(i=1;i<=NF;i++){normal[i]=$i;} tailleNormal=NF;next;} NR==2{ for(i=1;i<=NF;i++){inverse[i]=$i;} tailleInverse=NF;next;} END { isInverse=1; if(tailleInverse<tailleNormal) isInverse=0;for(i=1;i<=tailleNormal;i++){if(normal[i]!=inverse[tailleNormal-(i-1)]) isInverse=0;} print isInverse;}');

    dynamic=();
    k=0;
    while read line
    do
      dynamic[$k]=$(echo $line | sed 's/://g');
      k=$(( $k+1 ));
    done <<< $parcours;
    if [[ $isInverse -eq 1 ]]; then
      isInverse="Oui";
    else
      isInverse="Non";
    fi
    echo "Input "$input" EtatD "${states[j]}" ParcoursNormal "${dynamic[0]}" ParcoursInverse "${dynamic[1]}" estInverse "$isInverse >> $name;
  done
  input="";
done
{% endhighlight %}

J'ai sélectionné un extrait du script permettant de mettre en évidence l'existence de la machine inverse de la SMART, et la symétrie de son parcours (l'ensemble des états atteints au cours du fonctionnement de la machine, étant représenté par l'état du ruban). Nous pouvons considérer que c'est un premier jet du script, c'est à dire sans optimisation.

 Après la création du fichier pour consigner nos résultats, le script va générer des entrées de taille croissante. `lengthMax` est une variable passée en paramètre au script afin de lui indiquer la longueur maximale de l'entrée testée. Ensuite, nous allons tester l'entrée 4 fois, à cause des 4 états de la SMART que nous pouvons choisir comme état initial.

 La variable `parcours` va exécuter notre programme, récupérer la sortie (qui comprendra notamment deux parcours: celui de l'exécution de la SMART, puis de son inverse) puis exécuter un script awk sur cette sortie afin d'obtenir les deux parcours sur une ligne, séparé par un `:`.

La variable `isInverse` va analyser les parcours obtenus avec un script awk, le but étant de savoir si le deuxième parcours est bien l'inverse du premier. Si le deuxième parcours est plus long, les étapes "en trop" sont ignorées. Il joue un rôle de booléen, en ne retournant que 1 ou 0.

Le script produit un fichier de log ressemblant à celui ci:

```
Input 1 EtatD q ParcoursNormal 1 0  ParcoursInverse 0 1  estInverse Oui
Input 20 EtatD b ParcoursNormal 20 20 22  ParcoursInverse 22 20 20 21  estInverse Oui
Input 20 EtatD d ParcoursNormal 20 20  ParcoursInverse 20 20  estInverse Oui
Input 20 EtatD p ParcoursNormal 20 00  ParcoursInverse 00 20  estInverse Oui
Input 20 EtatD q ParcoursNormal 20 00 02  ParcoursInverse 02 00 20 22 22 20  estInverse Oui
Input 122 EtatD b ParcoursNormal 122 122 102 002  ParcoursInverse 002 102 122 122 102 102 112 112 102 002 012 012 002 000  estInverse Oui
```

Si nous analysons la première ligne, nous pouvons constater que pour l'entrée `1` sur le ruban, lorsque la machine commence par l'état q, le ruban contient `1`, puis `0`, avant de s'arrêter. Lorsque la machine inverse s'enclenche, nous passons par les mêmes étapes.

Nous pouvons remarquer que la machine inverse parcourt souvent beaucoup plus d'étapes que la SMART. L'inverse de la SMART est dynamique, donc les états extrêmes de la machine (de départ et d'arrêt) ne sont pas représentatifs de son fonctionnement et de ses propriétés.


<a class="btn btn-primary mybuttoncolorDead mybuttonstyle mx-auto">Voir sur GitHub (A venir)</a>

### Liens externes

[La publication en question](https://hal.archives-ouvertes.fr/hal-00975244/document)

[Page de présentation de JFLAP](http://www.jflap.org/)

