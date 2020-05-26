import { getImageUrl } from "takeshape-routing";

export function tsImageUrl({ path } = {}) {
  return getImageUrl(path);
}

const sizes = `(min-width: 900px) 1000px, (max-width: 900px) and (min-width: 400px) 50em, ( not (orientation: portrait) ) 300px, ( (orientation: landscape) or (min-width: 1000px) ) 50vw, 100vw`;

const widths = [100, 500, 1000];

export function fluidImage(path, aspectRatio) {
    const fluid = {
        aspectRatio,
        src: getImageUrl(path),
        srcSet: widths.map(w =>`${getImageUrl(path,{w})} ${w}w`).join(','),
        sizes,
    }

    return fluid
}
