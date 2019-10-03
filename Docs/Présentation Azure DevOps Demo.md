# Plan de match pour la présentation d'Azure DevOps

## Note

Utiliser le Windows terminal pour faire les tests!!!

## Azure DevOps sample demo

Il est maintenant possible de générer un projet exemple dans votre instance d'Azure DevOps pour expérimenter le produit, voici le [lien](https://azuredevopsdemogenerator.azurewebsites.net/). Cette annonce a été retweetée par Donovan Brown <https://twitter.com/stevenborg/status/1177289255699148800>.

## Tableau de bord

Présenter le tableau et parler de la possibilité d'utiliser un wiki.

## Éléments de travail

Il existe différents types d'éléments de travail, par exemple :

- Bug
- Feature
- Task
- Autres

## Sprints

## Carnet de produit

## Compilation

Aller dans le menu de gauche sous "Pipelines" -> "Builds"

Une compilation pour l'intégration continue se termine souvent par *_CI pour désigner continuous integration.

Une compilation peut être segmentée en plusieurs étapes simples. Par exemple, restaurer les paquets nuggets, exécuter les essais unitaires, compiler le code et pour finir prendre le code compiler et le rendre disponible sur le serveur distant comme artefact.

## Requête de tirage

Aller dans menu de gauche sous "Repos" -> "Pull requests"

Définition : Processus dans lequel le code est validé par les pairs, testé automatiquement et implique d'autres automatisations telles que un contrôle qualité, couverture de code, etc...

Workflow : on crée une branche pour effectuer notre changement, par la suite on propose une requête de tirage vers le tronc commun qui est habituellement master et lorsque toutes les règles sont respectées la modification est rapprochée dans le tronc commun.

Conclusion : Les changements doivent être granulaires et corriger une seule chose pour facilement identifier les changements dans le code.

Suite à une requête de tirage, l'historique de la branche master se veut d'être comme des titres d'un journal qui permet à une lecture rapide de comprendre ce qui se passe dans l'historique du code et ce sans avoir les détails d'implémentations.

### Règles sur la branche master

Aller dans menu de gauche sous "Repos" -> "Pull requests", vis-à-vis master, cliquer sur ".." pour plus d'options -> "Branch policies"

- Le nombre minimum de réviseur
- Préciser si l'auteur peut lui même autoriser son changement
- Réinitialiser les votes d'approbations lorsqu'il y a des changements dans la branche
- Associer à un élément de travail
- Obligatoire ou optionnel
- Assurer la résolution des commentaires
- Préciser le type de merge vers master
- Squash c'est pour prendre tous les commits dans la branche pour en faire un seul rendu dans master
- Spécifier la compilation à exécuter lors de l'assurance qualité (c'est une bonne pratique pour diverses raisons). Une des pratiques courantes du marché est de mettre _QA à la fin du nom de la compilation pour définir que c'est une compilation pour l'assurance qualité.
- Inclure automatiquement des réviseurs lors de la création d'une requête de tirage

### Compilation propre pour l'assurance qualité

Le but d'avoir une compilation propre pour l'assurance qualité est d'inclure des étapes qui sont propres à la revue de code au processus de revue de code. Par exemple, on pourrait ajouter un outil d'analyse de code comme SonarCube pour valider la qualité du code et refuser le changement si celui-ci est sous les standards de l'équipe. De plus, la publication des artefacts n'est pas nécessaire à cette étape. Prendre en note qu'il faudra entretenir les deux compilations et cela peut ajouter une taxe supplémentaire à gérer.

## Déploiement

Aller dans menu de gauche sous "Pipelines" -> "Releases"

Chaque "stage" peut contenir plusieurs étapes au même titre qu'une compilation.

### Définition d'un stage

Corresponds à un palier spécifique par exemple : développement et production.

### Variables

Permets la réutilisation des valeurs.

chaînes de textes sécurisées

Permets le stockage sensible de valeurs qu'on ne veut pas partager.

## Ménage des branches locales

git fetch -p ou git fetch --prune git branch -D branch_name

## Astuces

Lors de la création de la branche, essayer de suivre le format [numéro de l'élément de travail]_DescriptionDuChangement. Cette nomenclature facilite à éviter les conflits entre les branches de mêmes noms.

## Plan de match pour la démo avec le code

Voici les étapes à suivre pour la démo :

- Parler de la documentation ici haut
- Présenter l'application à tout le monde
- Créer un bogue qui devrait seulement avoir un seul "!" sur le bouton nouvelle partie
- M'affecter le bogue à mon nom
- Créer la branche à partir du bogue dans l'interface
- Montrer qu'il y a une nouvelle branche dans l'interface des branches
- Ramener la branche sur mon poste avec git fetch, git checkout branchName
- Faire la modification et commiter localement
- Pousser les modifications sur l'origine, git push origin branchName
- Faire une demande de pull request
- Faire une modification que finalement on veut 5 "!"
- Résoudre tous les commentaires
- Montrer le "set autocomplete"
- Laisser aller le build et pendant ce temps là, faire le ménage des branches sur mon poste lorsque le pull request est terminé avec git branch -D branch_name (étant sur master), mettre à jour la branche master avec git fetch suivi de git pull.
- Dans le release, monter le message dans le palier de dev et le principe d'autorisation dans le palier de production.
- Monter dans le palier de production la notion de variables secrètes.
- Monter dans Firebase la mise à jour avec le nom du release
- Montrer la nouvelle version de l'app en faisant ctrl+F5
