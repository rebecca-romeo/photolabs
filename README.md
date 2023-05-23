# PhotoLabs
PhotoLabs is a simple stock photo application - specifically a React-based single-page application (SPA) that allows users to view photos in different contexts.

## Users:
1. The user can view photos from the homepage loaded from the API.
2. The user can navigate to different topics to see photos in different categoriese.
3. The user can click on a photo to open a modal where they can view a larger version of the photo and relevant / similar photos.
4. The user can like a photo from anywhere within the application where the photo is displayed.
5. The user can view a heart icon with a notification in the navigation if there are liked photos.

## Homepage view
On the homepage, users can see all the photos.
!["homepage with all photos"](https://github.com/rebecca-romeo/photolabs/blob/main/frontend/public/homepage.png)

## Category view
Users can choose from 5 categories located in the navigation which will display relevant photos to that topic - here we are viewing the travel category
!["choosing a category shows photos of similar topic"](https://github.com/rebecca-romeo/photolabs/blob/main/frontend/public/category.png)


## Modal view
Users can scroll through a modal to see a larger image of the selected photo, details about the publisher of the photo, and similar photos
!["modal that includes large photo and similar photos"](https://github.com/rebecca-romeo/photolabs/blob/main/frontend/public/modal.png)


## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
