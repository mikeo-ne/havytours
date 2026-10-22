"""Give each static font instance a unique family name so SVG can select
the exact weight via font-family, which resvg needs (it keys on family)."""
import glob, os, sys
from fontTools.ttLib import TTFont

files = glob.glob('fonts/*.ttf')
for path in sorted(files):
    base = os.path.basename(path)[:-4]
    if base.startswith('GreatVibes'):
        family, style = 'Great Vibes', 'Regular'
    else:
        fam, weight = base.rsplit('-', 1)
        family = f'{fam.replace("PlayfairDisplay","Playfair")} {weight}'
        style = 'Regular'
    f = TTFont(path)
    name = f['name']
    full = family if style == 'Regular' else f'{family} {style}'
    ps = full.replace(' ', '')
    for rec in list(name.names):
        if rec.nameID in (1, 4, 6, 16):
            name.removeNames(nameID=rec.nameID)
    for pid, eid, lid in ((3, 1, 0x409),):
        name.setName(family, 1, pid, eid, lid)
        name.setName(style, 2, pid, eid, lid)
        name.setName(full, 4, pid, eid, lid)
        name.setName(ps, 6, pid, eid, lid)
    f.save(path)
    print('renamed', base, '->', family)
