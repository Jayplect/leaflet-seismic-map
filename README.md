## Overview
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this project, I built a map to visualize USGS data which could be a useful resource for educating the public and other government organizations on issues facing our planet.

<img width="758" alt="image" src="https://github.com/Jayplect/leaflet-challenge/assets/107348074/06af8c7e-290b-4ca5-9153-ceccfb5587e9">

## Tools Used
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white)
![D3](https://img.shields.io/badge/d3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-239120?style=for-the-badge&logo=plotly&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## Summary of Dataset
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. The <a href = "https://github.com/Jayplect/belly-button-dashboard/tree/main/data">samples.json</a> file was not accessed locally but it is provided for reference.

## Project Steps
Firstly, I created an app that renders data dynamically to the dashboard upon request. I used the D3 library and a promise function `then` to read in samples.json from the <a href ="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"> URL</a> and log the data for inspection. Following that, I built a function that initializes a default display.The default display was the first sample of the data. One important feature of the dashboard is a dropdown menu that can be used to select choice id representing an individual for viewing. Upon user selection of id, the barplot- showing the top top 10 OTUs found in that individual `(Fig 1)`, the distribution of the OTU `(Fig 2)`, the washing frequency for the individual's belly button `(Fig 3)` and the individual's demographic information `(Fig 4)` are all updated on the dashboard `(Fig 5)`. 

- Fig 1: Horizontal bar chart display of the Top 10 OTU. The sample values represent the y-axis for the bar chart. While the OTU ids served as the labels for the bar chart. I also added a chart feature that allows hovertext for the OTU labels.

![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/b5129e2c-b4fb-4a5a-91f4-f0cb51a7e97c)

- Fig 2: Bubble chart showing the distribution of OTU in an individual. The OTU ids and sample values served as the x values and y values respectively. The sample values represent the marker size while the OTU ids (i.e., the composition of bacteria) served as the the marker colors. Again, I also added a chart feature that allows hovertext for the OTU labels.

![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/cd298cc0-77e4-45d1-9e18-5c9afc28dcbd)

- Fig 3:  Guage chart showing the weekly washing frequency of an individual.

![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/aa3657cc-67aa-4dfe-a679-81ad217d54d1)

- Fig 4: The sample metadata, i.e., an individual's demographic information.
 
![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/698e6ed9-3d83-49c4-9e4a-453fe85d1208)

- Fig 5: Dashboard to explore the microbes in a selected individual's belly button

![image](https://github.com/Jayplect/belly-button-microbe-diversity-dashboard/assets/107348074/04597161-37b9-4e2a-9856-02c49ca6428a)

## Deployment of Dashboard 
Deployed to  <a href = "https://jayplect.github.io/belly-button-microbe-diversity-dashboard/">Github pages<a/> to view.

## References
Dataset created by the United States Geological Survey
