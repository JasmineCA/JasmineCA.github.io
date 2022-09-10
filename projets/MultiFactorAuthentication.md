---
layout: projet
title: Authentification Multi-Facteurs
permalink: /projets/AuthMultiFacteurs/
tags: Projet de Groupe - C# - Cybersécurité
dateProjet: 11 octobre 2021 - 4 avril 2022
---

<div id="carouselExampleControls" class="carousel slide mb-3" data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="{{ site.baseurl}}/assets/images/projets/MultiFactorsAuthentication/multiFactorsAuth2.png" class="d-block w-100 img-thumbnail" alt="...">
    </div>
    <div class="carousel-item" data-interval ="27000">
      <img src="{{ site.baseurl}}/assets/images/projets/MultiFactorsAuthentication/multiFactorsAuth1.png" class="d-block w-100 img-thumbnail" alt="...">
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

Une authentification multifacteurs permet d'authentifier une personne en utilisant plusieurs facteurs. L'exemple de la vie courante est celui de l'authentification à deux facteurs: on utilise un mot de passe pour se connecter à un service, et un code (ou une confirmation) envoyé sur notre téléphone. Par la multiplication des facteurs, on renforce la certitude que l'on a sur la personne s'authentifiant sur le service.

Le projet réalisé est une démonstration d'une authentification multifacteurs avec trois facteurs :

- Une donnée biométrique (l'empreinte digitale)
- Un QR-Code (contenant des informations sur l'utilisateur)
- Un mot de passe, utilisé pour chiffrer les données du QR-Code

Le projet réalise l'enrôlement d'un utilisateur, par la capture d'une empreinte digitale et la génération d'un QR-Code. De plus, il est possible d'effectuer une authentification. Pour cela, il faut fournir le QR-Code (scanné grâce à une caméra), rentrer son mot de passe et fournir son empreinte.

Ce projet a également un autre objectif. Il doit tourner sur une borne à écran tactile, destinée à être utilisée lors d'événements de vulgarisation scientifique. Dès lors, les aspects de sécurité habituellement cachés sont montrés au grand public, afin de donner des explications sur le déroulement d'une telle méthode d'authentification. 

Durant ce projet, j'ai été principalement en charge de la gestion de l'empreinte digitale. Grâce à une librairie compatible C#, je pouvais communiquer avec mon capteur, pour commencer une capture, récupérer et traiter les données. J'ai également dessiné les minutie sur l'image de l'empreinte. 

J'ai pris en charge la partie "Information additionnelle", destinée au grand public. J'ai rajouté les différentes étapes de l'enrôlement et de l'authentification, par exemple en affichant les données du QR-Code (chiffrées et non chiffrées) ou en affichant la raison de l'échec de l'authentification. Au-delà de l'aspect technique, cette partie a nécessité une réflexion sur les données à inclure et comment les présenter.

En plus du travail technique, j'ai été responsable de l'organisation des réunions avec le tuteur de notre projet, des séances de travail avec la borne à écran tactile, mais aussi de la rédaction de comptes rendus de réunion.

 *En raison de problème de confidentialité et de droits d'auteur, aucun extrait du code source ne sera publié*
