# Terminal UI

Bienvenue dans **Terminal UI** ! 🎉 Un ensemble de composants interactifs pour vos applications en ligne de commande, vous permettant de créer des interfaces utilisateur dynamiques et engageantes. Que vous construisiez une application simple ou un outil complexe, Terminal UI vous simplifie la tâche. 

## Table des matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Composants](#composants)
- [API](#api)
- [Contributeurs](#contributeurs)

## Installation

Pour commencer avec Terminal UI, il vous suffit d'installer le package :

```bash
npm i @brightkyefoo/terminal-ui
```

## Utilisation

Pour utiliser les composants de Terminal UI, vous pouvez simplement les importer dans votre projet comme suit :

```typescript
import { Menu, Checkbox, ToggleSwitch, Select, Notification, ProgressBar, Spinner, Form } from '@brightkyefoo/terminal-ui';
```

Ensuite, vous pouvez appeler ces composants dans votre logique d'application. Voici un exemple simple :

```typescript
const menu = new Menu('Main Menu', ['Option 1', 'Option 2']);
const selectedOption = await menu.display();
console.log(`Vous avez sélectionné : ${selectedOption}`);
```

## Composants

### 1. Menu

**Menu** est un composant qui affiche une liste d'options que l'utilisateur peut sélectionner.

**Paramètres :**
- `title` (string) : Le titre du menu.
- `options` (string[]) : Un tableau d'options à afficher.

### 2. Checkbox

**Checkbox** permet à l'utilisateur de sélectionner plusieurs options à l'aide de cases à cocher.

**Paramètres :**
- `options` (string[]) : Un tableau d'options à cocher.

### 3. ToggleSwitch

**ToggleSwitch** est un composant binaire qui permet à l'utilisateur de basculer entre deux états (ON/OFF).

**Paramètres :** Aucun.

### 4. Select

**Select** permet à l'utilisateur de choisir une option parmi une liste déroulante.

**Paramètres :**
- `options` (string[]) : Un tableau d'options à sélectionner.

### 5. Notification

**Notification** affiche un message d'information, d'avertissement ou d'erreur.

**Paramètres :**
- `message` (string) : Le message à afficher.
- `type` ('info' | 'warning' | 'error') : Le type de notification, qui détermine la couleur du texte.

### 6. ProgressBar

**ProgressBar** affiche une barre de progression pour indiquer l'avancement d'une tâche.

**Paramètres :**
- `total` (number) : La valeur totale de la progression.

### 7. Spinner

**Spinner** affiche un indicateur de chargement animé.

**Paramètres :**
- `message` (string) : Le message à afficher pendant le chargement.

### 8. Form

**Form** permet de recueillir des données utilisateur via des questions interactives.

**Paramètres :**
- `questions` (string[]) : Un tableau de questions à poser à l'utilisateur.

## API

Voici une explication détaillée des paramètres de chaque composant :

### Menu
```typescript
new Menu(title: string, options: string[]): Menu
```
- `title`: Le titre affiché en haut du menu.
- `options`: Les options disponibles à l'utilisateur.

### Checkbox
```typescript
new Checkbox(options: string[]): Checkbox
```
- `options`: Les options à cocher.

### ToggleSwitch
```typescript
new ToggleSwitch(): ToggleSwitch
```
- Aucun paramètre requis.

### Select
```typescript
new Select(options: string[]): Select
```
- `options`: Les options à choisir.

### Notification
```typescript
new Notification(message: string, type: 'info' | 'warning' | 'error'): Notification
```
- `message`: Le message à afficher.
- `type`: Le type de notification qui détermine la couleur et le style.

### ProgressBar
```typescript
new ProgressBar(total: number): ProgressBar
```
- `total`: La valeur totale à atteindre pour la progression.

### Spinner
```typescript
new Spinner(): Spinner
```
- Aucun paramètre requis.

### Form
```typescript
new Form(questions: string[]): Form
```
- `questions`: Les questions posées à l'utilisateur pour recueillir des réponses.

## Contributeurs

Nous aimons les contributions ! 💖 Si vous souhaitez améliorer Terminal UI, n'hésitez pas à forker le projet, à apporter des modifications et à soumettre une pull request. Chaque contribution est précieuse pour nous !

Merci d'avoir consulté Terminal UI. Amusez-vous bien à créer des interfaces utilisateurs incroyables en ligne de commande ! 🚀

[brightkyefoo](https://github.com/BrightkyEfoo)