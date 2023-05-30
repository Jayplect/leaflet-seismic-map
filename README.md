## Overview
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this project, I built a map to visualize USGS data which could be a useful resource for educating the public and other government organizations on issues facing our planet.

## Tools Used
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white)
![D3](https://img.shields.io/badge/d3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-239120?style=for-the-badge&logo=plotly&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## Summary of Dataset
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. For this visualization, I used seismic activity in magnitude and depth for the past 7 days. The data could be found here   The following image is an example screenshot of what appears when you visit this link:

## Project Steps
I imported and visualized the data using `Leaflet library` and then created a map that plots all the earthquakes over the past week based on their longitude and latitude. The data markers reflects the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes would therefore appear larger, and earthquakes with greater depth should appear darker in color. Other features of the map include a popups that provide additional information about the earthquake when its associated marker is clicked. To aid visualization, I also created a legend that provides context for the map data.

- Fig 1:Snapshot of map 

<img width="758" alt="image" src="https://github.com/Jayplect/leaflet-challenge/assets/107348074/06af8c7e-290b-4ca5-9153-ceccfb5587e9">

## Deployment of Dashboard 
Deployed to  <a href = "https://jayplect.github.io/belly-button-microbe-diversity-dashboard/">Github pages<a/> to view.

## References
Dataset created by the United States Geological Survey
