import { lineString } from '@turf/helpers';
import circle from '@turf/circle';
import booleanIntersects from '@turf/boolean-intersects';

function main() {
  const nodeLoc = [8.539392627379126, 51.65501850301057];
  const circlePoligon = circle(nodeLoc, 2, { units: 'meters' });
  const line = lineString([[8.536258, 51.6544729], [8.5398563, 51.6550992]]);

  const intersects = booleanIntersects(line, circlePoligon);
  alert(intersects);
}

main();
