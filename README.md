# Amigo Secreto

## Descripción

Este proyecto es una aplicación web que permite gestionar y sortear un **Amigo Secreto** de manera fácil e intuitiva. Los usuarios pueden agregar amigos a una lista, visualizar a los participantes y realizar el sorteo de manera aleatoria.

## Características

- **Agregar amigos**: Permite ingresar nombres en una lista.
- **Visualización de participantes**: Muestra todos los amigos añadidos antes del sorteo.
- **Sorteo aleatorio**: Asigna un amigo secreto de forma justa.
- **Restablecimiento automático**: Después del sorteo, la lista se vacía para un nuevo juego.

## Tecnologías utilizadas

- **HTML, CSS y JavaScript** para la interfaz y lógica del sorteo.

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/ignatigre/amigo-secreto.git
cd amigo-secreto
```

2. Abrir el archivo `index.html` en un navegador.

## Uso

1. Ingresar el nombre de los participantes en el campo correspondiente.
2. Presionar el botón **Agregar** para incluirlos en la lista.
3. Una vez agregados todos los participantes, presionar **Sortear**.
4. El resultado mostrará quién es el amigo secreto.

## Problemas comunes y soluciones

### 1. No aparece el resultado del sorteo

- Asegúrate de haber ingresado al menos dos amigos antes de sortear.
- Revisa la consola del navegador (`F12` → Consola) para ver errores.

### 2. No se guardan los nombres

- Verifica que el código JavaScript esté cargado correctamente en `app.js`.

## Contribuciones

Si deseas contribuir, puedes hacer un **fork** del repositorio y enviar un pull request con mejoras o nuevas funciones.

## Licencia

Este proyecto está bajo la licencia MIT.
