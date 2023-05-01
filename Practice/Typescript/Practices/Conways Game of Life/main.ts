const S =  2;
const GoL ={
  "dead": ['dead', 'dead', 'dead', 'alive', ...],
  "alive": [...],
  "red": [...],
}
current_cell =  'dead' | 'alive';
nbors = ...;
assert(0 <= nbors && nbors <= 8);
GoL[current_cell][nbors] = next_cell;