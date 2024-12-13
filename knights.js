class Node {
  constructor(position, parent = null) {
    this.position = position;
    this.parent = parent;
    this.edges = [
      [position[0] + 1, position[1] + 2],
      [position[0] + 1, position[1] - 2],
      [position[0] - 1, position[1] + 2],
      [position[0] - 1, position[1] - 2],
      [position[0] + 2, position[1] + 1],
      [position[0] + 2, position[1] - 1],
      [position[0] - 2, position[1] + 1],
      [position[0] - 2, position[1] - 1],
    ];
  }
}

function knightMoves(start, goal) {
  knight = new Node(start);
  let queue = [knight];

  let visited = new Set();
  visited.add(knight);

  while (queue.length > 0) {
    let current = queue.shift();

    if (JSON.stringify(current.position) == JSON.stringify(goal)) {
        let path = [];
        let tempNode = current;

        while (tempNode != null) {
            path.unshift(tempNode.position);
            tempNode = tempNode.parent;
        }
        console.log("shortest path: ", path);
        return path;
    }

    current.edges.forEach((move) => {
      if (!visited.has(move)) {
        visited.add(move);
        let newNode = new Node(move, current);
        queue.push(newNode);
      }
    });
  }
}

knightMoves([0, 0], [5, 6]);
console.log("cat");
