# Genera los iconos PNG de la PWA: rayo navy sobre cuadrado redondeado ambar
from PIL import Image, ImageDraw
import os

OUT = r"C:\Users\cesar\OneDrive\Desktop\Ingles tecnico\icons"
os.makedirs(OUT, exist_ok=True)

AMBER = (245, 158, 11, 255)      # --amber-500
NAVY = (15, 27, 45, 255)         # --navy-900

# Puntos del rayo en un lienzo de 0..100
BOLT = [(57, 4), (24, 57), (44, 57), (38, 96), (76, 41), (54, 41), (68, 4)]

def draw_icon(size, pad_ratio, rounded=True, bg=AMBER, transparent_corners=True):
    """pad_ratio: fraccion del lienzo como margen alrededor del rayo."""
    s = 4  # supersampling para bordes suaves
    S = size * s
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if rounded and transparent_corners:
        radius = int(S * 0.18)
        d.rounded_rectangle([0, 0, S - 1, S - 1], radius=radius, fill=bg)
    else:
        d.rectangle([0, 0, S, S], fill=bg)
    pad = S * pad_ratio
    scale = (S - 2 * pad) / 100.0
    pts = [(pad + x * scale, pad + y * scale) for (x, y) in BOLT]
    d.polygon(pts, fill=NAVY)
    return img.resize((size, size), Image.LANCZOS)

# Iconos estandar (esquinas redondeadas transparentes)
draw_icon(192, 0.16).save(os.path.join(OUT, "icon-192.png"))
draw_icon(512, 0.16).save(os.path.join(OUT, "icon-512.png"))

# Maskable: fondo a sangre completa, rayo dentro de la "zona segura" (40% radio -> pad ~0.24)
draw_icon(512, 0.26, rounded=False, transparent_corners=False).save(os.path.join(OUT, "maskable-512.png"))

# Apple touch icon: 180px, fondo completo sin transparencia (iOS redondea solo)
draw_icon(180, 0.18, rounded=False, transparent_corners=False).save(os.path.join(OUT, "apple-touch-icon.png"))

# Favicon PNG chico
draw_icon(48, 0.14).save(os.path.join(OUT, "favicon-48.png"))

print("Iconos generados en", OUT)
for f in sorted(os.listdir(OUT)):
    print(" -", f, os.path.getsize(os.path.join(OUT, f)), "bytes")
