# Chronograph Analog Watch with VanillaJS + HTML

This project demonstrates how to build a functional **chronograph analog watch** from scratch using **Vanilla JavaScript (JS)** and **HTML**. It simulates a real-time analog clock and chronograph (stopwatch) with start, stop, and reset functionality.
<img width="353" alt="image" src="https://github.com/user-attachments/assets/b417a4d0-c6b9-42d2-8dd2-f089b11be7c5">


## Introduction

This project walks through how to create a sleek and functional analog chronograph watch using only VanillaJS, HTML, and CSS. The goal of the project is to illustrate key front-end development concepts while building a visually pleasing and interactive timepiece.

Blog references:
- [Part 1](https://medium.com/@whoz_/lets-build-an-analog-chronograph-watch-with-vanillajs-html-pt-1-ef28ce9edf63)
- [Part 2](https://medium.com/@whoz_/lets-build-an-analog-chronograph-watch-with-vanillajs-html-pt-1-4db16d182983)

## Usage
- Start: Press the "Start" button to initiate the chronograph (stopwatch).
- Stop: Press the "Stop" button to pause the stopwatch.
- Reset: Press the "Reset" button to reset the stopwatch and chronograph to zero.

The main dial tracks time in real-time, while the sub-dials display the chronograph’s progress for both seconds and minutes.

## How It Works

The project leverages JavaScript for animating the hands of the analog clock and handling the chronograph’s start/stop/reset actions. Here’s an overview of the functionality:

- Real-time Clock: The setInterval function updates the hour, minute, and second hands every second, aligning them with the current time.
- Chronograph (Stopwatch): A timer is implemented with JS to track elapsed time. The sub-dials show the stopwatch seconds and minutes as they accumulate.
- CSS Transforms: The rotation of the clock hands and sub-dials is handled using CSS transform properties (rotate()).
- DOM Manipulation: Event listeners are added to the buttons to start, stop, and reset the chronograph.
