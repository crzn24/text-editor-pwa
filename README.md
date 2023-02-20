# Text Editor PWA

## Description
This project was a challenge assigned to us where we had to build a text editor that runs in the browser but also meets the PWA (Progressive Web Application) criteria. This text editor features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.
We started with an existing application and starter code and implemented methods for getting and storing data to an IndexedDB database. I also installed a package called `idb`, which is a lightweight wrapper around the IndexedDB API, and features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

This week's challenge was difficult for me even with some starter code because the concepts of PWA's are still new to me and did not make complete sense when learning about them. I was able to decipher some areas and get the app to work but I ran into issues when storing text into the IndexedDB database. For that, I needed extra sets of eyes to point me in the right direction of what I should fix. I did find myself getting annoyed when I realized multiple times that even after restarting the server or running a new build, I had to clear out my browser's cache and make sure the service workers were not still running in order for my app to work.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```


## Usage

* [**Link to Repository**](https://github.com/crzn24/text-editor-pwa.git)
* [**Link to Deployed Application**](https://text-editor-pwa-crzn24.herokuapp.com/)

<!-- ![Screenshot of ](./assets/images/) -->


## Credits
N/A
<!-- * []() -->

## License