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
  </ol>
  <div class="carousel-inner"> 1min21
    <div class="carousel-item active">
        <img src="{{ site.baseurl}}/assets/images/projets/CoreWar/corewar1.png" class="d-block w-100 img-thumbnail" alt="...">
    </div>
    <div class="carousel-item" data-interval="69000">
      <img src="{{ site.baseurl}}/assets/images/projets/CoreWar/corewar2.gif" class="d-block w-100 img-thumbnail" alt="...">
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

Nous avons également développé de nous même une partie "parser", pour analyser les fichiers textes contenant du RedCode, qui fait office de compilateur, pour avertir en cas de mauvaise syntaxe.

La deuxième partie de l'énoncé a commencé par la formalisation d'un programme RedCode. Nous avons défini une classe spécifique pour relier instructions et scores de manière très simple, et logique. Ensuite, après une période de recherche, nous avons décidé de développer un algorithme génétique en partant d'une population aléatoire, car cette stratégie est souvent utilisée dans les "evolvers", les programmes permettant de générer des "guerriers" Redcode performants.

Toujours en prenant parti de notre langage de programmation, nous avons séparé les différentes étapes d'un algorithme génétique:

* La partie "Combat": comment les programmes doivent s'affronter

* La partie "Sélection": comment sélectionner les programmes qui ont le mieux réussi la partie "Combat"

* La partie "Évolution": comment faire évoluer les programmes, notamment les faire muter et les croiser pour en obtenir des nouveaux

Chaque partie est représentée par une interface Java, et n'importe qui peut implémenter une ou des classes concrètes pour chacune de ces interfaces. Par manque de temps, nous n'avons fait que le strict minimum en terme d'implémentation concrète, car l'intérêt était de générer des programmes puis d'analyser les résultats obtenus.

L'analyse des programmes obtenus fait ressortir les choix implicites que nous avons fait pour déterminer un gagnant lors des combats. Au bout d'un certain nombre de cycles, pour éviter que le combat soit infini, nous déterminons le gagnant en fonction des cases possédées par chaque guerrier. Un guerrier possède une case si l'instruction dans la case provient de son programme original, ou si elle provient d'une action de son programme (un déplacement d'instruction par exemple). L'algorithme génétique se portait donc sur la longueur des programmes originaux, et la capacité à ne pas s'éliminer soit même (en faisant une action invalide), pour gagner.

Ce projet m'a fait beaucoup gagné en expérience, notamment sur les décisions à prendre lors d'un projet, pour choisir une direction, la période de documentation et de recherche indispensable avant de se lancer, mais également innover pour utiliser au maximum les outils que j'avais à disposition. Beaucoup d'implémentation du CoreWar ont été réalisé en langage C, mais j'ai eu l'idée de représenter les instructions comme des classes au lieu de simples fonctions, ce qui permettait de profiter des avantages de Java. Cela demande une adaptation, une modélisation et donc une vision différente sur le sujet.

### Extraits de code

#### Représentation des instructions

{% highlight java %}
{% raw %}
public abstract class Instruction implements Cloneable{

    /**
     * Attribut statique Int2MF, pour "décoder" les modes d'adressages.
     */
    private static final HashMap<Integer, String> Int2MF=new HashMap<Integer, String>(){{

        put(0,"");
        put(1,"#");
        put(2,"@");

    }
    };
    protected Integer modifierA;

    protected Integer addressA;

    protected Integer modifierB;

    protected Integer addressB;

    protected Warrior lastAccessed;

    /**
     * Constructeur de copie
     * @param modifierA Le modifieur A
     * @param addressA Le champ A
     * @param modifierB Le modifieur B
     * @param addressB Le champ B
     * @param w Le dernier Warrior qui a accédé à cette instruction
     */
    public Instruction(Integer modifierA,Integer addressA,Integer modifierB,Integer addressB,Warrior w) {

        this.modifierA=modifierA;
        this.addressA=addressA;
        this.modifierB=modifierB;
        this.addressB=addressB;

        this.lastAccessed=w;


    }

    /**
     * Constructeur principal
     * @param field1 L'ArrayList qui code pour le premier champ
     * @param field2 L'ArrayList qui code pour le second champ
     */
    public Instruction(ArrayList<Integer> field1,ArrayList<Integer> field2){

        this(field1.get(0),field1.get(1),field2.get(0),field2.get(1),null);
    }

    /**
     * Méthode qui va permettre de convertir une adresse indirect en
     * une adresse relative.
     * @param destination L'adresse pointée par pointer
     * @param pointer Le pointeur à cet instant
     * @return La position du pointeur en prenant en compte l'adressage
     * indirect.
     */
    public int indirectToRelative(Instruction destination,int pointer){

        return Math.floorMod(pointer+destination.getAddressA(),VirtualMachine.TAILLE);

    }

    /**
     * Méthode permettant à l'instruction de s'exécuter. Dépends de l'instruction
     * @param pointer Le pointeur qui définit à quelle adresse nous sommes dans la mémoire
     * @param memory La machine virtuelle sur laquelle agir.
     * @param w Le Warrior qui exécute cette instruction
     * @return La nouvelle position du pointeur, selon l'instruction effectuée ou -1 en cas de pointeur mort.
     */
    public abstract int execution(int pointer, VirtualMachine memory,Warrior w);

    /**
     * Méthode permettant à une instruction de vérifier qu'elle est valide, c'est à dire que les modifieurs sont 
     bons et en adéquation avec le comportement de l'instruction et son fonctionnement.
     Normalement elle pourrait être statique, car elle ne nécessite pas qu'une instance soit créé pour 
     vérifier cela, mais comme cette méthode est spécifique à chaque instruction, on doit obligatoirement 
     la garder abstraite.
     * @throws BadInstructionException Si l'instruction n'est pas exécutable
     */
    public abstract void isValidConfig() throws BadInstructionException;

    /**
     * Méthode qui permet de cloner une instruction, afin d'avoir deux instances différentes d'une instruction 
     comportant le même opérateur et les mêmes champs.
     * @return Une nouvelle instance de la classe Instruction possèdant les mêmes attributs
     */
    @Override
    public abstract Instruction clone();

}
{% endraw %}
{% endhighlight %}

Voici une version simplifiée de la classe abstraite `Instruction`. Nos choix de programmation sont visibles dès les premières lignes, notamment sur la représentation des modes d'adressage. Avec du recul, le type `char` aurait été plus approprié pour sa taille en mémoire, plus petite que le type `Integer`, et pour la compréhension du code. Nous avons représenté ici une instruction quelconque, avec ses modifieurs de champs (pour l'adressage) et les valeurs des adresses. On garde également la trace du dernier `Warrior` ayant accédé à l'instruction.

La classe possède deux constructeurs:

* Un constructeur à base d'`ArrayList`, une liste pour chaque champ. C'est le constructeur utilisé par les classes concrètes, via l'appel à `super()`
* Un constructeur avec tout les champs, utilisé lorsque l'on copie une instruction. Cela permet d'éviter de construire des `ArrayList`. Cette spécificité sera expliqué dans un second temps.

Nous avons des méthodes concrètes dans la classe abstraite, qui sont utilisables de la même manière quelque soit le type d'instruction (par exemple les calculs). C'est le cas de la méthode `indirectToRelative`.

Enfin, nous avons trois méthodes abstraites pour définir une instruction. La méthode `execution` définit comment l'instruction modifie la mémoire lorsque la machine l'exécute. Elle possède une référence à la machine, la valeur du pointeur d'instruction, mais également le Warrior qui exécute l'instruction. La méthode retourne l'état du pointeur:

* Sa nouvelle valeur (grâce à une incrémentation ou à un saut)
* -1 si le programme est déclaré mort

La méthode `isValidConfig` permet de vérifier si une instruction sera exécutable lorsqu'elle est créée. C'est à dire si les opérations sont possibles. Par exemple, il n'est pas possible de sauter à une adresse spécifiée en adressage direct. Dans le CoreWar, si l'instruction n'est pas exécutable, le programme meurt automatiquement. Néanmoins, nous avons choisi de faire office de compilateur de RedCode, en signifiant une instruction invalide avant l'exécution. C'est le rôle du `throw`. Nous avons implémenté nos propres classes d'exception afin de permettre un compilateur primitif lors du décodage d'un programme.

Enfin, la classe `Instruction` est `Cloneable`, donc les classes concrètes doivent signifier comment elles doivent se cloner. Le principal problème étant que les classes concrètes doivent garder leur type concret, et ne pas devenir simplement `Instruction`. C'est pour cette raison que cette méthode est implémentée pour chaque classe concrète. Avec un peu plus d'expérience en Java, nous aurions pu faire autrement.

Cette classe montre la complexité que représente une instruction, mais également le travail d'abstraction réalisé pour simplifier le développement et l'évolution de notre code. Nous aurions pu coder chaque fonctionnement d'instruction dans la classe `Instruction` directement avec des méthodes, mais le code aurait été difficile à faire évoluer pour rajouter de nouvelles instructions.

#### Faire évoluer les Warriors en une seule ligne

{% highlight java %}
public interface Evolution {

    void mutWarriors(List<Warrior> population,int bound);

}
{% endhighlight %}

Toute la partie "Génération de programmes performants" se base sur des interfaces, à implémenter pour créer un algorithme génétique personnalisé.

Voici le code complet de l'interface `Evolution` permettant de créer une nouvelle population de Warrior, ou de les faire muter. La seule méthode à implémenter est `mutWarriors`, prenant la population de Warriors en argument, et un paramètre supplémentaire utilisé pour des générations aléatoires. Il serait possible de mettre une liste en argument, pour passer plusieurs paramètres supplémentaires. Grâce à cette méthode, il est possible d'effectuer toute sorte de modification sur les Warriors, ou sur la population (ajout ou suppression). Le schéma est identique pour les autres interfaces.

La modularité du code est complète, en permettant ainsi de changer concrètement le comportement de l'algorithme, sans toutefois devoir réécrire complètement le déroulement de ce dernier.

<a class="btn btn-primary mybuttoncolorDead mybuttonstyle mx-auto">Voir sur GitHub (A venir)</a>

### Liens externes

[Premier Standard du CoreWar](http://corewar.co.uk/standards/cwg.txt)

[Comprendre le RedCode](http://vyznev.net/corewar/guide.html)

[Ressources supplémentaires pour le CoreWar](https://corewar.co.uk/indexx.htm)