function Node(pos, path) {
  if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
    return null;
  }
  return { pos, path };
}

function knightMoves([x, y], [a, b]) {
  let pos = Node([x, y], [[x, y]]);
  let q = [pos];
  let currentNode = q.shift();

  while (currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
    let moves = [
      [+2, -1],
      [+2, +1],
      [-2, -1],
      [-2, +1],
      [+1, -2],
      [+1, +2],
      [-1, -2],
      [-1, +2],
    ];
    moves.forEach((move) => {
      let position = [
        currentNode.pos[0] + move[0],
        currentNode.pos[1] + move[1],
      ];
      let node = Node(position, currentNode.path.concat([position]));
      if (node) {
        q.push(node);
      }
    });
    currentNode = q.shift();
  }
  console.log(
    `=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`,
  );
  currentNode.path.forEach((pos) => {
    console.log(pos);
  });
}
knightMoves([3, 3], [7, 7]);
