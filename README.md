<h1 align="center">Banuba Face Mask Integration</h1>

<h1>Installation Instructions and running</h1>

> Android

- Clone the project locally
```
$ git clone https://github.com/WalobwaD/Banuba.git
```
- Change directory to Banuba/Project Namee
```
$ cd Banuba
```
- Install Dependancies/Packages
```
$ yarn
```

**NOTE** 
- Use a physical device to run tests on the Project, because the project uses the camera and the emulator does not have a camera.
  - For this make sure you have android studio installed and the android sdk installed.
  - Connect your physical Android device using a USB to your computer.
  - Run <code>adb devices</code> to check if your device is connected.

- Run the project
```
$ yarn android
```