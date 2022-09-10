---
layout: projet
title: Mise à jour d'une playlist youtube avec une liste de chaînes
permalink: /projets/youtubeUpdatePlaylist
tags: Projet Personnel - Python - API Google - Application mobile
dateProjet: Avril 2022 - Toujours en développement
---

<div>
    <img src="/assets/images/projets/YoutubeUpdatePlaylist/youtubeUpdatePlaylist1.png" class="img-fluid img-thumbnail mb-3" />
</div>

J'ai le problème de suivre beaucoup de chaînes youtube (et de m'intéresser à beaucoup de sujets), mais de ne pas avoir le temps de regarder toutes les vidéos qui sortent chaque jour. Alors je les ajoute à une playlist. Mais le faire manuellement tous les jours peut être fastidieux.  

A la place, je me suis intéressée à l'API Google, en particulier celle de youtube, afin d'automatiser cette opération.  

- Pour chaque chaîne, je récupère l'ID de la dernière vidéo *enregistrée dans la playlist*
- Pour chaque chaîne, je construis la liste des vidéos à ajouter à la playlist. Ce sont les nouvelles vidéos sorties qui ne sont pas encore enregistrées.
- Je trie les vidéos récupérées par ordre de sortie.
- J'insère les vidéos dans ma playlist, dans le bon ordre

Les chaînes que je suis sont contenues dans un fichier. Je peux aisément en retirer ou en ajouter une, selon mes préférences. Il me suffit ensuite de regarder la playlist sans me poser de question. 

Il n'y a pas de tri sur les vidéos car il est moins coûteux pour moi de simplement supprimer la vidéo de la playlist si elle ne m'intéresse pas, plutôt que de créer des règles.  

Pour le moment, ce script est fonctionnel, mais avec encore des éléments à améliorer.

- L'authentification à Google, afin d'autoriser mon script à modifier la playlist de ma chaîne youtube
- La vitesse de traitement, liée au fait que les playlists sont récupérées à partir de leur début et non à partir de leur fin.

Cette liste d'amélioration n'est pas exhaustive. Elle s'adapte à mon besoin, au fur et à mesure de l'évolution du projet.

Ce script a été rédigé en Python, néanmoins dans la suite de ce projet, je souhaiterai pouvoir en faire une application mobile, afin de consulter l'état de ma playlist et de la mettre à jour rapidement et simplement.  

<a class="btn btn-primary mybuttoncolorDead mybuttonstyle mx-auto">Voir sur GitHub (Non public)</a>
