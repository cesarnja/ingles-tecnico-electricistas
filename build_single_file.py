# Construye la version de UN SOLO ARCHIVO de la app
# (para enviarla al telefono por WhatsApp/Drive y abrirla con Chrome sin internet)
import re, io, os

BASE = r"C:\Users\cesar\OneDrive\Desktop\Ingles tecnico"
OUT = os.path.join(BASE, "InglesTecnico-1archivo.html")

def read(p):
    with io.open(os.path.join(BASE, p), "r", encoding="utf-8") as f:
        return f.read()

html = read("index.html")

# Quitar lo que no aplica en un archivo suelto (PWA/manifest/iconos externos)
html = html.replace('  <link rel="manifest" href="manifest.webmanifest">\n', "")
html = html.replace('  <link rel="apple-touch-icon" href="icons/apple-touch-icon.png">\n', "")
html = html.replace('<link rel="icon" href="icons/favicon-48.png">',
    '<link rel="icon" href="data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'.9em\' font-size=\'90\'>⚡</text></svg>">')

# CSS en linea (acepta css/styles.css con o sin ?v=N)
css = read(os.path.join("css", "styles.css"))
html = re.sub(r'<link rel="stylesheet" href="css/styles\.css(\?v=\d+)?">',
              lambda m: "<style>\n" + css + "\n</style>", html)

# JS en linea (icons -> data -> app, en ese orden; acepta ?v=N)
for js in ["icons.js", "data.js", "app.js"]:
    code = read(os.path.join("js", js))
    code = code.replace("</script>", "<\\/script>")  # por seguridad si apareciera
    html = re.sub(r'<script src="js/%s(\?v=\d+)?"></script>' % re.escape(js),
                  lambda m, c=code: "<script>\n" + c + "\n</script>", html)

# Quitar el registro del service worker (no aplica al abrir como archivo)
html = re.sub(r"  <script>\n    // Registrar el service worker.*?</script>\n", "", html, flags=re.S)

with io.open(OUT, "w", encoding="utf-8") as f:
    f.write(html)

print("Generado:", OUT, "->", os.path.getsize(OUT), "bytes")
# Verificacion basica: no deben quedar referencias externas
for pat in ['src="js/', 'href="css/', 'href="manifest', 'href="icons/']:
    if pat in html:
        print("ADVERTENCIA: quedo referencia externa:", pat)
