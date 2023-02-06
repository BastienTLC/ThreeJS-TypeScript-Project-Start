# ThreeJS-TypeScript-Project-Start
This GitHub repository is a starter template for creating a ThreeJS project using TypeScript. Simply clone the repo to quickly get started on building interactive 3D graphics with ThreeJS and TypeScript. The repository contains all necessary dependencies and configurations, allowing you to focus on coding and building your project with ease.

## Features

- A starter template for building ThreeJS projects with TypeScript
- Camera class for creating a camera
- Scene class for creating a scene from a world of imported mesh
- Assets class for importing mesh from a file in either video or glTF format
- Environment class for managing lights in the world
- Experience class for combining the camera, scene, and renderer to create a rendered experience

## Project Structure

```lua
Three-Scene
|
+-- Utils
|   |
|   +-- assets.ts
|   +-- Resources.ts
|   +-- Sizes.ts
|   \-- Time.ts
|
+-- World
|   |
|   +-- character.ts
|   +-- Environment.ts
|   +-- Floor.ts
|   \-- World.ts
|
+-- Camera.ts
+-- Experience.ts
+-- Renderer.ts
\-- main.ts
 ```

## Usage

1. Clone the repository
git clone [repos](https://github.com/BastienTLC/ThreeJS-TypeScript-Project-Start)

2. Navigate to the project directory
`cd ThreeJS-TypeScript-Project-Start`
3. Install the dependencies
`npm install`
4. Start a development server
`npm run dev`



