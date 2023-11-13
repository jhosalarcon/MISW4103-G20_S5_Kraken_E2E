## Jhosmary Alarcon, Erik Olier, David Caycedo

Prerequisitos: 
1. Usar la versión 16.14.2 de Node.Js
2. Tener instalado Android Studio
3. En las propiedades de Android Studio tener instalado:
	a. Android SDK Platform-Tools
	b. Android SDK Build-Tools
	c. Android SDK Tools (Obsolete) (Se deben poner visibles los paquetes obsoletos si se está usando Android Studio Giraffe o una versión más reciente)

4. Configurar las siguientes rutas en PATH: 
	a. C:\Users\***\AppData\Local\Android\Sdk\platform-tools
	b. C:\Users\***\AppData\Local\Android\Sdk\tools
	c. C:\Users\***\AppData\Local\Android\Sdk\build-tools\VERSION
	d. C:\Users\***\AppData\Local\Android\Sdk

5. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre

Instalación y set-up de Kraken: 
1. Ir a la carpeta de trabajo (En este caso, la carpeta de Ghost o del release)
2. Sí aun no lo tiene, debe instalar Kraken en global: npm install kraken-node -g
3. Inicializar Kraken: kraken-node gen
4. Instalar Kraken en local: npm install kraken-node
5. Instalar Appium en global: npm install -g appium
6. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor

Ejecución: 
Para ejecutar Kraken use el comando: npx kraken-node run. Obvio hay que tener un test primero


## Javier Fajardo
