/**
 * https://github.com/backend-br/forum/issues/63#issuecomment-383595989
*/
function searchBinaryTree(tree, targetElement, root = 0) {
    let element = tree[root];
    console.log(`actual element: ${element}, actual root: ${root}`);
    if (!element) {
        return false;
    }
    console.log(`Trying to find ${targetElement}`);
    if (element === targetElement) {
        return true;
    }
    if(element > targetElement) {
        return searchBinaryTree(tree, targetElement, root * 2 + 1);
    }
    return searchBinaryTree(tree, targetElement, root * 2 + 2);
}
const treeElements = [50, 30, 70, 20, 40, 60, 80];
const searchElement = 70;
console.log(searchBinaryTree(treeElements, searchElement));
