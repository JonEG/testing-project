Site Package for the project "Sitepackage"
==============================================================

## Install extension on your project
Step 1 — Add VCS Repository to Project Composer
In your TYPO3 project root, open composer.json and add:

"repositories": [
  {
    "type": "vcs",
    "url": "https://github.com/JonEG/sitepackage.git"
  }
],
"require": {
  "jondevelops/sitepackage": "@dev"
}

Step 2 — Require the Package

composer require jondevelops/sitepackage:@dev

Step 3 — Activate in TYPO3 Backend
Go to Site Management > Sites -> Sets for this Site

Set your sitepackage in the "Site Package" dropdown

Step 4 - Edit TypoScript record "Introduction Package" on page "Congratulations"
on Advanced Options, uncheck Clear -> Contants and Setup.

Step 5 Clean cache.

## Build Vite files

cd packages/sitepackage/Resources/Private/vite-compiler/
nvm i
nvm use
npm install
npm run build
